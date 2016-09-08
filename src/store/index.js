/**
 * Created by yelingfeng on 2016/8/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Api from "../api/resource"
import createLogger from 'vuex/logger'

Vue.use(Vuex)

let plugins = process.env.NODE_ENV == 'development' ? [createLogger] : [];

const store = new Vuex.Store({
    plugins: plugins,
    state: {
        chartData:{
           map : []
        },
        mapW : '0',
        mapH : '0',
        tableSizeTop : {
        },
        tableSizeBottom:{

        }
    },
    actions: {
        INIT_CHART_LIST:({commit , dispatch,state}) => {
            commit("INIT_CHART_LIST")
        },
        RESIZE_MAP:({commit,state},{w,h}) =>{
            commit('RESIZE_MAP',{w,h})
        },
        RESIZE_TABLE:({commit,state},{size}) =>{
            commit('RESIZE_TABLE',{size})
        },

        GET_LIST:({commit , dispatch, state}) =>{
            Api.getEvilDetailList().then((resp)=>{
                console.dir(resp.result)
            })
        }
    },
    mutations: {
        INIT_CHART_LIST:(state ) => {
            state.chartData.map = Api.mapData;
            state.tableData1 = Api.tableData1;
            state.tableData2 = Api.tableData2;
        },
        RESIZE_MAP:(state , { w, h})=> {
            state.mapH = h ;
            state.mapW = w ;
        },
        RESIZE_TABLE:(state , { size })=> {

            let sizeT = Object.assign({},size) ;
            let sizeB = Object.assign({},size) ;
            sizeT.top = "20px";
            sizeT.right = "20px";

            sizeB.bottom = "20px";
            sizeB.right = "20px";

            state.tableSizeTop = sizeT ;
            state.tableSizeBottom = sizeB;
        },
    },
    getters: {
        getMapData(state){
            return state.chartData.map;
        },
        getMapSize(state){
            return {
                width : state.mapW,
                height : state.mapH
            }
        },
        getTableData1(state){
            return state.tableData1
        },
        getTableData2(state){
            return state.tableData2
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