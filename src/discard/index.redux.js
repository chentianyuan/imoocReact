const ADD = 'ADD'
const REDUCE = 'REDUCE'

// reducer
// 通过reducer简历
// 根据老的state和action 生成新的state
export function firstReducer(state=0,action){
    switch(action.type){
        case ADD:
            return ++state
        case REDUCE:
            return --state
        default:
            return state
    }
}

// action creator
// action必须由一个函数来生成
export function add(){
    return { type:ADD }
}
export function reduce(){
    return { type:REDUCE }
} 
export function addSync(){
    return dispatch => {
        setTimeout(() => {
            // 执行一下需要执行的dispatch
            dispatch(add())
        }, 2000);
    }
}