import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age: String,
    hobbies: Array,
    image: String,
});

const User = mongoose.model("User", UserSchema)

export default User