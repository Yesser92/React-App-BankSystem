const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors =require("cors");
app.use(cors());
app.use(express.json());
const {getAllUsers,addAccount,deleteAccount,} = require('../database-mysql/index.js')

const db = require('../database-mysql/index.js');



app.get('/api/users/', (req, res) => {
  db.getAllUsers((error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error retrieving users from database');
    }
    res.send(results);
  });
});

app.get('/api/users/:name', (req, res) => {
  const name = req.params.name;
  db.getUserByName(name, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error retrieving user from database');
    }
    if (!result) {
      return res.status(404).send('User not found');
    }
    res.send(result);
  });
});


app.post('/api/users',  (req, res)=> {
  addAccount(req.body.id,req.body.name,req.body.balance,(result,error)=>result?res.json(result):res.send(error))
});

app.delete('/api/users/:id',(req,res)=>{
  deleteAccount(req.params.id,(result,error)=>result?res.json(result):res.send(error))
})
app.put("/api/users/:username/:newUsername", async (req, res) => {
  const { username, newUsername } = req.params;
  try {
    await updateUser(username, newUsername);
    res.json({
      message: `User ${username} updated to ${newUsername} successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
