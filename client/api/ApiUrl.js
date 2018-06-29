import { WSAETOOMANYREFS } from "constants";

const host = 'http://127.0.0.1:8090', apiFlag = '/webservice/',
    baseUrl = host + apiFlag ;

const userCenter = {
    checkNickname:'userCenter/checkNickname',
    register:'userCenter/register',
    signIn:'userCenter/signIn',
    signOut:'userCenter/signOut',
    resetPwd:'userCenter/resetPwd'
};

export  {baseUrl,apiFlag , userCenter}