import express from "express";
import dbConnect from "./database/db";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/Route";

const app=express();

app.use(cors());
app.use(express.json());
dotenv.config();

const port=process.env.PORT ? process.env.PORT:5000;

dbConnect();

app.listen(port,()=>{
    console.log('app is listening on port : '+port)
})

app.use("/api",userRoute);