import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
import Router from "./routes/contactsRoutes.js";
import { errorhandler } from "./middleware/errorHandler.js";
import connectDB from "./config/config.js";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorhandler);
connectDB();

app.use("/", Router);

app.listen(PORT, () => {
  console.log(`server running in http://localhost:${PORT}`);
});
