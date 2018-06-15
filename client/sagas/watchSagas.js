
import {takeEvery,takeLatest }from "redux-saga";
import ACTION from "../reducers/actions";
import {
    register
} from "./workSagas"

function* watchRegister() {
    yield takeLatest(ACTION.register.submit, register);
}


export default function * rootSagas(){
    yield watchRegister();
}


