import fetch from 'isomorphic-fetch';
import ngprogress from "nprogress";
import xFetch from './fetch';
import {baseUrl,userCenter,chatroom ,unti} from "./ApiUrl.js";
import mockData from "../../mock/mock";

const mockStatus = true;



export default {
    
    //检测昵称是否已存在
    async checkNickname(parm){
        const url = `${baseUrl}${userCenter.checkNickname}?nickname=${parm.nickname}`;      
        const result =  await xFetch(url);
        const md = mockData.checkNickname;
        return mockStatus ?  unti.builtReturn(md): result;
    },
    //注册
    async register(parm){
        const url = `${baseUrl}${userCenter.register}`;      
        const result = await xFetch(url,{
            method:'POST',
            body:JSON.stringify(parm)
        })
        return mockStatus ? unti.builtReturn(mockData.register) : result;
    },
    //查询聊天室列表
    async queryChatroomList(parm){
        console.log(parm);
        const url = `${baseUrl}${chatroom.chatroomList}?${unti.formatGetParms(parm)}`;
        const result  = await xFetch(url);
        const md = mockData.chatroomList;
        console.log(md);
        return mockStatus ? unti.builtReturn(md) : result;
    },
    //查询聊天室详情
    async queryChatroomDetail(parm){
        const url = `${baseUrl}${chatroom.chatroomDetail}?${unti.formatGetParms(parm)}`;
        const result  = await xFetch(url);
        return mockStatus ? unti.builtReturn(mockData.chatroomDetail) : result;
    }
};