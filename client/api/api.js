import fetch from 'isomorphic-fetch';
import ngprogress from "nprogress";
import xFetch from './fetch';
import {baseUrl,userCenter } from "./ApiUrl.js";
import mockData from "../../mock/mock";

const mockStatus = true;

export default {
    //检测昵称是否已存在
    async checkNickname(parm){
        const url = `${baseUrl}${userCenter.checkNickname}`;      
        const result =  await xFetch(url,{
            method:'POST',
            body:JSON.stringify(parm)
        });
        const md = mockData.checkNickname;
        return mockStatus ?  md: result;
    },
    //注册
    async register(parm){
        const url = `${baseUrl}${userCenter.register}`;      
        const result = await xFetch(url,{
            method:'POST',
            body:JSON.stringify(parm)
        })
        return mockStatus ? mockData.register : result;
    } 
};