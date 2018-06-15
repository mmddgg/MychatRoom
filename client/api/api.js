import fetch from 'isomorphic-fetch';
import ngprogress from "nprogress";
import xFetch from './fetch';

const baseUrl = 'http://127.0.0.1:8090/register';

export default {
    async register(parm){
        const url = `${baseUrl}/register`;        
        return await xFetch(url,{
            method:'POST',
            body:JSON.stringify(parm)
        })
    } 
};