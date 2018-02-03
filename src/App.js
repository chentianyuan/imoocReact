import React from 'react'
// 按需加载antd组件,需要babel插件和webpack的配置,详情见官网
import { Button,List } from 'antd-mobile'

class App extends React.Component{
  render(){
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长 {boss}</h2>
        <Other boss="张大彪"></Other>
        <Fn></Fn>
      </div>
    )
  }
}

//只有jsx，则可以简写成函数形式
function Fn(props){
  return <h2>测试</h2>
}

class Other extends React.Component{
  //在render以外，渲染之前就该被确定
  constructor(props){
    //props并不是这个组件自身的state，而是传递过来的，所以要通过super调用父级的构造函数设置props
    super(props)
    this.state = {
      solders:['a','b','c']
    }
    //this.addSolders.bind(this)
  }
  
  addSolders(){
  //jsx内绑定的方法找不到正确的this
  //通过箭头函数，使其内部使用的是外部的this，并执行函数
    this.setState({
      solders:[...this.state.solders,'新兵大案子']
    })
  }
  componentWillMount(){
    console.log('组件马上加载')
  }
  render(){
    console.log('组件正在加载')
    return (
      <div>
        <h1>一营营长，{this.props.boss}</h1>
        <Button type="primary" onClick={()=>this.addSolders()}>新兵入伍</Button>
        <List>
          renderHeader={()=>'士兵列表'}
          {this.state.solders.map(v=>{
            return (
              <List.Item key={v}>
                {v}
              </List.Item>
            )
          })}  
        </List>
      </div>
    )
  }
  componentDidMount(){
    console.log('组件加载完毕')
  }
}

export default App