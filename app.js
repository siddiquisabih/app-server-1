const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyparser = require('body-parser')
const User = require('./model')

// mongoose.connect('mogodb://localhost/users' )
mongoose.connect("mongodb://muneeb:muneeb123@ds031877.mlab.com:31877/mlab_practice",{
    useMongoClient : true
}
 )

mongoose.Promise = global.Promise

app.use(bodyparser.json())



app.get('/api', function(req, res, next) {
    User.find({})
    .then((data)=>{

        res.send(data)
    })
})

app.post('/api/addName', function(req, res, next) {
let name = req.body.name
    User.create({name : name})
    .then(()=>{

        res.send(name);
    })
  
})

module.exports = app





