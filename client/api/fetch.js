import fetch from 'isomorphic-fetch';
import React from "react";
import {defineMessages, injectIntl, FormattedMessage} from 'react-intl';

import {Modal} from 'antd';

import ngprogress from "nprogress";
import "nprogress/nprogress.css";



const textMesgList = defineMessages({
    unknownErrorMsg: {
        id: 'public.unknownErrorMsg',
        defaultMessage: '发生未知错误。',
    },
    unknownErrorResolution: {
        id: 'public.unknownErrResolution',
        defaultMessage: '请稍候重试或联系技术支持人员。',
    },
});

const errObject = {
    'errCode': '-1',
    'errMsg': '发生未知错误。',
    'errResolution':'请稍候重试或联系技术支持人员。',
};


const check404 = (res) => {
    if (res.status === 404) {
        location.hash = '#/404';
        // browserHistory.push(utilities.notFoundPath);
    }
    return res;
};

const check401 = (res) => {
    if (res.status === 401) {
        window.sessionStorage.clear();
        location.href = '#/401';
    }
    return res;
};

const check403 = (res, opts) => {
    if (res.status === 403 && !opts.ignore403) {
        location.hash = '#/403';
        // browserHistory.push('/403');
    }
    return res;
};

const check200 = (res, conf) => {
    // 如果定义了 successMsgId 则显示对应的国际化文案
    if (res.status === 200 && conf.successMsgId) {
        message.success(conf.successMsgId);
    }
    return res;
};







const handleJSON = (resJson, config) => {
    ngprogress.done();
    // 说明传来的不是JSON对象，是原始的RESPONSE对象，则直接返回
    if (resJson && typeof resJson.json === 'function') {
        return resJson;
    }
    const res = {...resJson, jsonResult: resJson};
    return res;
};

const handleError = (error) => {
    if (error.reasons) {
        throw error;
    } else if (error.errCode == null) {
        throw errObject; // 保存未知异常错误
    } else if (error.errCode < 0) {
        throw errObject; // 保存未知异常错误
    } else {
        throw error;
    }
};

const xFetch = (url, options = {}, config = {}) => {
    if (options && options.method && options.method !== 'GET' && options.method !== 'POST') {
        ngprogress.start();
    }
    const conf = {
        failMsgId: 'public.unknownErrorMsg', // 未定义 failMsgId 的时候显示 【未知错误】
        ...config
    };
    const opts = {...options, credentials: 'same-origin', mode: 'cors'};
    opts.headers = {
        Accept: 'application/json',
        //'Content-Type': 'application/json; charset=utf-8',
        //'Authorization': cookie.get('authorization'),
    };

    return fetch(url, opts)
        .then((res)=>{
            console.log(res);
            return res.json();
        })
        .then(check404)
        .then(check401)
        .then(res => check403(res, opts))
        .then(res => check200(res, conf)) // 如果是200就认为成功
        .then(res => handleJSON(res, conf))
        .catch((err) => {
            ngprogress.done();
            return err;
        });
};

export {errObject};
export default xFetch;
