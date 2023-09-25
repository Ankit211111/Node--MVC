//controllers contains functions that is to be attached with routes
const User = require("../models/user")

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers); 
};

const handleGetUserById =async(req,res)=>{
    const id =(req.params.id);
    const user = await User.findById(id);
    if(!user){
        return res.status(404).json({msg:"no user found"})
    }
    return res.json(user);
}
async function handleUpdateUserById (req,res){
    await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"})
         return res.json({status:"success"});
     
}
async function handleDeleteUserById (req,res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({status:"success"});   
}
async function handleCreateNewUser (req,res){
    const newUser = req.body;
    if(!newUser || !newUser.first_name){
        return res.status(400).json({message:"All fields required"})
    }
    const result = await User.create({
        firstName   : newUser.first_name,
        lastName    : newUser.last_name,
        email       : newUser.email ,
        gender      : newUser.gender,
        jobTitle    : newUser.job_title,
     });
     return res.status(201).json({msg:"success ",id:result._id})
 
}
module.exports ={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}