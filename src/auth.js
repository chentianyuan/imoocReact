// 认证页面
import React from 'react'
import { connect } from 'react-redux'
import { login,logout } from './auth.redux'
import { Redirect } from 'react-router-dom'

const mapStatetoProps = (state) => {
    // 要state什么属性放到props里
    return { state:state }
}
  
    // 要什么方法放到props里，自动dispatch
const actionCreators = { login,logout }


class Auth extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
    console.log(this.props)
    const redirectToDashboard = <Redirect to='/dashboard'></Redirect>
    return (
        <div>
            { this.props.state.auth.isAuth ? redirectToDashboard : null }
            <h2>你没有权限，请先登录</h2>
            <button onClick={this.props.login}>登陆</button>
        </div>
        )
    }
}

Auth = connect(mapStatetoProps,actionCreators)(Auth)

export default Auth