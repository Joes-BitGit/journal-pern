require('dotenv').config();

const express = require('express');

const app = express();

app.get('/api/v1/entries', (req, res) => {
  console.log('get all entries');
})

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})