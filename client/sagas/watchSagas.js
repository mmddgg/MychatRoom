
import {takeEvery,takeLatest }from "redux-saga";
import ACTION from "../reducers/actions";
import {
    register, checkNickname
} from "./workSagas";

const {userCenter } = ACTION;

function * watchRegister() {
    console.log('a');
    yield  takeLatest(userCenter.register.submit, register);
    console.log('b');
}

function * wactchCheckNickname(){
    console.log('c');
    yield  takeLatest(userCenter.checkNickname.submit,checkNickname);
    console.log('d');
}



export default function * rootSagas(){
    // yield takeLatest(userCenter.register.submit, register);
    // yield takeLatest(userCenter.checkNickname.submit,checkNickname);
    yield wactchCheckNickname();
    yield watchRegister();
}


