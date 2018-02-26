// 此组件只做身份验证功能，无实际内容
import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'

class AuthRoute extends React.Component{
    componentDidMount(){
        // 这边除了第一次加载和手动刷新，其他操作都不会使这个组件重复mount
        const pubilcList = ['/login','/register']
        const pathname = this.props.location.pathname
        if(pubilcList.indexOf(pathname)>-1){
           return 
        }
        // 获取用户信息
        axios.get('/user/info').then(res=>{
            if(res.status == 200){
                if(res.data.code == 0){
                    // 已登录
                    this.props.loadData(res.data.data)
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

AuthRoute = connect(state=>state,{loadData})(AuthRoute)

export default withRouter(AuthRoute)