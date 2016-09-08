/**
 * Created by yelingfeng on 2016/9/8.
 */
export const API_ROOT = (process.env.NODE_ENV === 'production')
    ?'http://172.25.3.6:8080/ln-cdr-web/'
    :'http://localhost:8100/';
