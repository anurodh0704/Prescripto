import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";
import authUser from "./middlewares/authUser.js";
import { updateProfile } from "./controllers/userController.js";
//app config

const app = express();
const port = process.env.port || 4000;
connectDB();
connectCloudinary();

//Middleware

app.use(express.json());
app.use(cors());

//api endpoint
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);
//localhost:4000/api/admin/add-doctor
// userRouter.post("/update-profile", authUser, updateProfile);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Server started", port));
