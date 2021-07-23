const express = require('express');
const globalRouter = express.Router();

globalRouter.get('/', function (req, res) {
  if (req.session.token !== null) {
    const token = req.session.token;
    const user = req.session.user;
    req.session.token = null;
    req.session.user = null;
    return res.status(200).send({ token, user });
  }
  return res.status(200).send();
});

module.exports = globalRouter;
