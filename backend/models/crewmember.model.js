const db = require('../config/db.config')

const getCrewmember = result => {
 db.query(`SELECT * FROM crew_movies`, (err, res) => {
   if (err) {
     console.log("error: ", err);
     result(null, err);
     return;
   }
   result(null, res);
 });
};
const getCrewmemberByName = (crewmemberName,result) => {
  db.query(`SELECT * FROM crew_movies WHERE crew_name = "${crewmemberName}"`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}

const getCrewmemberByMovieID = (movieID,result) => {
  db.query(`SELECT * FROM crew_movies WHERE idmovie = ${movieID}` , (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}
const addCrewmember = (crewmember, result) =>{
  db.query(`INSERT INTO crew_movies (idmovie, crew_name, role) VALUES (${crewmember.movieID}, '${crewmember.crewmemberName}', '${crewmember.role}')`,(err,res)=>{
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  })
}
const deleteCrewmember = (crewmember, result) =>{
  db.query(`DELETE FROM crew_movies WHERE idmovie = ${crewmember.movieID} AND  crew_name = '${crewmember.crewmemberName}' AND role = '${crewmember.role}'`,(err,res)=>{
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  })
}

module.exports = {
  getCrewmember,
  getCrewmemberByName,
  getCrewmemberByMovieID,
  addCrewmember,
  deleteCrewmember
  }