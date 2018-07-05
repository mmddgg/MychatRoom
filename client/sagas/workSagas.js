import { call, put,select } from 'redux-saga/effects'
import API from "../api/api";
import ACTION from "../reducers/actions";
import { chatroom } from '../api/ApiUrl';


const { userCenter,chatRoom } = ACTION;

function * checkNickname(action){
    console.log('e');
    try{
        console.log(action);
        const {result,code,mesg} = yield call(API.checkNickname,action.payload);
        yield put({
            type:userCenter.checkNickname.success,
            payload:result
        })
    }catch(err){
        yield put({
            type:userCenter.checkNickname.fail,
            payload:err
        })
    }
}

function * register(action){
    try{
        const {result,code,mesg} = yield call(API.register,action.payload);
        yield put({
            type:userCenter.register.success,
            payload:result
        });
    }catch(error){
        yield put({
            type:userCenter.register.fail,
            payload:error
        });
    }
}

function * chatRoomlist(action){
    try{
        console.log(action);
        const result  = yield call(API.queryChatroomList,action.payload);
        yield put({
            type:chatRoom.list.querySuc,
            payload:result
        });
    }catch(error){
        yield put({
            type:chatRoom.list.queryFail,
            payload:error
        });
    }
}

function * chatRoomdetail(action){
    try{
        const {result,code,mesg}  = yield call(API.queryChatroomDetail,action.payload);
        yield put({
            type:chatRoom.detail.querySuc,
            payload:result
        });
    }catch(error){
        yield put({
            type:chatRoom.detail.queryFail,
            payload:error
        });
    }
}

export {
    register,checkNickname,chatRoomlist,chatRoomdetail
};