const db = require('../config/db.config')

const getUsers = result => {
 db.query(`SELECT * FROM user`, (err, res) => {
   if (err) {
     console.log("error: ", err);
     result(null, err);
     return;
   }
   result(null, res);
 });
};
const getUserByID = (userID,result) => {
  db.query(`SELECT * FROM user WHERE id = "${userID}"`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}
const getUserByUsername = (username,result) => {
  db.query(`SELECT * FROM user WHERE username = "${username}"` , (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}
const getUserByEmail = (email,result) => {
    db.query(`SELECT * FROM user WHERE email = "${email}"` , (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      result(null, res);
    });
  }
const addUser = (user, result) =>{
  db.query(`INSERT INTO user (username, password, email, bio, avatarlink, id) VALUES ('${user.username}', '${user.password}','${user.email}', '${user.bio}', '${user.avatarlink}', '${user.id}')`,(err,res)=>{
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  })
}
const alterUser = (userdata, id,result) =>{
    db.query(`UPDATE user SET password = '${userdata.password}', email = '${userdata.email}', bio = '${userdata.bio}', avatarlink = '${userdata.avatarlink}' WHERE id = ${id} `,(err,res)=>{
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        result(null, res);
      })
}
const deleteUser = (userID, result) =>{
  db.query(`DELETE FROM user WHERE id = ${userID}`,(err,res)=>{
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  })
}

module.exports = {
    getUsers,
    getUserByID,
    getUserByUsername,
    getUserByEmail,
    addUser,
    alterUser,
    deleteUser
  }