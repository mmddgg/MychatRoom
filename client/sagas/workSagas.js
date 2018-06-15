import { call, put } from 'redux-saga/effects'
import API from "../api/api";
import ACTION from "../reducers/actions";

function * register(action){
    try{
        const result = yield call(API.register,action.payload);
        yield put({
            type:ACTION.register.success,
            payload:result
        });
    }catch(error){
        yield put({
            type:ACTION.register.fail,
            payload:error
        });
    }
}

export {
    register  
};