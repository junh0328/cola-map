const mongoose = require('mongoose');

const colaSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

const Cola = mongoose.model('Cola', colaSchema);

module.exports = Cola;
