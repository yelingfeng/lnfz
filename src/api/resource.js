/**
 * Created by  on 2016/4/1.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'

Vue.use(VueResource);
Vue.http.options.crossOrigin = true;
//Vue.http.options.xhr = {withCredentials: true}

const isProd = process.env.NODE_ENV === 'production'

const mapUrl = API_ROOT + "getMapData";
const engineUrl = API_ROOT +"getEnginePhone";
const stopUrl = API_ROOT + "getStopPhone";
const infoUrl = API_ROOT + "findReturnVoList";
const chinaUrl = API_ROOT + "getChinaData";
const pieUrl = API_ROOT + "getCircleData";
const dataTotalUrl = API_ROOT +"getIspData";
const lineUrl = API_ROOT + "getLineData";



// 中国地图
export const getChinaDataList = (options) => isProd ?Vue.http.post(chinaUrl,options) : Vue.http.get(chinaUrl);

// 辽宁地图
export const getLnDataList = (options) => isProd ? Vue.http.post(mapUrl,options) : Vue.http.get(mapUrl);

// 已检出
export const getEnginePhoneList =(options) =>isProd ? Vue.http.post(engineUrl,options) : Vue.http.get(engineUrl);

// 已停封
export const getStopPhoneList = (options) =>isProd ? Vue.http.post(stopUrl,options) : Vue.http.get(stopUrl);

// 弹出表格接口
export const getInfoList = (options) => isProd ? Vue.http.post(infoUrl , options) : Vue.http.get(infoUrl);

// 饼图接口
export const getCircleData = (options) => isProd ? Vue.http.post(pieUrl , options) : Vue.http.get(pieUrl);

// 总计接口
export const getTotalData =  (options) => isProd ? Vue.http.post(dataTotalUrl , options) : Vue.http.get(dataTotalUrl);

// 线图接口
export const getLineData =  (options) => isProd ? Vue.http.post(lineUrl , options) : Vue.http.get(lineUrl);