import React from 'react'
// 按需加载antd组件,需要babel插件和webpack的配置,详情见官网
import { Button,List } from 'antd-mobile'
import { connect } from 'react-redux'
import { add,reduce,addSync } from './index.redux.js';

const mapStatetoProps = (state) => {
  // 要state什么属性放到props里
  // 这里放入了所有的state
  return { state:state }
}

// 要什么方法放到props里，自动dispatch
const actionCreators = { add,reduce,addSync }

class App extends React.Component{
  render(){
    const boss = '李云龙'
    console.log(this.props)
    // 从app.js根结点传入的store树，子节点获取
    return (
      <div>
        <h1 onClick={ this.props.add }>现在的状态是{ this.props.state.firstReducer }</h1>
        <h2 onClick={ this.props.reduce }>独立团，团长 { boss }</h2>
        <h3 onClick={ this.props.addSync }>redux中的异步需要借助中间件</h3>
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
      solders:['a','b','c'],
      newSolder:'xxb'
    }
    //this.addSolders.bind(this)
  }
  
  addSolders(){
  //jsx内绑定的方法找不到正确的this
  //通过箭头函数，使其内部使用的是外部的this，并执行函数
    this.setState({
      solders:[...this.state.solders,this.state.newSolder]
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
          renderHeader={'士兵列表'}
          {this.state.solders.map((v,k)=>{
            return (
              // 拥有重复的key时会影响react的diff算法工作量，且在控制台会报错
              <List.Item key={k}>
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

// 装饰App
App = connect(mapStatetoProps,actionCreators)(App)
// @connect(mapStatetoProps,actionCreators)和上面代码相同，但是需要引入plugins插件


export default App