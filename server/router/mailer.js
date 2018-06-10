const router = require('express').Router();
const nodemailer = require('nodemailer');

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
    service: '<< gmail? >>',
    auth: {
      user: '<< Email goes here >>',
      pass: '<< Password goes here >>',
    },
  });

  const mailOptions = {
    from: `"<< This Website >>" <${email}>`,
    to: '<< Email goes here >>',
    subject: '...',
    html: `
      <b>Date: ${newDate}</b><br />
      <br />
      <b>Name: ${name}</b><br />
      <br />
      <b>Phone: ${phone}</b><br />
      <br />
      <b>Comments: ${writings}</b><br />
    `,
  };

  /* eslint no-console: 0 */
  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      return console.log(err);
    }
    return res.send('ok');
  });
});

module.exports = router;
