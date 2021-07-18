const express = require('express');
const userRouter = express.Router();

const User = require('../models/user');
const auth = require('../middleware/auth');

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
    res.status(200).send(user.profile_nickname);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// 닉네임 변경
userRouter.post('/set-nickname', auth, async (req, res) => {
  try {
    const id = req.user._id;
    const nickname = req.body.profile_nickname;
    if (nickname) {
      await User.findByIdAndUpdate(id, { profile_nickname: nickname });
      const user = await User.findById({ _id: id });
      res.status(200).send(user);
    } else {
      res.status(500).send({ error: 'nickname is required' });
    }
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// 회원 탈퇴
userRouter.delete('/quit', async (req, res) => {
  try {
    const id = req.user._id;
    const deletedUser = await User.findOneAndDelete({ _id: id });
    res.status(200).send(deletedUser);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// 로그인 & 회원가입
userRouter.post('/login', async (req, res) => {
  const uniqId = req.body.uniqId;
  try {
    let user = await User.findOne({ uniqId: uniqId });
    if (!user) {
      const profile_image = req.body.profile_image,
        profile_nickname = req.body.profile_nickname,
        account_email = req.body.account_email;
      const userObject = new User({
        uniqId: uniqId,
        profile_image: profile_image,
        profile_nickname: profile_nickname,
        account_email: account_email,
      });
      user = await userObject.save();
    }
    const token = await user.generateAuthToken();
    res.send({ token: token });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

// 로그아웃 기능은 프론트단에서 버튼 클릭 시 header에 authorizaiton 값을 지워주시면 될거같아요.

// router.post('/user/logout', auth, async (req, res) => {
//   try {
//     User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
//       if (err) return res.json({ success: false, err });
//       return res.status(200).send({ success: true });
//     });
//   } catch (e) {
//     res.status(500).send({message: e.message});
//   }
// })

module.exports = userRouter;
