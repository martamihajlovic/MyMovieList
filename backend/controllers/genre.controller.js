const { getGenres,
    getGenreByID,
    getGenreByName,
    deleteGenre,
    addGenre
} = require('../models/genre.model');


const showGenres = (req,res) => {
      getGenres ((err,data) => {
      if(err){
          res.send(err)
      }else{
          res.send(data)
      }
    }
)
}
const showGenreByID = (req,res) =>{    
    getGenreByID(req.params.genreID, (err,data) =>{
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
const showGenreByName = (req,res)  =>{
    getGenreByName(req.params.genreName, (err,data) =>{
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
const removeGenre = (req,res) =>{    
    deleteGenre(req.params.genreID, (err,data) =>{
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
const createGenre = (req,res) => {
    let genre= {     
        name : "test",
        id : 354,
        
    }
    addGenre(genre,(err,data)=>{
    if(err){
        res.send(err)
    }
    else{
        res.send(data)
    }
})
}

module.exports = {
    showGenres,
    showGenreByID,
    showGenreByName,
    removeGenre,
    createGenre

}