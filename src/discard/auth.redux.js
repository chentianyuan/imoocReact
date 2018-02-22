import axios from 'axios'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
// 新增USER_DATA类型的操作
const USER_DATA = 'USER_DATA'

export function auth(state={isAuth:false,'user':'lyl'},action){
    switch(action.type){
        case LOGIN:
            return {...state,isAuth:true}
        case LOGOUT:
            return {...state,isAuth:false}
        case USER_DATA:
            return {...state,user:action.payload.user,age:action.payload.age}
        default:
            return state
    }
}

export function getUserData(){
    return dispatch => {
        axios.get('/data').then(res=>{
            if( res.status === 200 ){
                dispatch(userData(res.data))
            }   
        })
    } 
}

// 生成action
export function userData(data){
    // 在getUserData中使用异步数据当做载荷传入action，最后和state混合
    return { type:USER_DATA,payload:data }
}

export function login(){
    return { type:LOGIN }
}
export function logout(){
    return { type:LOGOUT }
}