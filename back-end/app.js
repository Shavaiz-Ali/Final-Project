// app.js
import express from "express";
const app = express();
const PORT = process.env.PORT || 9000;
import adminRoute from "./routes/index.route.js";
import connectDb from "./config/connectDb.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "uploads")));
dotenv.config();
connectDb();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors("*"));

app.use("/", adminRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
