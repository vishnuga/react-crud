import User from '../models/UserModel.js'

export const getUsers= async (req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const getUserById= async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const saveUser= async (req, res) => {
    try{
        const inserteduser = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
        })
        res.status(201).json(inserteduser)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}


export const updateUser= async (req, res) => {
    try{
        const updatedUser = await User.updateOne({_id:req.params.id}, {$set: req.body})
        res.status(200).json(updatedUser)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const deleteUser= async (req, res) => {
    try{
        const deletedUser = await User.deleteOne({_id:req.params.id})
        res.status(200).json(deletedUser)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}