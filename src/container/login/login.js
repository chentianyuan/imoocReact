import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:'',
            pwd:''
        }
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleLogin(){
        this.props.login(this.state)
    }
    register(){
        this.props.history.push('/register')
    }
    render(){
        return (
            <div>
                {this.props.user.redirectTo?<Redirect to={this.props.user.redirectTo}/>:null}
                <Logo></Logo>
                <h2>登录页</h2>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={(v)=>{this.handleChange('user',v)}}                        
                        >用户</InputItem>
                        <WhiteSpace />
                        <InputItem
                            onChange={(v)=>{this.handleChange('pwd',v)}}                        
                        >密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type="primary"
                        onClick={()=>{this.handleLogin()}}
                    >登录</Button>
                    <WhiteSpace />
                    <Button onClick={()=>{this.register()}} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

Login = connect(state=>state,{ login })(Login)

export default Login