const express = require('express');
const userRouter = express.Router();

const User = require('../models/user.js');
const auth = require('../middleware/auth');

const axios = require('axios');
const qs = require('qs');

// 카카오 로그인 로직
userRouter.get('/kakao/login', async (req, res) => {
  // const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URL}&response_type=code&scope=profile,account_email`;
  const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URL}&response_type=code&scope=profile_nickname,profile_image,account_email`;
  // 비즈니스 앱
  // 카카오 Developer에서 앱을 새로 생성해야 비즈 앱으로 적용되는 것 같습니다.
  res.redirect(kakaoAuthURL);
});

userRouter.get('/kakao/callback', async (req, res) => {
  // kakao 토큰 발급
  let kakaoToken;
  try {
    kakaoToken = await axios({
      method: 'POST',
      url: 'https://kauth.kakao.com/oauth/token',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        grant_type: 'authorization_code',
        client_id: process.env.KAKAO_KEY,
        redirectUri: process.env.KAKAO_REDIRECT_URL,
        code: req.query.code,
      }),
    });
  } catch (e) {
    res.status(500).send(e.message);
  }

  // kakao 토큰으로 유저 정보 확인
  let user;
  try {
    user = await axios({
      method: 'get',
      url: 'https://kapi.kakao.com/v2/user/me',
      headers: {
        Authorization: `Bearer ${kakaoToken.data.access_token}`,
      },
    });
  } catch (e) {
    res.status(500).send(e.message);
  }

  // 해당 유저 정보로 로그인 처리 후 colamap 토큰 발행
  const profile = user.data;
  let token;
  try {
    const exUser = await User.findOne({ accountEmail: profile.kakao_account.email });
    if (exUser) {
      token = await exUser.generateAuthToken();
      req.session.user = exUser;
    } else {
      const newUser = await User.create({
        uniqId: profile.id,
        profileNickname: profile.kakao_account.profile.nickname,
        profileImage: profile.kakao_account.profile.profile_image_url,
        accountEmail: profile.kakao_account.email,
      });
      token = await newUser.generateAuthToken();
      req.session.user = newUser;
    }
    req.session.token = token;
    res.redirect('http://localhost:3000/');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// 임시 API - 모든 유저 조회
userRouter.get('/', async (req, res) => {
  try {
    let user = await User.find({});
    res.send({
      AllOfUser: user,
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// 임시 API - 모든 유저 데이터 삭제
userRouter.delete('/all', async (req, res) => {
  try {
    await User.deleteMany({});
    res.send({ message: 'Success' });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// 유저 프로필
userRouter.get('/profile', auth, async (req, res) => {
  try {
    const id = req.user._id;
    const user = await User.findById({ _id: id });
    res.status(200).send(user.profileNickname);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// 닉네임 변경
userRouter.patch('/nickname', auth, async (req, res) => {
  try {
    const id = req.user._id;
    const nickname = req.body.profileNickname;
    if (nickname) {
      await User.findByIdAndUpdate(id, { profileNickname: nickname });
      res.status(200).send(req.body.profileNickname);
    } else {
      res.status(500).send({ error: 'nickname is required' });
    }
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// 회원 탈퇴
userRouter.delete('/quit', auth, async (req, res) => {
  try {
    const id = req.user._id;
    const deletedUser = await User.findOneAndDelete({ _id: id });
    res.status(200).send(deletedUser);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

module.exports = userRouter;
