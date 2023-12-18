// app.js
import express from "express";
const app = express()
const PORT = process.env.PORT || 9000;
import adminRoute from "./routes/index.route.js";
import connectDb from "./config/connectDb.js";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config()
connectDb();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors("*"))

app.use("/", adminRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
