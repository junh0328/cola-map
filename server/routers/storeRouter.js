const express = require('express');
const Post = require('../models/post');
const storeRouter = express.Router();
const Store = require('../models/store');

// 전체 가게 목록 조회
storeRouter.get('/', async (req, res) => {
  try {
    const getStores = await Store.find({});
    res.status(200).send(getStores);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// 특정 가게 조회
storeRouter.get('/:storeId', async (req, res) => {
  try {
    const id = req.params.storeId;
    const getStore = await Store.find({ kakaoId: id });
    // const post = await Post.find({ store: getStore._id })
    //   .populate('user')
    //   .sort({ createdAt: -1 });

    // getStore.post = post;
    res.status(200).send(getStore);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// 특정 가게 데이터 삭제(임시)
storeRouter.delete('/:storeId', async (req, res) => {
  const id = req.params.storeId;
  try {
    const posts = await Post.deleteMany({ store: id });
    const store = await Store.findOneAndDelete({ kakaoId: id });
    res.status(200).send({ '삭제된 스토어': store, '함께 삭제된 스토어의 제보 수': posts.n });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// 카테고리(콜라 종류)별 데이터 조회
storeRouter.get('/category/pepsi', async (req, res) => {
  try {
    const pepsi = await Store.find({ mostPosted: 'pepsi' });
    res.status(200).send(pepsi);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
storeRouter.get('/category/coca', async (req, res) => {
  try {
    const coca = await Store.find({ mostPosted: 'coca' });
    res.status(200).send(coca);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = storeRouter;
