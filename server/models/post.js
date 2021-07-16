const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    store: {
      type: mongoose.Types.ObjectId,
      ref: 'Store',
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    drink: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
