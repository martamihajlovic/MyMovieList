const db = require('../config/db.config')

const getActors = result => {
 db.query(`SELECT * FROM crew_movies WHERE role = "actor"`, (err, res) => {
   if (err) {
     console.log("error: ", err);
     result(null, err);
     return;
   }
   result(null, res);
 });
};
const getActorByName = (actorName,result) => {
  db.query(`SELECT * FROM crew_movies WHERE crew_name = "${actorName}" AND role = "actor"`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}

const getActorsByMovieID = (movieID,result) => {
  db.query(`SELECT * FROM crew_movies WHERE idmovie = ${movieID} AND role = "actor"` , (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}
const addActor = (actor, result) =>{
  db.query(`INSERT INTO crew_movies (idmovie, crew_name, role) VALUES (${actor.movieID}, '${actor.actorName}', 'actor')`,(err,res)=>{
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  })
}
const deleteActor = (actor, result) =>{
  db.query(`DELETE FROM crew_movies WHERE idmovie = ${actor.movieID} AND  crew_name = '${actor.actorName}'AND role = 'actor'`,(err,res)=>{
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  })
}

module.exports = {
  getActors,
  getActorByName,
  getActorsByMovieID,
  addActor,
  deleteActor
  }