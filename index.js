const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 4000


// session creation   npm i express-session
// var session=require("express-session")

app.use(cors())

app.get("/", (req, res) => {
    res.send("api is live")
})

app.post("/", (req, res) => {
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: "ArjunKSoni1234@gmail.com",
        pass: "AKSoni@1234",
      },
    });
    const options = {
      from: "ArjunKSoni1234@gmail.com",
      to: 'aksoni0520@gmail.com',
      subject: "Assignment React Native by Arjun Kumar Soni",
      message: `Name:- ${req.body.name}
      Email:- ${req.body.email}
      Mobile Number:- ${req.body.mobile}
      Message:- ${req.body.message}`,
    };

    transporter.sendMail(options, (err) => {
      if (err) console.log(err)
      else { console.log("Message send successfully..") }
    });

})



app.listen(port, () => {
    console.log(`successfully loaded at ${port}`)
})

module.exports = app;