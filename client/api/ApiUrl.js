import { WSAETOOMANYREFS } from "constants";

const host = 'http://127.0.0.1:8090', apiFlag = '/webservice/',
    baseUrl = host + apiFlag ;

const userCenter = {
    checkNickname:'userCenter/checkNickname',
    register:'userCenter/register',
    signIn:'userCenter/signIn',
    signOut:'userCenter/signOut',
    resetPwd:'userCenter/resetPwd',
};

const chatroom = {
    chatroomList:'chatroom/list',
    chatroomDetail:'chatroom/detail',
}

const unti = {
    builtReturn(result){
        let oReturn = {
            code:200,
            mesg:'success'
        };
        if(Object.prototype.toString.call(result.datalist) === '[object Array]'){
            oReturn.total = 43;
            oReturn.pageSize = 10;
            oReturn.currenPage = 1;
            oReturn.result = result.datalist
        }else{
            oReturn.result = result;
        }
        return oReturn;
    },
    formatGetParms(parm){
        let str = '';
        for(var x in parm){
            if(parm[x] ===  null || parm[x]  === undefined ){ continue;}
            str += (`${x}=${ typeof parm[x] === 'object'  ? JSON.stringify(parm[x]) : parm[x] }&`);
        }
        str.slice(-1);
        return   str;
    },
};

export  {baseUrl,apiFlag , userCenter,chatroom,unti}