const express = require('express')
const app = express()
const userRouter = require('./user')

const User = require('./db')

app.use('/user',userRouter)

app.listen(9094,function(){
    console.log('listen in 9094')
})