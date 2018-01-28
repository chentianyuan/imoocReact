const express = require('express')
const app = express()

const User = require('./db')

app.get('/',(req,res)=>{
    // res.send('<h1>asdasd</h1>')    
    // 文档方法，新增数据
    User.create({
        user:'weiyi',
        age:19
    },(err,doc)=>{

    })
    
    //User.remove({age:18},(err,dov)=>{})
    User.updateMany({user:'weiyi'},{$set:{age:888}},(err,doc)=>{
        console.log(doc)
    })

    User.find({},(err,doc)=>{
        res.json(doc)
    })
})

app.listen(9094,function(){
    console.log('listen in 9094')
})