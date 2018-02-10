import { createStore } from 'redux'

// 通过reducer简历
// 根据老的state和action 生成新的state
function firstReducer(state=0,action){
    switch(action.type){
        case 'ADD':
            return state++
        case 'REDUCE':
            return state--
        default:
            return state
    }
}

// createStore接受一个reducer创建一个新的store
const store = createStore(firstReducer)

// 通过getState获取Store树内的state
const init = store.getState()

// 派发action，派发事件

let action1 = {
    type:'ADD'
}

function fn(){
    return '这里是订阅函数'
}

// 通过设置订阅函数，每次dispatch都会触发订阅函数
store.subscribe(fn)

store.dispatch(action1)

console.log(init)