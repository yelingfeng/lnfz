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

const isProd = process.env.NODE_ENV === 'production'

let mapUrl = API_ROOT + "getMapData";
let engineUrl = API_ROOT +"getEnginePhone";
let stopUrl = API_ROOT + "getStopPhone";
let infoUrl = API_ROOT + "findReturnVoList";

// 地图
export const getMapDataList = (options) => isProd ? Vue.http.post(mapUrl,options) : Vue.http.get(mapUrl);
// 已检出
export const getEnginePhoneList =(options) =>isProd ? Vue.http.post(engineUrl,options) : Vue.http.get(engineUrl);
// 已停封
export const getStopPhoneList = (options) =>isProd ? Vue.http.post(stopUrl,options) : Vue.http.get(stopUrl);
// 弹出表格接口
export const getInfoList = (options) => isProd ? Vue.http.post(infoUrl , options) : Vue.http.get(infoUrl);