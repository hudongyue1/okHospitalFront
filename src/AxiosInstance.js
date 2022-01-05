import axios from 'axios';
import { notification } from 'antd';

axios.defaults.withCredentials = true;
const instance = axios.create({
  xsrfCookieName: 'xsrf-name',
  baseURL: "http://h41x058747.wicp.vip/",
  withCredentials: true,
  xhrFields: {
    withCredentials: true
  },
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  crossDomain: true,
});
export default instance;