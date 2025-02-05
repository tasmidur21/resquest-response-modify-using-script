// hotel-service/index.js
const express = require('express');
const { hotels } = require('./data');

const app = express();
const PORT = 3001;

app.use(express.json());

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

// Start the server
app.listen(PORT, () => {
  console.log(`Hotel Service running on http://localhost:${PORT}`);
});