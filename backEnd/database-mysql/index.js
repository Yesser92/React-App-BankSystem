var mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', //127.0.0.1
    user: 'root',
    password: 'root',
    database: 'banking_system'
  })

function getAllUsers(callback) {
  const sql = 'SELECT * FROM clients';
  connection.query(sql, (error, results) => {
    if (error) {
      return callback(error);
    }
    callback(null, results);
    console.log(results)
  });
}
function getUserByName(name, callback) {
    const sql = 'SELECT id, name, balance FROM clients WHERE name = ?';
    connection.query(sql, [name], (error, results) => {
      if (error) {
        return callback(error);
      }
      if (results.length === 0) {
        return callback(null, null);
      }
      callback(null, results[0]);
    });
  }
  var addAccount = (id,name,balance,callback)=> {
    let sqlQuery = `INSERT INTO clients (id,name,balance) VALUES (?,?,?)`
    connection.query(sqlQuery,[id,name,balance],(result,error)=>callback(result,error))
};
var deleteAccount = (id,callback)=> {
  let sqlQuery = `DELETE FROM clients WHERE id=?`
  connection.query(sqlQuery,[id],(result,error)=>callback(result,error))
};

module.exports = {
    getUserByName,
  getAllUsers,addAccount,deleteAccount
};
