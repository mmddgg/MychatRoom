import React ,{ Component,PropTypes} from "react";
import { Icon,Form ,Card,Radio,Avatar,Spin,Layout,Dropdown,Row,Col,Menu,Pagination} from "antd";
import {IntlProvider, FormattedMessage ,defineMessages,addLocaleData,injectIntl} from 'react-intl';
import { connect } from 'react-redux'
import ACTIONS from "../reducers/actions";
import "./global.css";
import "./EnetryIndex.css";
import API from "../api/api";
import Langulage from "./Langulage.jsx";
import PublicFooter from "./PublicFooter.jsx";

const textMesgList = defineMessages({
    logoff:{
        id:'public.logoff',
        defaultMessage:'退出'
    },
    setting:{
        id:'public.setting',defaultMessage:'设置'
    }
});;

const FormItem = Form.Item;
const RadioGroup  = Radio.Group;
const { Header, Footer, Sider, Content } = Layout;
const {userCenter} = ACTIONS;

class HallCompoent extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.dispatch({
            type:ACTIONS.chatRoom.list.query
        });
    }
    menuChange(){

    }
    render(){
        const { intl } = this.props;
        const menu = (
            <Menu 
                onClick={this.menuChange.bind(this)}>
                <Menu.Item key="setting"><Icon type="setting" />{intl.formatMessage(textMesgList.setting)}</Menu.Item>
                <Menu.Item key="poweroff"><Icon type="poweroff" />{intl.formatMessage(textMesgList.logoff)}</Menu.Item>
            </Menu>
        );
        return(
            <Layout>
                <Header>
                <Row>
                    <Col span={8}>
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <Avatar size="large" icon="user"  style={{ backgroundColor: '#87d068' }} />
                        </Dropdown>
                    </Col>
                    <Col span={14} />
                    <Col span={2}><Langulage /></Col>
                </Row>
                </Header>
               
                <Content>
                   <div></div>
                   <div>
                   <Card
                        style={{ width:'20%'}}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Card.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                        />
                    </Card>

                   </div>
                   <div>
                    <Pagination  total={50} showSizeChanger={true} showQuickJumper={true} pageSizeOptions={['10', '15', '20', '25']} />
                   </div>
                </Content>                
                <PublicFooter />
            </Layout>
        );
    }
}

const mapStateToProps = (state,ownProps)=>{
    const {checkNickname,register} = state;
    return{...checkNickname,...register};
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        dispatch:dispatch
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(injectIntl(HallCompoent)));