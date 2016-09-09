/**
 * Created by yelingfeng on 2016/8/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import API from "../api"
import createLogger from 'vuex/logger'
import moment from "moment"
import 'moment/locale/zh-cn';
Vue.use(Vuex)
const isProd = process.env.NODE_ENV === 'production'
let plugins = isProd ? [] : [createLogger];

const fmt = "YYYY-MM-DD hh:mm:ss";
let now = moment(new Date()).format(fmt)
let last = moment(now).add(-1,"d").format(fmt)


const store = new Vuex.Store({
    plugins: plugins,
    state: {
        mapData:[],
        engineData:[],
        stopData:[],
        startTime : last,
        endTime : now,
        mapW : '0',
        mapH : '0',
        tableSizeTop : {
        },
        tableSizeBottom:{

        }
    },
    actions: {
        // 初始化资源
        INIT_RESOURCE:({commit , dispatch,state}) => {

            let param = {
                startTime : state.startTime,
                endTime : state.endTime,
            }
            API.getMapDataList(param).then((resp)=>{
                commit('INIT_MAP',isProd ? resp.result : resp.data.result)
            })
            API.getEnginePhoneList(param).then((resp)=>{
                commit('INIT_ENGINE',isProd ? resp.result : resp.data.result)
            })
            API.getStopPhoneList(param).then((resp)=>{
                commit('INIT_STOP',isProd ? resp.result : resp.data.result)
            })

        },

        SEARCH_ACTION:({commit,dispatch,state},payload) =>{
            commit('UPDATE_SEARCH_PARAM',payload);
            dispatch('INIT_RESOURCE')
        },

        RESIZE_MAP:({commit,state},{w,h}) =>{
            commit('RESIZE_MAP',{w,h})
        },
        RESIZE_TABLE:({commit,state},{size}) =>{
            commit('RESIZE_TABLE',{size})
        },

    },
    mutations: {
        // 初始化map
        INIT_MAP:(state,mapData ) => {
            state.mapData = mapData
        },
        // 初始化已检出
        INIT_ENGINE:(state, data) =>{
           state.engineData = data;
        },
        // 初始化已停封
        INIT_STOP :(state , data) =>{
            state.stopData = data;
        },

        // 更新searchkey
        UPDATE_SEARCH_PARAM:(state, payload)=>{
            state.startTime = payload.s;
            state.endTime = payload.e;
        },

        RESIZE_MAP:(state , { w, h})=> {
            state.mapH = h ;
            state.mapW = w ;
        },
        RESIZE_TABLE:(state , { size })=> {

            let sizeT = Object.assign({},size) ;
            let sizeB = Object.assign({},size) ;
            sizeT.top = "10%";
            sizeT.right = "20px";

            sizeB.bottom = "20%";
            sizeB.right = "20px";

            state.tableSizeTop = sizeT ;
            state.tableSizeBottom = sizeB;
        },
    },
    getters: {
        getMapData(state){
            return state.mapData;
        },
        getMapSize(state){
            return {
                width : state.mapW,
                height : state.mapH
            }
        },
        getStartTime(state){
            return state.startTime
        },
        getEndTime(state){
            return state.endTime
        },
        getTableData1(state){
            return state.engineData
        },
        getTableData2(state){
            return state.stopData
        },
        getTableSizeTop(state){
            return state.tableSizeTop
        },
        getTableSizeBottom(state){
            return state.tableSizeBottom
        }
    }
})

export default store