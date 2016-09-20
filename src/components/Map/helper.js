/**
 * Created by yelingfeng on 2016/8/29.
 */
import * as config from "./config"
import * as commonConfig from "./../commonConfig"
import {axisMaxmin} from "../util/axisHelper"

/**
 * 获取itemStyle配置
 */
export function getMapItemOption() {
    const itemStyle = {
        normal: {
            borderColor: config.mapBorderColor,
            borderWidth: config.mapBorderWidth,
            areaColor: config.mapAreaColor,
            //shadowColor: config.mapShadowColor,
            //shadowBlur: config.mapShadowBlue
        },
        emphasis: {
            label: {
                show: false
            },
            areaColor: config.mapEmphasisColor
        }
    }
    return itemStyle;
}

export function getMapTipBox(content){
    let tmpl = `<div class="mapTipBox">
                  ${content}
                 <div class="sides-horn">
                  <span class="north-west"></span>
                  <span class="north-east"></span>
                  <span class="south-west"></span>
                  <span class="south-east"></span>
                  </div>
              </div>
            `
    return tmpl
}


function buildTooltipTmpl(subArray, city){

    let type1 = `诈骗电话数量：`;
    let type2 = `诈骗短信数量：`;

    if(subArray.length){
        subArray.forEach((it) => {
            if(it.type == "1"){
                type1 += `<span class="biz" width="60%" data-rel="${it.type}" data-city="${city}">${it.num}</span>` ;
            }else if(it.type == "2"){
                type2 += `<span class="biz" width="60%" data-rel="${it.type}" data-city="${city}">${it.num}</span>` ;
            }
        })
    }else{
        type1 += `<span>0</span>` ;
        type2 += `<span>0</span>` ;
    }

    let tmpl =`<h2>[${city}]</h2>
                  <div class="content">
                   <p>${type1}</p>
                   <p>${type2}</p>
                  </div>`
    getMapTipBox(tmpl)
    return  getMapTipBox(tmpl);
}



export function getMapTooltip(){
    return {
        textStyle:{
            fontSize : 12,
            align : "left"
        },
        backgroundColor:"transparent",
        position:"inside",
        hideDelay:100,
        enterable:true,
        formatter: function (params) {
            let content = "";
            var city =  params.name;
            if(params.data == undefined)return "无数据";
            var subArray  = params.data.subArray || [];
            if(subArray.length){
                var tmp = buildTooltipTmpl(subArray,city);
                return tmp;
            }else{

                return "";

                if(content == undefined || content == ""){
                    content = params.name ;
                }
                return content
            }

        }
    }
}

/**
 * 获取label的配置
 */
export function getMapLabelOption() {
    const labelStyle = {
        normal: {
            show: false,
            textStyle: {
                fontSize: 12,
                color : "#fff"
            },

        }
    }
    return labelStyle;
}

/**
 * 获得VisualMap
 */
export function getMapVisualMap(data) {
    let maxMin = axisMaxmin(data, 1, {});
    const visualConfig = {
        type: 'continuous',
        color: commonConfig.mapRangeColorList,
        min: maxMin.min,//0,
        max: maxMin.max,//1000,
        text: ['高', '低'],
        realtime: false,
        left : "5%",
        bottom:'10%',
        precision: 0,
        calculable: false,
        textStyle: {
            color: config.visualRangeColor
        }
    }
    return visualConfig
}

export function getLNPointData(){
    let data = [
        {name:'鞍山市'},
        {name:'丹东市'},
        {name:'本溪市'},
        {name:'抚顺市'},
        {name:'大连市'},
        {name:'锦州市'},
        {name:'营口市'},
        {name:'盘锦市'},
        {name:'阜新市'},
        {name:'辽阳市'},
        {name:'沈阳市'},
        {name:'葫芦岛市'},
        {name:'朝阳市'},
        {name:'铁岭市'},
    ]
    return getMarkPointData(data);
}



export function  getMarkPointData(data){
    const lnCoor = {
        "鞍山市" : [122.995632, 41.110626],
        "丹东市" : [124.383044, 40.124296],
        "本溪市" : [123.770519, 41.297909],
        "抚顺市" : [123.921109, 41.875956],
        "大连市" : [121.618622, 38.91459],
        "锦州市" : [121.135742, 41.119269],
        "营口市" : [122.235151, 40.667432],
        "盘锦市" : [122.06957, 41.124484],
        "阜新市" : [121.648962, 42.011796],
        "辽阳市" : [123.18152, 41.269402],
        "沈阳市" : [123.429096, 41.796767],
        "葫芦岛市" : [120.856394, 40.755572],
        "朝阳市" : [120.451176, 41.576758],
        "铁岭市" : [123.844279, 42.290585]
    }

    //const lnCoor = {
    //    "鞍山市":[122.994329,41.108647],
    //    "丹东市":[124.1780367,40.463894],
    //    "本溪市":[123.685142,41.486981],
    //    "抚顺市":[123.957208,41.880872],
    //    "大连市":[122.101620,39.521223],
    //    "锦州市":[121.126846,41.095685],
    //    "营口市":[122.23541,40.667012],
    //    "盘锦市":[122.070713,41.119997],
    //    "阜新市":[121.670323,42.021619],
    //    "辽阳市":[123.236944,41.267244],
    //    "沈阳市":[123.431472,41.805699],
    //    "葫芦岛市":[120.83694,40.711041],
    //    "朝阳市":[120.449388,41.57365],
    //    "铁岭市":[123.726035,42.223828]
    //}


    let areaData = [];
    data.forEach(function(d){
        areaData.push({
            name : d.name,
            coord : lnCoor[d.name]
        })
    })
    let markPoint = {
        symbol: 'circle',
        symbolSize:5,
        itemStyle:{
            normal:{
                color : "red"
            }
        },
        label:{
            normal:{
                show:false,
                //position: 'insideBottomRight',
                formatter:function(d){return d.name}
            }
        },
        data :areaData
    }
    return markPoint;
}