const express = require('express');
const User = require('../models/user');
const userRouter = express.Router();
const auth = require('../middleware/auth')

userRouter.post('/login', async (req, res) => {
  try {
    const uniqId = req.query.uniqId

    let user = await User.findOne({ uniqId: uniqId })
    if (!user) {
      const userObject = new User({
        uniqId: uniqId,
        nickname: req.query.nickname
      })
      user = await userObject.save()
    }
    const token = await user.generateAuthToken()
    res.send({ token: token })
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
})

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