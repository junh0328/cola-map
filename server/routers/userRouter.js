const express = require('express');
const User = require('../models/user');
const router = express.Router();
const auth = require('../middleware/auth')

router.post("/user/register", async (req, res) => {
  const user = new User(req.body)
  if (req.body.password !== req.body.passwordCheck) {
    return res.status(400).send()
  }

  try {
    const createdUser = await user.save();

    return res.status(201).send({ success: ture });
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
})

router.post('/user/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ token: token })
  } catch (e) {
    res.status(500).send({message: e.message});
  }
})

router.post('/user/logout', auth, async (req, res) => {
  try {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  } catch (e) {
    res.status(500).send({message: e.message});
  }
})


module.exports = router;