import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    id: String,
    firstname: String,
    lastname: String,
    age: String,
    hobbies: Array,
    image: String,
});



const User = mongoose.model("User", UserSchema)

export default User