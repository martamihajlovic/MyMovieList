const { getUsers,
    getUserByID,
    getUserByUsername,
    getUserByEmail,
    addUser,
    deleteUser,
    alterUser
} = require('../models/user.model');

const showUsers = (req,res) => {
    getUsers ((err,data) => {
    if(err){
        res.send(err)
    }else{
        res.send(data)
    }
}
)
}
const showUserByID = (req,res) =>{    
    getUserByID(req.params.userID, (err,data) =>{
    if(err){
        res.send(err)
    }
    else{
        if(data != ''){
           console.log(data);
           res.send(data)
    }else
        res.status(404).send("Not found")
    }
      
})
}
const showUsersByEmail = (req,res)  =>{
    getUserByEmail(req.params.email, (err,data) =>{
    if(err){
        res.send(err)
    }
    else{
        if(data != ''){
            console.log(data);
            res.send(data)
        }else
            res.status(404).send("Not found")
    }
})
}
const showUsersByUsername = (req,res)  =>{
    getUserByUsername(req.params.username, (err,data) =>{
    if(err){
        res.send(err)
    }
    else{
        if(data != ''){
            console.log(data);
            res.send(data)
        }else
            res.status(404).send("Not found")
    }
})
}
const createUser = (req,res) => {
    let user= {     
        username : "test",
        password :"test",
        email :"test",
        bio :"test",
        avatarlink :"test",
        id : 1,   
    }
    addUser(user,(err,data)=>{
    if(err){
        res.send(err)
    }
    else{
        res.send(data)
    }
})
}
const updateUser = (req,res) =>{
    let id = req.params.userID
    id = 1
    let userdata = {  
        password :"test",
        email :"alterovano",
        bio :"test",
        avatarlink :"test",
    }
    alterUser(userdata, id,(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            if(data != [])
            res.send(data)
            else
            res.status(404).send("Not found") 
        }
    })
}
const removeUser = (req,res) => {  
    deleteUser(req.params.userID,(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            if(data != [])
            res.send(data)
            else
            res.status(404).send("Not found")
    }
})
}

module.exports = {
    showUsers,
    showUserByID,
    showUsersByUsername,
    showUsersByEmail,
    createUser,
    updateUser,
    removeUser
}
