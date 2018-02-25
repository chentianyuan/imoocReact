const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/imooc'

//连接blog数据库
mongoose.connect(DB_URL)
//连接是一个方法，监听其连接需要通过另一个api
const db = mongoose.connection

db.once('open', function () {
	console.log('数据库已连接')
})

//获取文档，传入特定的Schema方案
const models = {
    user:{
        'user':{type:String,require:true},
        'pwd':{type:String,require:true},
        'avatar':{type:String},
        'desc':{type:String},
        // 职位
        'title':{type:String},
        // boss额外字段
        'company':{type:String},
        'money':{type:String}
    }
}

// const User = mongoose.model('user',new mongoose.Schema({}))

for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:(name)=>{
        return mongoose.model(name)
    }
}