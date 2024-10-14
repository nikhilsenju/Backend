import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    console.log(req.cookies.accessToken);
    
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request: Missing token");
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
    const user = await User.findById(decoded?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ApiError(401, "Unauthorized request: Invalid user");
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message); // Log error details
    throw new ApiError(401, error?.message || "Unauthorized request");
  }
});
