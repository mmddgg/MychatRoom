
import {takeEvery,takeLatest }from "redux-saga";
import ACTION from "../reducers/actions";
import {
    register, checkNickname
} from "./workSagas";

const {userCenter } = ACTION;

function * watchRegister() {
    yield  takeLatest(userCenter.register.submit, register);
}

function * wactchCheckNickname(){
    yield  takeLatest(userCenter.checkNickname.submit,checkNickname);
}



export default function * rootSagas(){
    yield takeLatest(userCenter.register.submit, register);
    yield takeLatest(userCenter.checkNickname.submit,checkNickname);
    // yield wactchCheckNickname();
    // yield watchRegister();
}


