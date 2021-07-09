const express = require('express');
const Post = require('../models/post');
const storeRouter = express.Router();
const Store = require('../models/store');

// 전체 제보 목록 확인
storeRouter.get('/', async (req, res) => {
  try {
    const getStores = await Store.find({});
    res.json({
      Stores: getStores,
    });
  } catch (error) {
    console.log(error);
  }
});

// 제보 확인
storeRouter.get('/:id', async (req, res) => {
  try {
    const getStore = await Store.findById({ _id: req.params.id }).lean();
    const post = await Post.find({ store: getStore._id })
      .populate('user')
      .sort({ createdAt: -1 })

    getStore.post = post
    res.json({
      Store: getStore,
    });
  } catch (error) {
    console.log(error);
  }
});

// 제보 생성
storeRouter.post('/', async (req, res) => {
  try {
    const {
      body: { storeName, category, latitude, longitude },
    } = req;
    const newStore = await Store.create({
      storeName,
      category,
      latitude,
      longitude,
    });
    // 생성한 데이터 확인
    res.json({
      newStore: newStore,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: error,
    });
  }
});

// 데이터 전체 삭제
storeRouter.delete('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Store.findByIdAndDelete({ _id: id });
    res.json({
      message: 'Complete',
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = storeRouter;
