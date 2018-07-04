//import {Router, Route , Redirect, IndexRoute, Link, IndexRedirect,routerRedux} from "dva/router";
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom';
import React ,{ Component} from "react";
import path from "./path.js";
import EnetryIndex from "../components/EnetryIndex.jsx";
import HallCompoent from "../components/Hall.jsx";
// common page
//import ForbiddenView from "../components/403/ForbiddenView";
//import NotFoundView from "../components/404/NotFoundView";




export default ({history}) => {
    return (
        <HashRouter history={hashHistory}>
            <Switch>
                <Route path="/" component={EnetryIndex}>
                    <Route path={path.hallPaht} component={HallCompoent} />
                </Route>
            </Switch>
            {/* <Route path="/403" component={ForbiddenView} {...matchHooks} />
            <Route path="/404" component={NotFoundView} {...matchHooks} />
            <Route path="*" component={NotFoundView} {...matchHooks} /> */}
        </HashRouter>
    );
}