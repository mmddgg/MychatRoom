import "babel-polyfill";
import React ,{ Component,PropTypes} from "react";
import { Icon,Form ,Input,Radio,Button,Spin,Layout,Dropdown,Row,Col,Menu} from "antd";
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import {IntlProvider, FormattedMessage ,defineMessages,addLocaleData,injectIntl} from 'react-intl';
import { connect } from 'react-redux'
import ACTIONS from "../reducers/actions";


class Langulage extends Component{
    menuChange({item,key,selectedKeys}){
        this.props.dispatch({
            type:ACTIONS.common.setLanguage,
            payload:key
        });
    }
    render(){
        const {language_key} = this.props;
        const menu = (
            <Menu 
            defaultOpenKeys={language_key}
            onClick={this.menuChange.bind(this)}>
                <Menu.Item key="en-US"><a>English</a></Menu.Item>
                <Menu.Item key="zh-CN"><a>简体中文</a></Menu.Item>
            </Menu>
        );
        return (
            <span>
                <Dropdown overlay={menu} placement="bottomRight">
                    <Icon type="global" style={{color:'#fff'}} />
                </Dropdown>
            </span>
        );
    }
}

export default connect(({common})=>common)(Langulage);