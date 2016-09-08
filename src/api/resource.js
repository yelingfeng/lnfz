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


const mapData = [
    {name: "沈阳市", value:"100" ,category:"辽宁","subArray":[{"type":"1","num":"234","id":"1" },{"type":"2","num":"64","id":"2"}]},
    {name: "大连市", value:"20" ,category:"辽宁",info:"5555"},
    {name: "铁岭市", value:"30" ,category:"辽宁",info:"gfdgdfgdfg"},
    {name: "鞍山市", value:"50" ,category:"辽宁",info:"dfgdfg"},
    {name: "锦州市", value:"70" ,category:"辽宁",info:"gfhgfhfghgf"},
    {name: "葫芦岛市", value:"40" ,category:"辽宁","subArray":[{"type":"1","num":"44","id":"1" },{"type":"2","num":"33","id":"2"}]},
    {name: "阜新市", value:"10" ,category:"辽宁",info:"sssss"},
]


const tableData1 = [
    { "number":"13844442222","time":"2016-08-09" },
    { "number":"13844442223","time":"2016-08-09" },
    { "number":"13844442224","time":"2016-08-09" },
    { "number":"13844442225","time":"2016-08-09" },
    { "number":"13844442226","time":"2016-08-09" },
    { "number":"13844442226","time":"2016-08-09" },
    { "number":"13844442226","time":"2016-08-09" },
    { "number":"13844442226","time":"2016-08-09" },
    { "number":"13844442226","time":"2016-08-09" },
    { "number":"13844442226","time":"2016-08-09" },
    { "number":"13844442227","time":"2016-08-09" }
]

const tableData2 = [
    { "number":"13944442222","time":"2016-09-09" },
    { "number":"13944442223","time":"2016-09-09" },
    { "number":"13944442224","time":"2016-09-09" },
    { "number":"13944442225","time":"2016-09-09" },
    { "number":"13944442226","time":"2016-09-09" },
    { "number":"13944442227","time":"2016-09-09" }
]

const tu = process.env.NODE_ENV === 'production' ? "evilDetail/findEvilDetailList?evilType=1" : "src/api/test.json";
const getEvilDetailList = (options) => Vue.http.get(API_ROOT + tu,options);

export default {
    getEvilDetailList,
    mapData,
    tableData1,
    tableData2
}