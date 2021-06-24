const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema(
  {
    storeName: {
      type: String,
      required: true,
      unique: true,
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
    report: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
