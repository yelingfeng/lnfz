/**
 * Created by yelingfeng on 2016/9/6.
 */
<template>
    <div class="atable" :style="style">
        <div class="box_title" ><span></span>{{title}}</div>
        <div class="monitor box_border_box" >
            <div class="monitor-inner" >
                <table class="table table-condensed" id="wsHotTable">
                    <thead>
                    </thead>
                    <tbody>
                        <tr v-for="item in datas">
                            <td>{{item.number}}</td>
                            <td>{{item.time}}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="sides-horn">
                    <span class="north-west"></span>
                    <span class="north-east"></span>
                    <span class="south-west"></span>
                    <span class="south-east"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : "table",
    props:['title',"style","datas","isTop"],
}
</script>
<style scoped>
    .atable{
        position: fixed;
        bottom: 10px;
        box-sizing: border-box;
        /*overflow:hidden;*/
    }
    .atable .monitor-status{
        position: absolute;
        top: -32px;
        right: 200px;
        padding: 0.5em 1em;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    /* monitor STARTS */
    .monitor{
        color: #fff;
        font-size: 12px;
    }
    .monitor table{
        width: 100%;
        height: 280px;
        table-layout: fixed;
    }
    .monitor-inner{
        width:100%;
        height: 280px;
        overflow: hidden;
    }
    .monitor-status{
        border: 1px solid #fff;
        border-radius: 5px;
        background-color: rgba(0,0,0,0.5);
        color: #fff;
        font-size: 14px;
        text-align: center;
        text-decoration: none;
    }


    .box_title {
        height:26px;
        color:#FFF;
        font-size:16px;
        margin-left : 20px;
        line-height: 25px;
        padding:0px 30px;
        text-align:center;
        float:left;
        position:relative;
        background: transparent;
        border:1px solid #007fc2;
        border-bottom:none;
        cursor:default;
        border-right:none;
    }
    .box_title span{
        position:absolute;
        height:27px;
        width:14px;
        overflow:hidden;
        top:-1px;
        right:-14px;
        background:url("../assets/images/zz_03.png") no-repeat center center;
    }
    .box_title.box_title_special span{
        height:28px;
        background:url("../assets/images/x_03.png") no-repeat center center;
    }
    .box_right_middle .box_title,.box_right_top .box_title { margin-bottom:10px;}
    .box_title strong{
        display:block;
        padding:0px 13px;
        color:#FFF;
        /*font-family:"SimHei", Verdana, Arial, Helvetica, sans-serif;*/
        font-size:12px;
        font-weight:500;
        line-height: 25px;
        text-align:center;
        float:left;
        /*border-radius:2px; */
        background: #14447e;
        border:1px solid #0378b3;
        cursor:default;
    }
    .box_title a{
        float:right;
        line-height:26px;
        color:#cccccc;
        font-size:12px;
    }


    .box_border_box{
        position: relative;
        margin-top:10px;
        /*border:1px solid #038bef;
        box-shadow:inset 0px 0px 8px rgba(6,128,231,0.50),inset 0px 0px 15px rgba(255,255,255,0.30);*/
        box-shadow: inset 0px 0px 8px rgba(126, 220, 248,0.55);
        clear:both;
    }

    .box_border_box:hover span.north-west{
        transform:translate(-6px,-6px);
    }

    .box_border_box:hover span.south-west{
        transform:translate(-6px,6px);
    }

    .box_border_box:hover span.north-east{
        transform:translate(6px,-6px);
    }

    .box_border_box:hover span.south-east{
        transform:translate(6px,6px);
    }

    .box_border_box .sides-horn span{
        display:block;
        width:15px;
        height:15px;
        border:2px solid  #00cdfe;
        position: absolute;
        transition: all 0.2s linear 0.01s;
        z-index: 2;
    }
    .box_border_box .sides-horn span.north-west{
        top:-2px;
        left:-2px;
        border-right:0px;
        border-bottom:0px;
    }
    .box_border_box .sides-horn span.north-east{
        top:-2px;
        right:-2px;
        border-left:0px;
        border-bottom:0px;
    }
    .box_border_box .sides-horn span.south-west{
        bottom:-2px;
        left:-2px;
        border-right:0px;
        border-top:0px;
    }
    .box_border_box .sides-horn span.south-east{
        bottom:-2px;
        right:-2px;
        border-left:0px;
        border-top:0px;
    }

    table {
        max-width: 100%;
        background-color: transparent;
        border-collapse: collapse;
        border-spacing: 0;
        color:#e5e5e5;
    }

    .table td a img{
        vertical-align: middle;
    }

    .table th,
    .table td {
        border-top:none;
        padding: 8px;
        font-size: 14px;
        line-height: 32px;
        text-align: center;
        vertical-align: top;
        overflow-x:hidden;
        /*border-bottom: 1px solid #dddddd;*/
        /*white-space:nowrap;*/
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
    }


    .table tbody tr:last-child td{
        border-bottom: 0;
    }

    .table tbody + tbody {
        border-top: 2px solid #dddddd;
    }

    .table .table {
        background-color: #ffffff;
    }

    .table-condensed th,
    .table-condensed td {
        padding: 4px 4px;
    }

    .table tbody tr.success > td {
        background-color: #dff0d8;
    }
    .table tbody tr.error > td {
        background-color: #f2dede;
    }
    .table tbody tr.warning > td {
        background-color: #fcf8e3;
    }
    .table tbody tr.info > td {
        background-color: #d9edf7;
    }

    .table tr {
        width : 100%;
    }

    .table tr:hover {
        background-color: rgba(255,255,255,.1);
        cursor:pointer;
    }

    .table td.col1,
    .table th.col1{
        width:30px;
        text-align:left;
    }
    .table td.col2{
        overflow: hidden;
        text-overflow: ellipsis;
        /*   white-space: nowrap;*/
    }
    .table td.col3{
        width : 100px;
        text-align: left;
    }
    .table th.col3{
        width : 100px;
        text-align: center;
    }
</style>