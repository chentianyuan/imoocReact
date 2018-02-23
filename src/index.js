import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// 从react-redux引入的Provider包裹根组件注入store树
import { Provider } from 'react-redux'
// import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
//import { firstReducer } from './index.redux.js';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'


import Login from './container/login/login.js'
import Register  from './container/register/register.js'
import AuthRouter  from './component/authroute/authroute.js'
// 组合后的reducer仅在入口处引用一次即可
import reducers from './reducer.js'
import './conf.js'
import './index.css'

// firstReducer中有初始的state
const store = createStore(reducers,compose(
    // 异步reducer所需,compose即组合，应用applyMiddleware中间件整合redux-thunk中的thunk对象，使redux可以处理异步，redux默认只处理同步
    // action可以返回函数，使用dispatch提交action
    applyMiddleware(thunk),
    // 将chrome的redux插件与项目的redux整合
    window.devToolsExtension?window.devToolsExtension():f=>f
));

class Boss extends React.Component{
    render(){
        return <p>我是boss</p>
    }
}

ReactDOM.render(
    // 提供provider函数，应用在最外层，传入store即可，所有的action也不用一个一个传进来了
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/login' component={ Login }></Route>
                <Route path='/Register' component={ Register }></Route>
                <Route path="/boss" component={ Boss }></Route>
                <AuthRouter></AuthRouter>
            </div>
        </BrowserRouter>
    </Provider>),     
    document.getElementById('root')
)

// 自执行render函数，并监听
// render()
// 使用react-redux后，不需要subscribe(render)函数了
// store.subscribe(render)
// registerServiceWorker注册的service worker 只在生产环境中生效（process.env.NODE_ENV === 'production'）
// server worker是一个后台运行的线程，用于离线缓存，后台推送等功能
// registerServiceWorker();

// props包含history,match,location三个对象
// 可以通过this.props.history.push('/')来实现跳转
// console.log(this.props)}