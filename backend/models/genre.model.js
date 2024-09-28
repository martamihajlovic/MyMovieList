const db = require('../config/db.config')

const getGenres = result => {
 db.query(`SELECT * FROM genre`, (err, res) => {
    if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
   }
   result(null, res);
    });
};

const getGenreByID = (genreID, result) => {
    db.query(`SELECT * FROM genre WHERE id = ${genreID}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      result(null, res);
    });
};

const getGenreByName = (genreName, result) => {
    db.query(`SELECT * FROM genre WHERE id = ${genreName}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      result(null, res);
    });
};

const deleteGenre = (genreID, result) => {
    db.query(`DELETE * FROM genre WHERE id = ${genreID}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      result(null, res);
    });
};

const addGenre = (genre,result) => {
    db.query(`INSER INTO gerne ('id', 'name') VALUES ('${genre.genreID}', '${genre.genreName}');`, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
          result(null, res);
    })
}

module.exports = {
    getGenres,
    getGenreByID,
    getGenreByName,
    deleteGenre,
    addGenre
    
}