const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id });

    if (!user) {
      throw new Error('cannot find user');
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    return res.status(500).send('로그인 해주세요')
  }
};

module.exports = auth;
