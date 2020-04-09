// mailer is now done by php (hosting server not support node.js)
// this is an example for nodemailer

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const nodemailer = require("nodemailer");

const env = require("./environments/environment");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  next();
});

app.use("/api/contact", async (req, res, next) => {
  const inquiry = req.body;

  if (inquiry.email !== undefined) {
    const result = await _dispatchEmail(inquiry);
    console.log("RESULT: ", result);

    if (!result.flag) {
      console.log(result.data.stack);
      return res.status(200).json({
        isEmailSent: false,
        isEmptyContent: false,
        serverRes: "Error: Failed to deliver the email."
      });
    } else {
      return res.status(200).json({
        isEmailSent: true,
        isEmptyContent: false,
        serverRes: "Successfully delivered the email."
      });
    }
  } else {
    // in case for duplicated email
    return res.status(200).json({
      isEmailSent: false,
      isEmptyContent: true,
      serverRes: 'Error: Content is empty.'
    });
  }
});

async function _dispatchEmail(inquiry) {
  const transporter = _createTransport();
  const mailOptions = _mailObj(inquiry);

  return transporter
    .sendMail(mailOptions)
    .then(info => {
      return {
        flag: true,
        data: info
      };
    })
    .catch(error => {
      return {
        flag: false,
        data: error
      };
    });
}

const _createTransport = () => {
  return nodemailer.createTransport({
    host: env.host,
    port: 465,
    tls: true,

    // web email login account
    auth: {
      user: env.email,
      pass: env.pass
    }
  });
};

const _mailObj = inquiry => {
  return (obj = {
    from: env.email,
    to: env.email,
    subject: inquiry.name + ": Message From Contact Form",
    html:
      "Name: " +
      inquiry.name +
      "<br>" +
      "Email: " +
      inquiry.email +
      "<br><br>" +
      inquiry.message
  });
};

module.exports = app;
