const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema(
  {
    storeName: {
      type: String,
      required: true,
      unique: true,
    },
    kakaoId: {
      type: String,
      required: true,
      unique: true,
    },
    addressX: {
      type: Number,
      required: true,
    },
    addressY: {
      type: Number,
      required: true,
    },
    mostPosted: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
