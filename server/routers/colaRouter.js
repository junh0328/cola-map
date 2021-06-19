const express = require('express');
const colaRouter = express.Router();
const Cola = require('../models/cola');

colaRouter.get('/beverage', async (req, res) => {
  try {
    const getCola = await Cola.find({});
    // 가져온 콜라 목록 확인
    res.json({
      Cola: getCola,
    });
  } catch (error) {
    console.log(error);
  }
});

colaRouter.post('/beverage', async (req, res) => {
  try {
    const newCola = await Cola.create({
      // 더미 데이터
      name: "Yuseong-gu mom's touch",
      category: 'coca-cola',
      latitude: 36.354550634149405,
      longitude: 127.33991019967712,
    });
    // 생성한 데이터 확인
    res.json({
      newCola: newCola,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = colaRouter;
