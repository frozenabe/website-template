const router = require('express').Router();
const nodemailer = require('nodemailer');
const aws = require('aws-sdk');

const awsConfig = require('../utils/awsConfig');

aws.config.update(awsConfig);

router.post('/email', (req, res) => {
  const {
    name,
    phone,
    email,
    writings,
    date,
  } = req.body;
  const newDate = date.split('T')[0];
  const transporter = nodemailer.createTransport({
    SES: new aws.SES({
      apiVersion: '2010-12-01',
    }),
    sendingRate: 1,
  });

  const mailOptions = {
    from: process.env.MOEDIM_EMAIL,
    to: process.env.MOEDIM_EMAIL,
    subject: '구매/위탁 문의입니다.',
    text: `
      ${email} \n
      ${newDate} \n
      이름: ${name} \n
      전화번호: ${phone} \n
      요청 글: ${writings} \n
    `,
  };

  /* eslint no-console: 0 */
  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      return console.log(err);
    }
    return res.status(200).send('ok');
  });
});

module.exports = router;
