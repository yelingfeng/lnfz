/**
 * Created by  on 2016/4/1.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'

Vue.use(VueResource);
// HTTP相关
Vue.http.options.crossOrigin = true;
//Vue.http.options.xhr = {withCredentials: true}


Vue.http.interceptors.push({
    request (request) {
        return request
    },
    response (response) {
        if(response.status === 500){
            console.log("服务器加载失败")
        }
        return response
    }
});

const isProd = process.env.NODE_ENV === 'production'

let mapUrl = API_ROOT + "getMapData";
let engineUrl = API_ROOT +"getEnginePhone";
let stopUrl = API_ROOT + "getStopPhone";

// 地图
export const getMapDataList = (options) => isProd ? Vue.http.post(mapUrl,options) : Vue.http.get(mapUrl);
// 已检出
export const getEnginePhoneList =(options) =>isProd ? Vue.http.post(engineUrl,options) : Vue.http.get(engineUrl);
// 已停封
export const getStopPhoneList = (options) =>isProd ? Vue.http.post(stopUrl,options) : Vue.http.get(stopUrl);