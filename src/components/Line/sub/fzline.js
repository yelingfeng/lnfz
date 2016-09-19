/**
 * Created by yelingfeng on 2016/9/19.
 */
import { getLinearGradient} from "../../util"
import * as config from "../../commonConfig"
/**
 * 核心setting方法
 * @param option 分组处理后对象
 * @param props
 */
function setting(option, props) {
    let iconpath = "path://M 87.07 30.697 H 70.4 C 68.06 42.34 57.84 51.105 45.595 51.105 c -12.247 0 -22.46 -8.765 -24.807 -20.407 H 5.095 c -2.797 0 -5.065 -2.285 -5.065 -5.1 c 0 -2.817 2.267 -5.102 5.065 -5.102 h 15.692 C 23.135 8.852 33.347 0.09 45.595 0.09 C 57.84 0.09 68.06 8.852 70.4 20.495 h 16.67 c 2.8 0 5.065 2.285 5.065 5.102 C 92.135 28.412 89.87 30.697 87.07 30.697 Z";

    option.title = {
        text: '诈\n骗\n态\n势\n图',
        textStyle:{
            color : config.axisLineColor,
            fontFamily:config.commonFontFamily
        },
        borderColor : config.axisLineColor,
        borderWidth : 0.5,
        padding : 10,
        right : 10,
        top : "center"
    }
    option.grid = {
        left : "10%",
        top  : "20%",
        bottom : '12%',
        right : "8%"
    };
    option.backgroundColor = "rgba(55,114,166,0.1)"
    option.legend.show = true;
    option.legend.orient = "horizontal";
    option.legend.itemHeight = 10;
    option.legend.itemWidth = 15;
    option.legend.data.forEach((it,index) => {
        it.icon = iconpath
        it.textStyle = {
            color : config.commonColorList[index]
        }
    })


    const axisline = {
        lineStyle:{
            color : config.axisLineColor,
            width : 2
        }
    }
    const axisTike = {
        lineStyle:{
            color : config.axisLabelColor
        }
    }

    option.yAxis[0].axisLine = axisline
    option.yAxis[0].axisTick = axisTike
    option.yAxis[0].splitLine = {
        show : false
    }
    option.xAxis[0].axisLine = axisline
    option.xAxis[0].axisTick = axisTike
    option.xAxis[0].splitLine = {
        show : false
    }
    console.log(option)

    return option;
}

export default {
    setting
}