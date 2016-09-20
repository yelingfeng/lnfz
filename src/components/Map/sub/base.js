/**
 * Created by yelingfeng on 2016/8/29.
 */

import {getMapProps} from "../../propsUtil"
import * as config from "../../commonConfig"
import * as helper from "../helper"

function setting(option, props) {
    let data = option.data;
    let mapType = getMapProps(props,'mapType');
    let series = {
        type: 'map',
        roam: true,
        map: mapType,
        label: helper.getMapLabelOption(),
        itemStyle: helper.getMapItemOption(),
        data: data,
        markPoint : helper.getLNPointData()
    }
    let op = {
        visualMap: helper.getMapVisualMap(data),
        series: [series],
        tooltip:helper.getMapTooltip()
    }
    return op;
}
export default  {
    setting
}