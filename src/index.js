import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
//import { firstReducer } from './index.redux.js';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'

// 组合后的reducer仅在入口处引用一次即可
import reducers from './reducer.js'
import Auth from './auth.js'
import Dashboard from './dashboard.js'

// 将chrome的redux插件与项目的redux整合
const reduxDevtools = window.devToolsExtension?window.devToolsExtension():f=>f
// firstReducer中有初始的state
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDevtools
));


class Test extends React.Component{
    render(){
        // props包含history,match,location三个对象
        // 可以通过this.props.history.push('/')来实现跳转
        // console.log(this.props)
        return <h2>测试组件</h2>
    }
}

ReactDOM.render(
    // 提供provider函数，应用在最外层，传入store即可，所有的action也不用一个一个传进来了
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/login" exact component={ Auth }></Route>
                    <Route path="/dashboard" component={ Dashboard }></Route>
                    <Redirect to="/dashboard"></Redirect>
                </Switch>
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
registerServiceWorker();
