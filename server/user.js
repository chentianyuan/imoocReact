const express = require('express')
const Router = express.Router()
const model = require('./db')
const User = model.getModel('user')
// md5加密
const utils = require('utility')



Router.get('/list',function(req,res){
    User.find({},function(err,doc){
        return res.json(doc)
    })
})


Router.post('/login',function(req,res){
    const {user,pwd} = req.body
    // 'pwd':0设为0，使得返回的doc中pwd不被显示
    User.findOne({user,pwd:md5Pwd(pwd)},{'pwd':0},function(err,doc){
        if(!doc){
            return res.json({code:1,msg:'用户名或密码错误'})
        }
        // md5加密加salt
        // 保存cookie
        res.cookie('userid',doc._id)
        return res.json({code:0,data:doc})        
    })
})


Router.post('/register',function(req,res){
    const {user,pwd,type} = req.body
    User.findOne({user:user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }

        const userModel = new User({user,pwd:md5Pwd(pwd),type})
        // md5加密加salt
        userModel.save(function(e,d){
            if(e){}
            const {user, type, _id} = d
            res.cookie('userid',_id)
            return res.json({code:0, user, type, _id})
        })
    })
})

Router.get('/info',function(req,res){
    // cookie校验
    const {userid} = req.cookies
    if(!userid){
        return res.json({code:0})
    }
    User.findOne({_id:userid},{'pwd':0},(err,doc)=>{
        if(err){
            return res.json({code:1,msg:'出错了'})
        }else{
            return res.json({code:0,data:doc})
        }
    })
})

function md5Pwd(pwd){
    const salt = 'wo_de_salt'
    return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router