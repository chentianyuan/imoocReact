import axios from 'axios'

const REGISTER_SUCCESS = "REGISTER_SUCCESS"
const ERROR_MSG = 'ERROR_MSG'

const initState = {
    isAuth:false,
    msg:'',
    user:'',
    pwd:'',
    type:''
}

// 通过reducers来修改状态，dispatch(action) [或者!!!] 触发整合后的action函数返回了reducers对象，就会触发reducer
// 这个要导出，因为要在reducer.js中整合所有的reducer
export function user(state=initState,action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return {...state, msg:'', isAuth:true, ...action.payload}
        case ERROR_MSG:
            return {...state, isAuth:false, msg:action.msg}
        default:
            return state
    }
}

// 所有的action，action总是愿意返回一个对象包含一个type和一个payload
function errorMsg(msg){
    return { msg, type:ERROR_MSG }
}
function registerSuccess(data){
    return { type:REGISTER_SUCCESS, payload:data }
}

// 组件中直接可以使用的函数，该函数返回一个分发action状态的函数
// 通过返回action或者返回一个分发action的函数都能动态地改变store
export function register({user,pwd,repeatpwd,type}){
    if(!user||!pwd||!type){
        return errorMsg('用户名密码必须输入')
    }
    if(pwd!==repeatpwd){
        return errorMsg('密码和确认密码不同')
    }
    return dispatch=>{
        axios.post('/user/register',{user,pwd,type}).then(res=>{
            if(res.status==200 && res.data.code===0){
                dispatch(registerSuccess({user,pwd,type}))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    } 
}