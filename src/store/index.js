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
const plugins = isProd ? [] : [createLogger];

const fmt = "YYYY-MM-DD HH:mm";
const now = moment(new Date()).format(fmt)
const last = moment(now).add(-1,"d").format(fmt)

const store = new Vuex.Store({
    plugins: plugins,
    state: {
        liaoningData:[],
        chinaData:[],
        engineData:[],
        stopData:[],
        pieData:[],
        lineData:[],
        layerData:{},
        dtData:{},
        startTime : last,
        endTime : now,
        mapW : '0',
        mapH : '0',
        tableSize : {},
        pieStyle:{},
        lineStyle:{},
        dtStyle:{},
    },
    actions: {
        INIT_RESOURCE:({commit , dispatch,state}) => {
            let param = {
                startTime : state.startTime,
                endTime : state.endTime,
            }
            API.getLnDataList(param).then((resp)=>{
                commit('INIT_LN_MAP',resp.data.result)
            })

            API.getChinaDataList(param).then((resp)=>{
                commit('INIT_CHINA_MAP',resp.data.result)
            })
            API.getEnginePhoneList(param).then((resp)=>{
                commit('INIT_ENGINE',resp.data.result)
            })
            API.getStopPhoneList(param).then((resp)=>{
                commit('INIT_STOP',resp.data.result)
            })

            //API.getCircleData(param).then((resp)=>{
            //    commit('INIT_PIE',resp.data.result)
            //})

            API.getTotalData(param).then((resp)=>{
                commit('INIT_DT',resp.data.result)
            })

            API.getLineData(param).then((resp)=>{
                commit('INIT_LINE',resp.data.result)
            })
        },

        // 加载DT
        LOAD_DT:({commit,state},args)=>{
            API.getTotalData().then((resp)=>{
                commit('INIT_DT',resp.data.result)
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
        },

        RESIZE_PIE:({commit,state},{size}) =>{
            commit('RESIZE_PIE',{size})
        },

        RESIZE_DT:({commit,state},{size}) =>{
            commit('RESIZE_DT',{size})
        },

        RESIZE_LINE:({commit,state},{size}) =>{
            commit('RESIZE_LINE',{size})
        }
    },
    mutations: {
        INIT_LN_MAP:(state,liaoningData ) => {
            state.liaoningData = liaoningData
        },

        INIT_CHINA_MAP:(state , d) =>{
            state.chinaData = d ;
        },

        INIT_PIE:(state , d) =>{
            state.pieData = d ;
        },

        INIT_LINE:(state,d)=>{
            state.lineData = d;
        },

        INIT_ENGINE:(state, data) =>{
           state.engineData = data;
        },
        INIT_STOP :(state , data) =>{
            state.stopData = data;
        },

        INIT_DT:(state , data)=>{
            state.dtData = data
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
            state.tableSize = size ;
        },

        RESIZE_PIE:(state , { size })=> {
            state.pieStyle = size ;
        },

        RESIZE_DT:(state , { size })=> {
            state.dtStyle = size ;
        },

        RESIZE_LINE:(state , {size})=>{
            state.lineStyle = size
        }
    },
    getters: {

        getLineData(state){
            return state.lineData
        },
        getliaoningData(state){
            return state.liaoningData;
        },
        getMapSize(state){
            return {
                width : state.mapW,
                height : state.mapH
            }
        },
        getTotalData(state){
            return state.dtData
        },
        getPieData(state){
            return state.pieData
        },
        getChinaData(state){
            return state.chinaData
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
        getTableSize(state){
            return state.tableSize
        },
        getLayerData(state){
            return state.layerData
        },
        getPieStyle(state){
            return state.pieStyle
        },
        getDtStyle(state){
            return state.dtStyle
        },
        getLineStyle(state){
            return state.lineStyle
        }
    }
})

export default store