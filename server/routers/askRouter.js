const express = require('express');
const askRouter = express.Router();

const auth = require('../middleware/auth');
const Ask = require('../models/ask');

// 모든 문의 조회
askRouter.get('/', async (req, res) => {
  try {
    const asks = await Ask.find({});
    res.status(200).send(asks);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// 문의 생성
askRouter.post('/', auth, async (req, res) => {
  try {
    const user = req.user._id;
    const {
      body: { ask_title, ask_contents },
    } = req;
    const ask = await Ask.create({ user, ask_title, ask_contents });
    res.status(200).send(ask);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// 내가 한 문의 조회
askRouter.get('/me', auth, async (req, res) => {
  try {
    const id = req.user._id;
    const asks = await Ask.find({ user: id });
    res.status(200).send(asks);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// 내가 한 특정 문의 삭제
askRouter.delete('/me/:askId', auth, async (req, res) => {
  try {
    const id = req.params.askId;
    const ask = await Ask.findOneAndDelete({ _id: id, user: req.user._id });
    res.status(200).send(ask);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// 특정 유저 문의 조회
askRouter.get('/user/:userId', async (req, res) => {
  try {
    const id = req.params.userId;
    const asks = await Ask.find({ user: id });
    res.status(200).send(asks);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

module.exports = askRouter;
