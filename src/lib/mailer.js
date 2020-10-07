//configuração de emails
const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1c65989f491082",
      pass: "1d3f25037c4159"
    }
});



