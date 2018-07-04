import { combineReducers } from 'redux';
import common from "./common";
import {register,checkNickname} from "./userCenter";
import {chatRoomlist,chatRoomdetail} from "./chatRoom";




export default combineReducers({
    common,
    register,checkNickname,
    chatRoomlist,chatRoomdetail
})



