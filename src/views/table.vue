/**
 * Created by yelingfeng on 2016/9/6.
 */
<template>
    <div class="atable" :style="style" >
        <!--<div class="box_title" ><span></span>{{title}}</div>-->
        <div class="monitor box_border_box" >
            <div class="monitor-inner" :style="style2">
                <table class="table table-condensed">
                    <thead>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in datas">
                            <td width="25px"><i>{{index+1}}</i></td>
                            <td style="text-align:left;">{{item.number}}</td>
                            <td style="text-align:left;">{{item.fraudType}}</td>
                            <td style="text-align:center;">{{item.time}}</td>
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
    data(){
        return {
            style2:{
                height:'160px'
            }
        }
    },
    updated(){
        this.tableInit();
        this.setContentSize()
    },
    watch:{
        datas:{
            deep:true,
            handler(val){
                this.tableInit()
            }
        }
    },
    computed:{
        style(){
            return this.$store.getters.getTableSize;
        },
        style2(){
            let size = this.$store.getters.getTableSize;
            return {
                height : size.height
            }
        }
    },
    methods:{
        tableInit(){

            this.stopRun();

            this.speedNum = 2500;
            this.wapperBox = $(".monitor-inner",this.$el);
            this.innerTable = $(".table-condensed",this.$el);

            if(this.innerTable.height() > this.wapperBox.height()){
                if(!this.isStart){
                    this._preprocess();
                    this.isStart = true;
                }
                // run
                this.startRun();
            }
        },
        _preprocess(){
            let $table =  this.innerTable;
            $table.wrap('<div style="height: 100%; overflow: hidden; position: relative;margin-left: 5px;"></div>');
            var $thead = $table.find("thead");
            var thHeight = $thead.height();

            let $sticky = $('<table class="' + $table.attr('class') + '" style="position: absolute; top: 0;"></table>');
            $sticky.append($thead.clone());
            $sticky.hide();
            $table.parent().append($sticky);

            let width = $table.width();

            // 原始table第二层wrapper
            $table.wrap('<div style="overflow: hidden; margin-top: 10px;"></div>');
            $table.css('margin-top', "-" + thHeight+'px');

            this.setContentSize();
        },

        setContentSize(){
            var width = this.innerTable.width();
            var trs = this.innerTable.find('tr');
            trs.each(function(){
                var tds = $(this).children();
                var w1 = 20;
                var w4 = 150;
                var w3 = '25%';
                var w2 = '30%';
                tds.eq(0).width(w1);
                tds.eq(1).width(w2);
                tds.eq(2).width(w3);
                tds.eq(3).width(w4);
            })
        },

        startRun(){
            this.starting = true;

            var $tbody = this.innerTable.find("tbody");
            var table = this.innerTable.get(0);
            var me = this;
            clearInterval(this.timer);
            this.timer = setInterval(function(){
                var $first = $tbody.children().first();
                var h = $first.get(0).offsetHeight;
                me.moveAnim(table, 0, 0, 0, -h, {
                    isClear: true,
                    afterAnim: function(){
                        $tbody.append($first);
                    }
                });
            }, this.speedNum);
        },

        stopRun(){
            this.starting = false;
            clearInterval(this.timer);
            this.timer = null;
        },

        /* 移动动画
         @param el {HTMLElement}
         @param x1 {number}
         @param y1 {number}
         @param x2 {number}
         @param y2 {number}
         @param config {Object}
         @param duration {number}
         @param ease {string}
         @param isShowEl {boolean} 动画结束后是否继续显示元素
         @param isClear {boolean} 动画结束后是否清除动画属性
         @param beforeAnim {Function}
         @param afterAnim {Function}
         */
        moveAnim(el, x1, y1, x2, y2, config) {
            let me = this;
            if(!el){
                return;
            }
            if(!el.tagName && el.length){
                // jquery节点
                el = el[0];
            }

            let style = el.style;
            config = $.extend({
                duration: 400,
                ease: 'ease',
                isShowEl: true,
                isClear: false
            }, config);

            style.display = 'block';
            style.transform = 'translate3d(' + x1 + 'px, ' + y1 + 'px, 0px)';
            style.transitionDuration = '0ms';
            style.webkitTransform = 'translate3d(' + x1 + 'px, ' + y1 + 'px, 0px)';
            style.webkitTransitionDuration = '0ms';

            // before animation
            config.beforeAnim && config.beforeAnim();
            setTimeout(function() {
                style.transform = 'translate3d(' + x2 + 'px, ' + y2 + 'px, 0px)';
                style.transitionDuration = config.duration + 'ms';
                style.transitionTimingFunction = config.ease;
                style.webkitTransform = 'translate3d(' + x2 + 'px, ' + y2 + 'px, 0px)';
                style.webkitTransitionDuration = config.duration + 'ms';
                style.webkitTransitionTimingFunction = config.ease;
                // 下面不会有第二次setTimeout
                if(config.isShowEl && !config.isClear){
                    // after animation
                    config.afterAnim && config.afterAnim();
                }
            }, 0);

            // 动画结束后不显示元素
            if(!config.isShowEl){
                style.display = 'none';
            }
            // 清空动画属性（下次show时显示在最初的位置）
            if(!config.isShowEl || config.isClear){
                setTimeout(function() {
                    me._clearTransform(el);
                    // after animation
                    config.afterAnim && config.afterAnim();
                }, config.duration + 10);
            }
        },

        _clearTransform(el){
            var style = el.style;
            style.transform = null;
            style.transitionDuration = null;
            style.transitionTimingFunction = null;
            style.webkitTransform = null;
            style.webkitTransitionDuration = null;
            style.webkitTransitionTimingFunction = null;
        }
    }
}
</script>
<style scoped>
    .atable{
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
        table-layout: fixed;
    }
    .monitor-inner{
        width:100%;
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
        border:2px solid #44c4f0;
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
        margin: 5px;
    }

    tbody tr td i{
        display:block;
        width:20px;
        height:20px;
        background:#005687;
        font-style:normal;
        text-align:center;
    }
    tbody tr:first-child td i{
        background:#ef732b;
    }

    .table td a img{
        vertical-align: middle;
    }

    .table th,
    .table td {
        border-top:none;
        padding: 8px;
        font-size: 12px;
        line-height:22px;
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