
import {takeEvery,takeLatest }from "redux-saga";
import { call, put,select,all} from 'redux-saga/effects'
import ACTION from "../reducers/actions";
import {
    register, checkNickname,chatRoomlist,chatRoomdetail
} from "./workSagas";

const {userCenter,chatRoom } = ACTION;


export default function * rootSagas(){
    yield all([
        yield takeLatest(userCenter.register.submit, register),
        yield takeLatest(userCenter.checkNickname.submit,checkNickname),
        yield takeLatest(chatRoom.list.query,chatRoomlist),
        yield takeLatest(chatRoom.detail.query,chatRoomdetail)
    ]);
}


