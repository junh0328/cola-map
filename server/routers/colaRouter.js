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
    const {
      body:{ storeName, category, latitude, longitude },
    } = req;
    const newCola = await Cola.create({
      storeName,
      category,
      latitude,
      longitude,
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