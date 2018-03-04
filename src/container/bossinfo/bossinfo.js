import React from 'react'
import { NavBar,InputItem,TextareaItem } from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector.js'

class Bossinfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:''
        }
    }
    onChange(key,val){
        this.setState({
            [key]:val
        })
    }
    render(){
        return (
            <div>
                <NavBar mode="dark">Boss完善信息页面</NavBar>
                <AvatarSelector></AvatarSelector>
                <InputItem onChange={(v)=>{this.onChange('title',v)}}>招聘职位</InputItem>
                <InputItem onChange={(v)=>{this.onChange('title',v)}}>公司名称</InputItem>
                <InputItem onChange={(v)=>{this.onChange('title',v)}}>职位薪资</InputItem>
                <TextareaItem row={3} autoHeight title='职位要求' onChange={(v)=>{this.onChange('title',v)}}></TextareaItem>
            </div>
        )
    }
}

export default Bossinfo