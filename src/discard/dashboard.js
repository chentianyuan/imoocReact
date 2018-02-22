// 用户页面
// import React from 'react'
// import { Link,Route,Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'
// import App from './App.js'
// import { logout } from './auth.redux'

var mapStatetoProps = (state)=>{
    return {state:state}
}

var actionCreators = { logout }

function team2(){
    return <h2>二营</h2>
}

function team3(){
    return <h2>骑兵连</h2>
}

class Dashboard extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    
    render(){
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const match = this.props.match
        const app = (
            <div>
                {this.props.state.auth.isAuth ? <button onClick={this.props.logout}>注销</button>:null}
                    <ul>
                        <li><Link to={`${match.url}`}>一营</Link></li>
                        <li><Link to={`${match.url}/team2`}>二营</Link></li>
                        <li><Link to={`${match.url}/team3`}>骑兵连</Link></li>
                    </ul>
                    <Route path={`${match.url}`} exact component={App}></Route>
                    <Route path={`${match.url}/team2`} component={team2}></Route>
                    <Route path={`${match.url}/team3`} component={team3}></Route>
                </div>
        )
        return(
            // 没有权限则直接redirect到login页
            this.props.state.auth.isAuth ? app : redirectToLogin
        )
    }
}

// 装饰器模式重写组件
Dashboard = connect(mapStatetoProps,actionCreators)(Dashboard)

export default Dashboard