import React ,{ Component} from "react";
import { Icon,Layout} from "antd";
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import {IntlProvider, FormattedMessage ,defineMessages,injectIntl} from 'react-intl';


const textMesgList = defineMessages({
    copyright:{
        id:'public.copyright',
        defaultMessage:'Simon出品'
    }
});

class PublicFooter extends Component{
    render(){
        const {intl} = this.props;
        const copyright = <div>Copyright <Icon type="copyright" /> 2018 {intl.formatMessage(textMesgList.copyright)}</div>;
        const linkList = [{
            key: 'About me',
            title: '关于我',
            href: '',
          }, {
            key: 'github',
            title: <Icon type="github" />,
            href: 'https://github.com/mmddgg',
            blankTarget: true,
          }, {
            key: '条款',
            title: '条款',
            href: '',
            blankTarget: true,
          }];
        return <Layout.Footer><GlobalFooter links={linkList} copyright={copyright} /></Layout.Footer>
    }
}

export default  injectIntl(PublicFooter);