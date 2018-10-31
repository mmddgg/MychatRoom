//基础依赖
import "babel-polyfill";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//redux相关依赖
import { combineReducers, createStore,applyMiddleware} from 'redux'
import {Provider,connect } from "react-redux" ;
import logger from 'redux-logger';
import createSagaMiddleware ,{ takeLatest, takeEvery } from 'redux-saga';
import { call, put, fork, select } from 'redux-saga/effects';
import { reducer as modal } from 'redux-modal';
import { handleActions } from 'redux-actions';

//dva相关
//import dva from 'dva';
//import createLoading from "dva-loading";

//url ,路由相关
import { createHistory, createHashHistory, useBasename } from 'history';
//import { hashHistory, useRouterHistory ,Router, Route, Link  } from 'react-router'; //redux-router
import { HashRouter, Route, hashHistory, Switch,BrowserRouter } from 'react-router-dom'
import route from "./route/route";//路由文件

//国际化相关
import { LocaleProvider } from 'antd';
import {IntlProvider, FormattedMessage ,defineMessages,addLocaleData} from 'react-intl';

//外部文件引入相关
import EnetryIndex from "./components/EnetryIndex.jsx"; //首页UI
import HallCompoent from "./components/Hall.jsx";
import rootReducer from "./reducers/index"; //模型集合

import path from "./route/path.js"; //当前产品模块路径管理

//and 和 antdPro 样式文件
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';

//saga
import rootSagas from "./sagas/watchSagas";

//语言包 (react-intl 国际化)
// https://www.cnblogs.com/yangstar90/p/7978232.html
//https://segmentfault.com/a/1190000008217058

import enUS from "./language/en-US"
import zhCN from "./language/zh-CN"



const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware,logger];
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSagas);



const ROOTNODEID = 'chatRoom';
const initialState = {};


const getCurrentAppLocale = () => {
    const {common:{language_key}} = store.getState();
    switch (language_key) {
        case 'zh-CN':
        return zhCN
        default:
        return enUS
    }
}
window.appLocale = getCurrentAppLocale();
  

  

ReactDOM.render(
    <IntlProvider 
    locale={window.appLocale.locale}
    messages={window.appLocale.messages}
    formats={window.appLocale.formats}
    >   
        <LocaleProvider  locale={window.appLocale.antd}>
        <Provider store={store}>
            <BrowserRouter>
                <div>
                <Route path="/" component={EnetryIndex} />
                <Route path={"/hall"} component={HallCompoent} />
                </div>
            </BrowserRouter>
        </Provider>
        </LocaleProvider>
    </IntlProvider>
    ,
    document.getElementById(ROOTNODEID)
);



/*

npm run built ,打包

npm run start ,启动本地服务 webpackServer
http://localhost:5060/#/  访问本地页面

npm run server 启动Node 服务
http://localhost:8090/

npm run nodeDebug  启动node断点调试
http://127.0.0.1:8080/?port=5858

启动 MongoDB :
mongod --dbpath /Users/Simon/Documents/MychatRoom/data
mongo
    http://127.0.0.1:27017/
*/    


// 1. rootSga  的合并问题 !!!
// 2. router 的Ptah 匹配问题
// 3. takeLeading 的应用场景

// 重构
// 1. roghinc框架的使用
// 2. proxy代理的使用