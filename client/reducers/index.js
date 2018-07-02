import {register,checkNickname} from "./userCenter";
import {common} from "./common";
import { combineReducers } from 'redux'


export default combineReducers({
    register,checkNickname,common
})



