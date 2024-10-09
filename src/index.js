import connectDB from "./db/index.js";
import dotenv from "dotenv";
const port = process.env.PORT || 8000;
dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.on("error",(error)=>{
        console.log("ERROR",error);
        throw error
        
    })
    app.listen(port, () => {
      console.log(`Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
