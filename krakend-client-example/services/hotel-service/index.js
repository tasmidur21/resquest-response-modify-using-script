// hotel-service/index.js
const express = require('express');
const { hotels } = require('./data');
var bodyParser = require('body-parser')


const app = express();

const PORT = 3000;

app.use(express.json());

app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

// Get all hotels
app.get('/hotels', (req, res) => {
  res.json(hotels);
});

// Get hotel by ID
app.get('/hotels/:id', (req, res) => {
  const hotel = hotels.find(h => h.id === req.params.id);
  if (hotel) {
    res.json(hotel);
  } else {
    res.status(404).send('Hotel not found');
  }
});

app.post('/backend-a', (req, res) => {
  res.json({
      some_field: "data_from_backend_a"
  });
});

app.post('/backend-b', (req, res) => {
  console.log("Received request body:", req.body);
  res.json({
      message: "Data processed by Backend B",
      received_data: req.body
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Hotel Service running on http://localhost:${PORT}`);
});