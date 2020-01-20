require('dotenv').config()

var express = require('express')
var nodemailer = require('nodemailer')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/', (request,response) => {
    response.sendFile(__dirname+'/views/index.html')
})

app.post('/send-email', (request,response) => {
    var mailTo = request.body.mailto
    var mailSubject = request.body.mailsubject
    var mailBody = request.body.mailbody

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    let mailOptions = {
        from: 'mnmstoreid@gmail.com',
        to: mailTo,
        subject: mailSubject,
        text: mailBody,
    }

    transporter.sendMail(mailOptions, (error,info) => {
        if (error) return console.log(error)
        response.send('Email Sent')
    })
})

app.listen('3000', (request,response) => {
    console.log('Running in port 3000, please open http://localhost:3000')
})