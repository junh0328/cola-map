const express = require('express');
const Post = require('../models/post');
const storeRouter = express.Router();
const Store = require('../models/store');

// 전체 제보 목록 조회
storeRouter.get('/', async (req, res) => {
  try {
    const getStores = await Store.find({});
    res.status(200).send(getStores);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// 특정 제보 조회
storeRouter.get('/:storeId', async (req, res) => {
  try {
    const id = req.params.storeId;
    const getStore = await Store.findById({ _id: id }).lean();
    // const post = await Post.find({ store: getStore._id })
    //   .populate('user')
    //   .sort({ createdAt: -1 });

    // getStore.post = post;
    res.status(200).send(getStore);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// 특정 가게 데이터 삭제(임시)
storeRouter.delete('/:storeId', async (req, res) => {
  const id = req.params.storeId;
  try {
    const store = await Store.findByIdAndDelete({ _id: id });
    const posts = await Post.remove({ store: id })
      .status(200)
      .send({ '삭제된 스토어': store, '삭제된 스토어 제보': posts });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// 카테고리(콜라 종류)별 데이터 조회
storeRouter.get('/category/pepsi', async (req, res) => {
  try {
    const pepsi = await Store.find({ mostPosted: '펩시콜라' });
    res.status(200).send(pepsi);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
storeRouter.get('/category/coca', async (req, res) => {
  try {
    const coca = await Store.find({ mostPosted: '코카콜라' });
    res.status(200).send(coca);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = storeRouter;
