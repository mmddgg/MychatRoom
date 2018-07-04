import { call, put } from 'redux-saga/effects'
import API from "../api/api";
import ACTION from "../reducers/actions";


const { userCenter } = ACTION;

function * checkNickname(action){
    console.log('e');
    try{
        console.log(action);
        const result = yield call(API.checkNickname,action.payload);
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
        const result = yield call(API.register,action.payload);
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

export {
    register,checkNickname
};