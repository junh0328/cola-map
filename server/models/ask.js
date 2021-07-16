const mongoose = require('mongoose');

const askShema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    ask_title: {
      type: String,
      required: true,
      trim: true,
    },
    ask_contents: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ask = mongoose.model('Ask', askShema);
module.exports = Ask;
