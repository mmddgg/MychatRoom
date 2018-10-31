import React ,{ Component,PropTypes} from "react";
import { Icon,Form ,Input,Radio,Button,Spin,Layout,Dropdown,Row,Col,Menu} from "antd";
import {IntlProvider, FormattedMessage ,defineMessages,addLocaleData,injectIntl} from 'react-intl';
import { connect } from 'react-redux'
import ACTIONS from "../reducers/actions";
import "./global.css";
import "./EnetryIndex.css";
import API from "../api/api";
import Langulage from "./Langulage.jsx";
import PublicFooter from "./PublicFooter.jsx";

const textMesgList = defineMessages({
    welcomeText:{
        id:'public.welcome.text',
        defaultMessage:'欢迎来到重叠空间聊天室。数据正在加载中，请稍候...'
    },
    productTip:{
        id:'public.productTip',
        defaultMessage:'欢迎来到重叠空间聊天室。'
    },
    isRepeat:{id:'register.tip.nicknameRepeat',defaultMessage:'该昵称已存在，请换一个'},
    plsInput:{id:'public.plsInput',defaultMessage:'请输入'},
    plsSelect:{id:'public.plsSelect',defaultMessage:'请选择'},
    nickName:{id:'public.nickname',defaultMessage:'昵称'},
    styleSign:{id:'public.styleSign',defaultMessage:'个性签名'},
    sexual:{id:'public.sexual',defaultMessage:'性别'},
    register:{id:'public.resigter',defaultMessage:'注册'}
});;

const FormItem = Form.Item;
const RadioGroup  = Radio.Group;
const { Header, Footer, Sider, Content } = Layout;
const {userCenter} = ACTIONS;

class EneryIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            welecome:true
        };
    }
    componentWillMount(){
    }
    handleSubmit(e){
        e.preventDefault();
        const {form ,dispatch} = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                dispatch({
                    type:userCenter.register.submit,
                    payload:values
                });
            }
        });
    }
    exsitname(name){
        if(!name){return false;}
        const { dispatch} = this.props;
        dispatch({
            type:userCenter.checkNickname.submit,
            payload:name
        });
    }
    componentWillReceiveProps(nextProps,props){
        if(nextProps.userId){
            nextProps.history.push('/hall')
        }
    }
    render(){
        const { intl ,form ,isRepeat,loadingCheckNickname} = this.props;
        const {welecome ,collapsed} = this.state; 
        const { getFieldDecorator } = form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return(
            <Layout>
                <Header>
                <Row>
                <Col span={8} style={{color:'#fff'}}>{intl.formatMessage(textMesgList.productTip)}</Col>
                <Col span={14} />
                <Col span={2}><Langulage /></Col>
                </Row>
                </Header>
            <Layout>
            <Content>
                <Form onSubmit={this.handleSubmit.bind(this)} className="registerForm">
                <FormItem 
                    {...formItemLayout} 
                    label={intl.formatMessage(textMesgList.nickName)}
                >
                {getFieldDecorator('nickName', {
                    rules: [
                        {pattern:/^[A-Za-z0-9-_]{8,15}$/g,message:'昵称由8-15位的数字，字母,-,_组成'},
                        {   required: true,
                            message: `${intl.formatMessage(textMesgList.plsInput)}${intl.formatMessage(textMesgList.nickName)}`
                        },
                        {validator:(rule,value,callback)=>{
                                if(value == undefined  || value == '' || !/^[A-Za-z0-9-_]{8,15}$/g.test(value)){
                                    callback();
                                    return false;
                                }
                                API.checkNickname({name:value}).then(res=>{
                                    if(res.isRepeat){
                                        callback(intl.formatMessage(textMesgList.isRepeat));
                                    }else{
                                        callback(); 
                                    }
                                })
                            }
                        }
                    ]
                })(
                    <Input 
                    //onBlur={e=>this.exsitname(e.target.value)} 
                    />
                )}
                </FormItem>
                <FormItem {...formItemLayout} label={intl.formatMessage(textMesgList.styleSign)} >
                {getFieldDecorator('styleSign', {
                    rules: [{
                        required: true, message: `${intl.formatMessage(textMesgList.plsInput)}${intl.formatMessage(textMesgList.styleSign)}`,
                    }],
                })(
                    <Input />
                )}
                </FormItem>

                <FormItem {...formItemLayout} label={intl.formatMessage(textMesgList.sexual)} >
                {getFieldDecorator('sexual', {
                    rules: [{
                        required: true,message: `${intl.formatMessage(textMesgList.plsSelect)}${intl.formatMessage(textMesgList.sexual)}`
                    }],
                })(<RadioGroup>
                        <Radio value={'Boys'}>Boys</Radio>
                        <Radio value={'Girl'}>Girl</Radio>
                    </RadioGroup>)}
                </FormItem>
                <FormItem wrapperCol={{ span: formItemLayout.wrapperCol.span, offset: formItemLayout.labelCol.span }} >
                    <Button type="primary" htmlType="submit">{intl.formatMessage(textMesgList.register)}</Button>
                </FormItem>
                </Form>
            </Content>
            {/* 
            <Sider collapsible={true} collapsed={collapsed} theme={'dark'} onCollapse={(collapsed, type)=>{this.setState({collapsed})}}>
                        "content of righ"
            </Sider> 
            */}
            </Layout>
            
            <Footer>
                <PublicFooter />
            </Footer>
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

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(injectIntl(EneryIndex)));