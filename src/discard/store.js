import { createStore } from 'redux'



// createStore接受一个reducer创建一个新的store
const store = createStore(firstReducer)

// 通过getState获取Store树内的state
const init = store.getState()



function fn(){
    return '这里是订阅函数'
}

// 通过设置订阅函数，每次dispatch都会触发订阅函数
store.subscribe(fn)

// 派发action，派发事件
store.dispatch(action1)

console.log(init)