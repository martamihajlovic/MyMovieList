const { getCrewmember,
    getCrewmemberByName,
    getCrewmemberByMovieID,
    addCrewmember,
    deleteCrewmember
} = require('../models/crewmember.model');

const showCrewmembers = (req,res) => {
    getCrewmember ((err,data) => {
    if(err){
        res.send(err)
    }else{
        if(data != ''){
           console.log(data);
           res.send(data)
    }else
        res.status(404).send("Not found")
    }
}
)}

const showCrewmemberByName = (req,res) =>{    
    getCrewmemberByName(req.params.crewID, (err,data) =>{
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
const showCrewmembersByMovieID = (req,res)  =>{
    getCrewmemberByMovieID(req.params.movieID, (err,data) =>{
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

const createCrewmember = (req,res) => {
    let crewmember= {
        movieID : req.body.movieID,
        crewmemberName: req.body.crewmemberName,
        role: req.body.role,
    
    }
    crewmember.movieID = 11
    crewmember.crewmemberName = "test"
    crewmember.role = "test"
    addCrewmember(crewmember,(err,data)=>{
    if(err){
        res.send(err)
    }
    else{
        res.send(data)
    }
})
}
const removeCrewmember = (req,res) => {
    let crewmember= {
        movieID : req.params.movieID,
        crewmemberName: req.params.crewmemberName,
        role: req.params.role,
    }
    deleteCrewmember(crewmember,(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
})
}

module.exports = {
showCrewmembers,
showCrewmemberByName,
showCrewmembersByMovieID,
createCrewmember,
removeCrewmember
}
