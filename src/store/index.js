/**
 * Created by yelingfeng on 2016/8/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import API from "../api"
import createLogger from 'vuex/logger'
import moment from "moment"
import _ from "lodash"
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
        layerData:{},
        startTime : last,
        endTime : now,
        mapW : '0',
        mapH : '0',
        tableSizeTop : {},
        tableSizeBottom:{}
    },
    actions: {
        INIT_RESOURCE:({commit , dispatch,state}) => {
            let param = {
                startTime : state.startTime,
                endTime : state.endTime,
            }
            API.getMapDataList(param).then((resp)=>{
                commit('INIT_MAP',resp.data.result)
            })
            API.getEnginePhoneList(param).then((resp)=>{
                commit('INIT_ENGINE',resp.data.result)
            })
            API.getStopPhoneList(param).then((resp)=>{
                commit('INIT_STOP',resp.data.result)
            })
        },

        // 插入弹层data
        INSERT_INFO_DATA:({commit,state},args) =>{
            let param = {
                cityName: args.cityName,
                type : args.type,
                startTime : state.startTime,
                endTime :state.endTime,
                page :args.pageNumber,
                rows :args.pageSize
            }
            API.getInfoList(param).then((resp) => {
                commit('UPDATE_INFO_DATA',isProd ? resp.data : resp.data.result)
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
        }
    },
    mutations: {
        INIT_MAP:(state,mapData ) => {
            state.mapData = mapData
        },
        INIT_ENGINE:(state, data) =>{
           state.engineData = data;
        },
        INIT_STOP :(state , data) =>{
            state.stopData = data;
        },

        UPDATE_SEARCH_PARAM:(state, payload)=>{
            state.startTime = payload.s;
            state.endTime = payload.e;
        },

        UPDATE_INFO_DATA:(state,data) =>{
            state.layerData = data
        },

        RESIZE_MAP:(state , { w, h})=> {
            state.mapH = h ;
            state.mapW = w ;
        },
        RESIZE_TABLE:(state , { size })=> {
            let sizeT = Object.assign({},size) ;
            let sizeB = Object.assign({},size) ;
            sizeT.bottom = "50%";
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
        getEngineData(state){
            return state.engineData
        },
        getStopData(state){
            return state.stopData
        },
        getTableSizeTop(state){
            return state.tableSizeTop
        },
        getTableSizeBottom(state){
            return state.tableSizeBottom
        },
        getLayerData(state){
            return state.layerData
        }
    }
})

export default store