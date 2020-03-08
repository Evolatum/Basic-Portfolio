const path = require("path");
const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: process.env.service,
  auth: {
    user: process.env.user,
    pass: process.env.pass
  }
 });
 
 router.post("/contact",(req,res)=>{
   var mailOptions = {
     from: process.env.user,
     to: process.env.mailTo,
     subject: `PF Mail from ${req.body.name} ${req.body.email} ${req.body.phone?`(tel:${req.body.phone})`:"(no phone)"}`,
     text: req.body.message
   };
   
   transporter.sendMail(mailOptions, function(error, info){
     if (error) {
       res.err(error);
     } else {
       res.send('Email sent: ' + info.response);
     }
   }); 
 });

// Send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
