// 合并所有的reducer 并且返回
import { combineReducers } from 'redux'

import { firstReducer } from './index.redux'
import { auth } from './auth.redux'

// 合并，用redux自带的combineReducers,每个reducer只处理自己的数据
export default combineReducers({ firstReducer,auth })