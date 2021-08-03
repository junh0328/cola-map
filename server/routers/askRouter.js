const express = require('express');
const askRouter = express.Router();

const nodemailer = require('nodemailer');

const auth = require('../middleware/auth');

// 문의 메일 발송

askRouter.post('/mail', auth, async (req, res) => {
  try {
    let {
      body: { subject, text, email },
    } = req;
    if (email == '') {
      email = '회신 원치 않음';
    }
    let data = {
      subject: subject, // 메일 제목
      text: text, // 메일 내용
      user: req.user.profileNickname,
      email: email,
    };

    let transporter = nodemailer.createTransport({
      service: 'gmail', // 메일 보내는 곳
      port: 587,
      host: 'smtp.gmail.com',
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.MAIL_USER, // 보내는 메일의 주소
        pass: process.env.MAIL_PASS, // 보내는 메일의 비밀번호
      },
    });

    // 메일 옵션
    let mailOptions = {
      from: `Colamap ${data.user}`, // 보내는 사람
      to: process.env.MAIL_USER, // 수신할 이메일
      subject: `${data.user} - ${data.subject}`, // 메일 제목
      html: `<h1 style="color: #273c75">&lt; Cola-map 문의 &gt;</h1>
            <br>
            <br>
            <ul>
                <li>이름 및 회신메일: ${data.user} (${data.email})</li>
                <br>
                <br>
                <li>문의 내용: ${data.text}</li>
            </ul>
            <br>`,
    };

    // 메일 발송
    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        res.sendStatus(500);
        console.log({ error: error.message });
      } else {
        res.status(201).send({ message: 'success' });
      }
      transporter.close();
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = askRouter;
