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


export const user = async(req, res) => {

const {id} = req.params
    
    const user = await User.findById(id);

    if(!user) throw new Error ("not working", 404);

    res.send({
        data:user
    });
};


export const removeUser = async(req, res) => {
    try {
        const id = req.params;
        const user = await User.deleteOne(id)
        res.status(200).send({
            success: "succesfully removed",
            data: id
        })
    } catch (error) {
        res.status(400).send({
            success:"failed",
            data: error.message
        });
    };
};


export const updateUser = async(req, res) =>{
    try {
       const {id} = req.params;
       const user = await User.findByIdAndUpdate({_id:id}, req.body);
       res.status(200).send({
        success: true,
        data: req.body
       })
    } catch (error) {
        res.status(400).send({
            success: false,
            data: error.message
        })
    }
}