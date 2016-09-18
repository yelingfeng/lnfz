/**
 * Created by yelingfeng on 2016/8/24.
 */

import echarts from "echarts"
import _ from "lodash";
import {API_ROOT} from 'src/config'

const isProd = process.env.NODE_ENV === 'production'

const iconUrl = isProd ? API_ROOT +"images/" : API_ROOT+"src/assets/images/legendicon"


const commonColor = "#44c4f0"
/**
 * 核心setting方法
 * @param option 分组处理后对象
 * @param props
 */
//#f4794f---#b25536    #b54339--#b34039   #2c5ba3--#2b5da3 #414079--#414079
function getColor(index){
    let colors =  ['#47c9f6', '#414079','#2c5ba3' ,'#f4794f','#b54339']
    let borderColor = ['#3394b7','#414079',"#2b5da3","#b25536","#b34039 "];
    return [
        colors[index] ? colors[index] : "",
        borderColor[index]? colors[index] : "",
    ]
}

function highLightDataStyle(color){
    return {
        normal: {
            color: color[0],
            //shadowBlur : 10,
            //shadowColor : color[1],
            borderWidth :1,
            opacity:0.8,
        }
    }

}
function outerItemStyle(){
    return {
        normal: {
            color:commonColor,
            label: {show: false},
            labelLine: {show: false}
        },
        emphasis:{
            show:false
        }
    }
}


function setting(option, props) {

    let groupName= [];
    let nv = _.chain(option).sortBy(function(o) { return parseFloat(o.value,10); }).reverse().value();

    let cyclePath = "path://M25.597,9.762c4.24,0,8.222,1.65,11.222,4.647s4.65,6.982,4.65,11.225c0,4.245-1.65,8.225-4.65,11.22    c-3,3-6.982,4.655-11.222,4.655s-8.222-1.655-11.22-4.655c-3-2.995-4.65-6.975-4.65-11.22c0-4.242,1.65-8.227,4.65-11.225    C17.375,11.412,21.36,9.762,25.597,9.762 M25.597,0.065c-14.117,0-25.565,11.45-25.565,25.57S11.48,51.2,25.597,51.2    c14.122,0,25.572-11.445,25.572-25.565S39.72,0.065,25.597,0.065L25.597,0.065z"
    groupName = nv.map((it,index) =>{
        return {
            name:it.name,
            itemWidth:10,
            itemHeight : 10,
            icon : cyclePath
        }
    });

    let data = nv.map((it,index) =>{
        return {
            value:it.value,
            name : it.name,
            itemStyle:highLightDataStyle(getColor(index))
        }
    })

    let innerSeries = {
            name:'诈骗类型',
            type:'pie',
            selectedMode: 'single',
            clockwise:false,
            hoverAnimation: false,
            startAngle: 100,
            radius: ['60%', '75%'],
            avoidLabelOverlap:false,
            label: {
                normal: {
                    show: true,
                    formatter(param){
                        return param.percent+"%"
                    },
                    textStyle:{
                        color : commonColor
                    }
                },
                emphasis:{
                    show:false
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    lineStyle:{
                        color :"transparent"
                    }
                },
                emphasis:{
                    show:false
                }
            },
            data:data
    }

    let outerSeries = {
        name:'诈骗类型',
        type:'pie',
        radius: ['80%', '80.5%'],
        hoverAnimation: false,
        data:[
           {
                value: 100,
                name: 'line',
                itemStyle:outerItemStyle()
            }
        ]
    }

    let op = {
        legend:{
            textStyle:{
                color : '#44c4f0',
            },
            left: "36%",
            top : "32%",
            orient:"vertical",
            selectedMode:false,
            data :groupName
        },
        animation: false,
        tooltip : {
            trigger: 'item',
            formatter: "{b} :{d}%",
            textStyle : {
                fontSize :12,
                align : "left"
            }
        },
        series:[innerSeries,outerSeries]
    }


    return op;
}

export default {
    setting
}