const nodemailer = require('nodemailer');
require('dotenv').config()

async function Email_Sender(email, otp) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.Email,
        pass: process.env.Password
      }
    });
    const mailOptions = {
      from: 'sigma.elaboratory@gmail.com',
      to: email,
      subject: 'Your One Time Password ',
      text: `Your OTP is ${otp}`
    };
    let response = await transporter.sendMail(mailOptions)
    return response.response;
  }
  catch (error) {
    return error;
  }

}
module.exports = Email_Sender;