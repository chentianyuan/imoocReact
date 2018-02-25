// 此组件只做身份验证功能，无实际内容
import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
class AuthRoute extends React.Component{
    componentDidMount(){
        const pubilcList = ['/login','register']
        const pathname = this.props.location.pathname
        if(pubilcList.indexOf(pathname)>-1){
            console.log(123213)
           return 
        }
        // 获取用户信息
        axios.get('/user/info').then(res=>{
            if(res.status == 200){
                console.log(res.data)
                if(res.data.code == 0){
                    // 已登录
                }else{
                    // react-router4中，通过withRouter装饰组件，通过this.props.history.push控制路由
                    // 否则纯组件的组件无法通过this.props.history去获取路由信息
                    this.props.history.push('login')                 
                }
            }
        })
    }
    render(){
        return <p>123</p>
    }
}

export default withRouter(AuthRoute)