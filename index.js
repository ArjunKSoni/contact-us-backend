const express = require('express')
const app = express()
var cors = require('cors')
const nodemailer = require("nodemailer");
const port = process.env.PORT || 4000


app.use(express.json())


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: "ArjunKSoni1234@gmail.com",
        pass: "ejgtvltvjjzgzuzt",
    },
});

// session creation   npm i express-session
// var session=require("express-session")

app.use(cors())

app.get("/", (req, res) => {
    res.send("api is live")
})

app.post("/", async (req, res) => {
    console.log(req.body);
    let options = {
      from: "ArjunKSoni1234@gmail.com",
      to: 'aksoni0520@gmail.com',
        subject: "Assignment React Native by Arjun Kumar Soni",
        html: req.body.html
    };

    transporter.sendMail(options, (err) => {
      if (err) console.log(err)
      else { console.log("Message send successfully..") }
    });
    return res.json({ success: "success" })

})


app.listen(port, () => {
    console.log(`successfully loaded at ${port}`)
})

module.exports = app;