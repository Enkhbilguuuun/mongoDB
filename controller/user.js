import User from "../model/User.js"



export const getAllUsers = async( req, res) => {

    const users = await User.find({});

    if(!users) throw new Error ("not found", 404);

    res.send({
        data:users
    });
};

export const createUser = async(req, res) => {

    const user = await User.create(req.body)

    if(!user) throw new Error("SOME FUCKING ERRORS")

    res.send({
        data:"complete"
    })
};


export const findById = async(req, res) => {

    const user
}