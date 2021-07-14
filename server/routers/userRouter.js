const express = require('express');
const User = require('../models/user');
const userRouter = express.Router();
const auth = require('../middleware/auth');

userRouter.get('/', async (req, res) => {
  try {
    let user = await User.find({});
    res.send({
      AllOfUser: user,
    });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

userRouter.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findOneAndDelete({ _id: id });
    res.send({
      'Deleted User': deletedUser,
    });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const uniqId = req.body.uniqId;

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
