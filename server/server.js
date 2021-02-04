require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();



// Imports db/index.js
const db = require('./db');

app.use(morgan("dev"));

app.use(cors());
// Need this to create data in json format middleware
app.use(express.json());
// MIDDLEWARE Example
// app.use((req, res, next) => {
//   console.log("middleware");
//   next();
// })


// express route handlers
// get all entries
app.get('/api/v1/entries', async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM entries;");
    // console.log(results.rows);
    res.status(200).json({
      status: "SUCCESS",
      results: results.rowCount,
      entry: results.rows
    })
  } catch (err) {
    console.log('ERR, get all entries backend: ', err);
    res.status(500);
  }

});

// get one entry
app.get('/api/v1/entries/:id', async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM entries WHERE id=$1;", [req.params.id])
    res.status(200).json({
      status: "SUCCESS",
      entry: results.rows
    })
  } catch (err) {
    console.log("Err, get one entry: ", err);
    res.status(500);
  }
})

// create an entry
app.post('/api/v1/entries', async (req, res) => {
  try {
    // console.log("request create:", req.body);
    const results = await db.query("INSERT INTO entries(time, location, how, personal, professional, feel) VALUES($1, $2, $3,$4,$5,$6) returning *;",
      [req.body.time, req.body.location, req.body.how, req.body.personal, req.body.professional, req.body.feel]);
    // console.log(results.rows);
    res.status(201).json({
      staus: 'success',
      entry: results.rows[0]
    })
  } catch (err) {
    console.log("ERR, create entry backend: ", err);
    res.status(400);
  }
})

// edit an entry
app.put('/api/v1/entries/:id', async (req, res) => {
  try {
    // console.log("params:", req.params);
    const result = await db.query("UPDATE entries SET time=$1, location=$2, how=$3, personal=$4, professional=$5, feel=$6, goal_complete=$7 WHERE id=$8 returning *;",
      [req.body.time, req.body.location, req.body.how, req.body.personal, req.body.professional, req.body.feel, req.body.goal, req.params.id]);
    // console.log(result.rows);
    res.status(201).json({
      status: 'success',
      entry: result.rows[0]
    })
  } catch (err) {
    console.log("ERR, Edit entry backend: ", err);
    res.status(400);
  }
})
// delete an entry
app.delete('/api/v1/entries/:id', async (req, res) => {
  try {
    const results = await db.query("DELETE FROM entries WHERE id=$1;", [req.params.id]);
    res.status(204).json({
      status: "SUCCESS"
    })
  } catch (err) {
    console.log('ERR, delete entry backend: ', err);
    res.status(400);
  }
})

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})