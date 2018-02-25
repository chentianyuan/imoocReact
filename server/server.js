const express = require('express')
const app = express()
const userRouter = require('./user')
const bodyParser = require('body-parser') // 接受post传递的参数
const cookieParser = require('cookie-parser')


app.use(cookieParser())
app.use(bodyParser.json())

// const User = require('./db')

app.use('/user',userRouter)

app.listen(9094,function(){
    console.log('listen in 9094')
})