
import {takeEvery,takeLatest }from "redux-saga";
import ACTION from "../reducers/actions";
import {
    register, checkNickname,chatRoomlist,chatRoomdetail
} from "./workSagas";

const {userCenter,chatRoom } = ACTION;

function * watchRegister() {
    yield  takeLatest(userCenter.register.submit, register);
}

function * wactchCheckNickname(){
    yield  takeLatest(userCenter.checkNickname.submit,checkNickname);
}

function * watchChatroomlistQuery(){
    console.log('a');
    yield takeLatest(chatRoom.list.query,chatRoomlist);
    console.log('b');
}

function * watchChatroomDetailQuery(){
    yield takeLatest(chatRoom.detail.query,chatRoomdetail);
}


export default function * rootSagas(){
    yield takeLatest(userCenter.register.submit, register);
    yield takeLatest(userCenter.checkNickname.submit,checkNickname);
    yield takeLatest(chatRoom.list.query,chatRoomlist);
    yield takeLatest(chatRoom.detail.query,chatRoomdetail);

    // yield wactchCheckNickname();
    // yield watchRegister();
    // yield watchChatroomlistQuery();
    // yield watchChatroomDetailQuery();
}


