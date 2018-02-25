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

Router.post('/register',function(req,res){
    const {user,pwd,type} = req.body
    console.log('asdasdasd')
    User.findOne({user:user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        // md5加密加salt
        User.create({user,pwd:md5Pwd(pwd),type},function(e,d){
            if(e){
                return res.json({code:1,msg:'出错了'})
            }else{
                return res.json({code:0})
            }
        })
    })
})

Router.get('/info',function(req,res){
    // cookie校验
    return res.json({code:0})
})

function md5Pwd(pwd){
    const salt = 'wo_de_salt'
    return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router