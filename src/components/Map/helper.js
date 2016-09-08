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



function buildTooltipTmpl(subArray, city){

    let type1 = `<td width="40%" >诈骗电话数量:</td>`;
    let type2 = `<td width="40%" >诈骗短信数量:</td>`;

    if(subArray.length){
        subArray.forEach((it) => {
            if(it.type == "1"){
                type1 += `<td width="60%" data-rel="${it.id}">${it.num }</td>` ;
            }else if(it.type == "2"){
                type2 += `<td width="60%" data-rel="${it.id}">${it.num}</td>` ;
            }
        })
    }else{
        type1 += `<td width="30%">0</td>` ;
        type2 += `<td width="30%">0</td>` ;
    }

    let tmpl = `<table border="1" width="270px" cellpadding="0" cellspacing="0" class="tip_table">
                  <tr height="25px"><td colspan="2" style="color:#fff;text-align: left;font-size:16px;">【${city}】</td></tr>
                  <tr height="25px" >
                      ${type1}
                  </tr>
                  <tr height="25px" >
                      ${type2}
                  </tr>
                </table>
            `
    return tmpl;
}



export function getMapTooltip(){
    return {
        textStyle:{
            fontSize : 12,
            align : "left"
        },
        backgroundColor:"rgba(0,0,0,0.7)",
        position:"inside",
        hideDelay:100,
        enterable:true,
        formatter: function (params) {
            let content = "";
            var city =  params.name;
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
                fontSize: 12
            }
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
        precision: 0,
        calculable: false,
        textStyle: {
            color: config.visualRangeColor
        }
    }
    return visualConfig
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
    let areaData = [];
    data.forEach(function(d){
        areaData.push({
            subArray:d.subArray,
            name : d.name,
            coord : lnCoor[d.name]
        })
    })
    let markPoint = {
        symbol: 'pin',
        symbolSize:100,
        itemStyle:{
            normal:{
                color : "rgba(0,127,194,0.6)"
            }
        },
        label:{
            normal:{
                show:true,
                formatter:function(d){return d.name}
            }
        },
        data :areaData
    }
    return markPoint;
}