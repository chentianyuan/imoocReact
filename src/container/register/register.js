import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { Redirect } from 'react-router-dom'

// 装饰器
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius' 
        }
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        // register函数已经通过connect混合进此组件
        // 调用被connect连接的这个函数时，返回的reducer会被自动dispatch
        this.props.register(this.state)
        // console.log(this.props.user.msg)
    }
    render(){
        const RadioItem = Radio.RadioItem
        console.log(this.props.user)
        return (
            <div>
                {this.props.user.redirectTo?<Redirect to={this.props.user.redirectTo}/>:null}
                <Logo></Logo>
                <List>
                    {this.props.user.msg?<p className="error-msg">{this.props.user.msg}</p>:null}
                    <InputItem
                        onChange={(v)=>{this.handleChange('user',v)}}
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={(v)=>{this.handleChange('pwd',v)}}
                    >密码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={(v)=>{this.handleChange('repeatpwd',v)}}
                    >确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem 
                        checked={this.state.type == 'genius'}
                        onChange={()=>this.handleChange('type','genius')}
                    >牛人</RadioItem>
                    <RadioItem 
                        checked={this.state.type == 'boss'}
                        onChange={()=>this.handleChange('type','boss')}                            
                    >BOSS</RadioItem>
                    <WhiteSpace />
                    <Button 
                        type="primary"
                        onClick={()=>this.handleRegister()}
                    >注册</Button>
                </List>
                
            </div>
        )
    }
}

// connect将store中的State和reducer触发函数都混入props
Register = connect(state=>state,{ register })(Register)

export default Register