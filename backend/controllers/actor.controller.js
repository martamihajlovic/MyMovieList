const { getActors,
        getActorByName,
        getActorsByMovieID,
        addActor,
        deleteActor
    } = require('../models/actor.model');

const showActors = (req,res) => {
    getActors ((err,data) => {
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
)
}
const showActorByName = (req,res) =>{    
    getActorByName(req.params.actorID, (err,data) =>{
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
const showActorsByMovieID = (req,res)  =>{
    getActorsByMovieID(req.params.movieID, (err,data) =>{
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
const createActor = (req,res) => {
    let actor= {
        movieID : req.body.movieID,
        actorName: req.body.actorName,

    }
    actor.movieID = 11
    actor.actorName = "test"
    addActor(actor,(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
}
const removeActor = (req,res) => {
    let actor= {
        movieID : req.params.movieID,
        actorName: req.params.actorName,
    }
    deleteActor(actor,(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
}

module.exports = {
    showActors,
    showActorByName,
    showActorsByMovieID,
    createActor,
    removeActor
}
