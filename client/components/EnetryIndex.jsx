import React ,{ Component,PropTypes} from "react";
import { Icon,Form ,Input,Radio,Button} from "antd";
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import {IntlProvider, FormattedMessage ,defineMessages,addLocaleData,injectIntl} from 'react-intl';
import { connect } from 'react-redux'
import ACTIONS from "../reducers/actions";

const textMesgList = defineMessages({
    copyright:{
        id:'public.copyright',
        defaultMessage:'Simon出品'
    },
    welcomeText:{
        id:'public.welcome.text',
        defaultMessage:'欢迎来到重叠空间聊天室。数据正在加载中，请稍候...'
    },
    plsInput:{id:'public.plsInput',defaultMessage:'请输入'},
    nickName:{id:'public.nickname',defaultMessage:'昵称'},
    styleSign:{id:'public.styleSign',defaultMessage:'个性签名'},
    sexual:{id:'public.sexual',defaultMessage:'性别'}
});;

const FormItem = Form.Item;
const RadioGroup  = Radio.Group;

class EneryIndex extends Component{
    constructor(props){
        super(props);
        this.linkList = [{
            key: '帮助',
            title: '帮助',
            href: '',
          }, {
            key: 'github',
            title: <Icon type="github" />,
            href: 'https://github.com/ant-design/ant-design-pro',
            blankTarget: true,
          }, {
            key: '条款',
            title: '条款',
            href: '',
            blankTarget: true,
          }];
        this.state = {
            welecome:true
        };
    }
    componentWillMount(){
        setTimeout(()=>{
            this.setState({welecome:false});
        }, 5000)
    }
    handleSubmit(e){
        e.preventDefault();
        const {form ,dispatch} = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                dispatch({
                    type:ACTIONS.register.submit,
                    payload:values
                });
            }
        });
    }
    render(){
        const { intl ,form} = this.props;
        const {welecome } = this.state; 
        const { getFieldDecorator } = form;
        const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
        };
        const copyright = <div>Copyright <Icon type="copyright" /> 2017 {intl.formatMessage(textMesgList.copyright)}</div>;
        return(
            <div>
                {
                    welecome
                    ?
                    <div>
                        <p>{intl.formatMessage(textMesgList.welcomeText)}</p>
                    </div>
                    :
                    <div>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem {...formItemLayout} label={intl.formatMessage(textMesgList.nickName)} >
                        {getFieldDecorator('nickName', {
                            rules: [{
                                required: true, message: `${intl.formatMessage(textMesgList.plsInput)}${intl.formatMessage(textMesgList.nickName)}`,
                            }],
                        })(
                            <Input />
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
                                required: true,
                            }],
                        })(<RadioGroup>
                                <Radio value={'Boys'}>Boys</Radio>
                                <Radio value={'Girl'}>Girl</Radio>
                            </RadioGroup>)}
                        </FormItem>
                        <FormItem wrapperCol={{ span: formItemLayout.wrapperCol.span, offset: formItemLayout.labelCol.span }} >
                            <Button type="primary" htmlType="submit">register</Button>
                        </FormItem>
                        </Form>
                    </div>
                }
                <div><GlobalFooter links={this.linkList} copyright={copyright} /></div>
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps)=>{
    console.log(state);
    return{
        ...state
    };
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    console.log(ownProps);
    return{
        dispatch:dispatch
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(injectIntl(EneryIndex)));