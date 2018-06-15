import {Router, Route, Redirect, IndexRoute, Link, IndexRedirect,routerRedux} from "dva/router";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import path from "./path.js";
import EnetryIndex from "../components/EnetryIndex.jsx";

// common page
//import ForbiddenView from "../components/403/ForbiddenView";
//import NotFoundView from "../components/404/NotFoundView";




export default ({history}) => {
    return (
        <Router>
            <Route path="/" component={EnetryIndex}>
                <Route path={path.hallPaht} component={EnetryIndex}/>
            </Route>
            {/* <Route path={siteRecovery.rootPath} component={SiteRecoveryEntry} {...matchHooks}>
                <IndexRedirect to={siteRecovery.localSiteRecoveryPath}/>
                <Route path={siteRecovery.localSiteRecoveryPath}>
                    <IndexRedirect to={siteRecovery.dashboard}/>
                    <Route path={utilities.uiPath.overview} component={Overview}/>
                    <Route path={siteRecovery.planTemplatePath}>
                    <IndexRedirect to={siteRecovery.planTemplate.rootPath}/>
                        <Route path={siteRecovery.planTemplate.list} component={PlanTemplateList}/>
                        <Route path={siteRecovery.planTemplate.detail} component={PlanTemplateDetail}/>
                        <Route path={siteRecovery.planTemplate.detailWithId} component={PlanTemplateDetail}/>
                    </Route>

                    <Route path={siteRecovery.planInstancePath}>
                        <IndexRedirect to={siteRecovery.planInstance.rootPath}/>
                        <Route path={siteRecovery.planInstance.list} component={PlanInstanceList}/>
                        <Route path={siteRecovery.planInstance.createWithId} component={CreateNewPlanInstance}/>
                        <Route path={siteRecovery.planInstance.create} component={CreateNewPlanInstance}/>
                        <Route path={siteRecovery.planInstance.detailWithId} component={PlanInstanceDetail}/>
                    </Route>

                    <Route path={siteRecovery.dashboard} component={LocalDashboard}/>

                    <Route path={setting.rootPath}>
                        <IndexRedirect to={setting.rootPath}/>
                        <Route path={setting.businessTagPath} component={BusinessTag}/>
                    </Route>
                </Route>
            </Route> */}
            {/* <Route path="/403" component={ForbiddenView} {...matchHooks} />
            <Route path="/404" component={NotFoundView} {...matchHooks} />
            <Route path="*" component={NotFoundView} {...matchHooks} /> */}
        </Router>
    );
}