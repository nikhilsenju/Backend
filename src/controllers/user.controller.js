import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, password, username } = req.body;
  console.log("email", email);
  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }
  const existedUser = User.findOne({
    $or: [{ email }, { username }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exist");
  }
  const avatarLocalPath = req.files?avatar[0]?.path


});
export { registerUser };
