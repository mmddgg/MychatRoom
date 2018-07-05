import React ,{ Component,PropTypes} from "react";
import { Icon,Form ,Card,Radio,Avatar,Spin,Layout,Dropdown,Row,Col,Menu,Pagination,Alert} from "antd";
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
    menuChange(a,b,c){
        console.log(a,b,c);
    }
    render(){
        const { intl,queryListLoading,chatRoomListData={},chatRoomListErr } = this.props;
        const {
            code,mesg,currenPage,pageSize,total,result=[]
        } = chatRoomListData;
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
                <Spin spinning={queryListLoading}>
                {
                   chatRoomListErr || code !== 200 
                   ?
                   <Content>
                       <Alert message="Error" description={chatRoomListErr || mesg} type="error" showIcon={true} />
                   </Content>:
               
                    <Content>
                    <div></div>
                    <div>
                        {
                            result.map((item,index)=>{
                                return (
                                    <Card style={{ width:'18%',margin:'0 0.95% 15px 0.95%' ,display:'inline-block',verticalAlign:'Top',cursor:'pointer'}}
                                    cover={<img alt={item.name}  src={item.iconImg} />}
                                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                    >
                                        <Card.Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={item.name} 
                                        description={item.description}
                                        />
                                    </Card>
                                );
                            })
                        }
                    </div>
                    <div style={{textAlign:'right',paddingRight:'0.95%'}}>
                        <Pagination  total={50} showSizeChanger={true} showQuickJumper={true} pageSizeOptions={['10', '15', '20', '25']} />
                    </div>
                    </Content>
                }
                </Spin>    
                <PublicFooter />
            </Layout>
        );
    }
}

const mapStateToProps = (state,ownProps)=>{
    const {chatRoomlist} = state;
    console.log(state);
    return{...chatRoomlist};
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        dispatch:dispatch
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(injectIntl(HallCompoent)));