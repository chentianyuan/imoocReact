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
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

var Models = {
    
}

module.exports = User