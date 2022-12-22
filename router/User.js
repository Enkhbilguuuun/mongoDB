import express from "express";
import { getAllUsers, createUser, user, updateUser, removeUser} from "../controller/user.js";


const router = express.Router();


router.route("/").get(getAllUsers).post(createUser);
// router.post("/user", createUser);
router.route('/:id').get(user).put(updateUser).delete(removeUser);


export default router