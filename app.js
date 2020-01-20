var express = require('express')

var app = express()

app.get('/', (request,response) => {
    response.sendFile(__dirname+'/views/index.html')
})

app.listen('3000', (request,response) => {
    console.log('Running in port 3000, please open http://localhost:3000')
})