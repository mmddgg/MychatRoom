import antdEn from 'antd/lib/locale-provider/en_US'
import appLocaleData from 'react-intl/locale-data/en';
import zhMessages from './zh.json';

export default {
  // 合并所有 messages，加入 antd 组件的 messages
  messages: {...zhMessages},

  antd: antdEn,

  // locale
  locale: 'zh-CN',

  // react-intl locale-data
  data: appLocaleData,

  // 自定义 formates
  formats: {
    date: {
      normal: {
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      },
    },
  },
};