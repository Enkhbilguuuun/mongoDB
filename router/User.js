import express from "express";
import { getAllUsers, createUser, findById } from "../controller/user.js";


const router = express.Router();


router.get("/user", getAllUsers);
router.post("/user", createUser);
router.get("/user", findById)

export default router