const express = require('express');
const auth = require('../middleware/auth')
const postRouter = express.Router();
const Post = require('../models/post');
const Store = require('../models/store');

// 제보하기
postRouter.post('/', auth, async (req, res) => {
  try {
    const store = req.body.store
    if (store) {
      await Post.create({
        store: store,
        user: req.user,
        beverage: req.body.beverage
      })
    } else {
      const newStore = new Store({
        storeName: req.body.storeName,
        category: req.body.category,
        latitude: req.body.latitude,
        longitude: req.body.longitude
      })
      await newStore.save()

      await Post.create({
        store: newStore,
        user: req.user,
        beverage: req.body.beverage
      })
    }
    res.status(200).send({ message: 'success' })
  } catch (e) {
    res.status(500).send(e.message)
  }
})

// 특정 Store에 제보목록 받기
postRouter.get('/store', async (req, res) => {
  try {
    const store = req.query.store
    const posts = await Post.find({ store: store })
      .populate('store')
      .populate('user')
      .sort({ createdAt: -1 })

    res.status(200).send(posts)
  } catch (e) {
    res.status(500).send(e.message)
  }
})

// 특정 User의 제보목록 받기
postRouter.get('/user', auth, async (req, res) => {
  try {
    const user = req.user
    const posts = await Post.find({ user: user })
      .populate('store')
      .populate('user')
      .sort({ createdAt: -1 })

    res.status(200).send(posts)
  } catch (e) {
    res.status(500).send(e.message)
  }
})
module.exports = postRouter;
