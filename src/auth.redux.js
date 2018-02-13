const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

export function auth(state={isAuth:false,'user':'lyl'},action){
    switch(action.type){
        case LOGIN:
            return {...state,isAuth:true}
        case LOGOUT:
            return {...state,isAuth:false}
        default:
            return state
    }
}

// 生成action
export function login(){
    return { type:LOGIN }
}
export function logout(){
    return { type:LOGOUT }
}