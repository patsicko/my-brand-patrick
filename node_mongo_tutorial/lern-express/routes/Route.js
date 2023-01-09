import express from "express";
import Controller from "../controllers/Controller";
const userRoute=express.Router();

userRoute.post("/createUser",Controller.createUser);
userRoute.get("/allUsers",Controller.getUsers);


export default userRoute;