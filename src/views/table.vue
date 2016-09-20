/**
 * Created by yelingfeng on 2016/9/6.
 */
<template>
    <div class="atable" :style="style" >
        <!--<div class="box_title" ><span></span>{{title}}</div>-->
        <div class="monitor box_border_box" >
            <div class="monitor-inner" :style="style2">
                <table class="table table-condensed">
                    <thead v-if="isTop =='1'">
                        <tr>
                            <th class="span1">序号</th>
                            <th class="span2">受害用户</th>
                            <th class="span3">诈骗电话</th>
                            <th class="span2">归属地区</th>
                            <th class="span4">通话时间</th>
                            <th class="span2" >通话时长</th>
                        </tr>
                    </thead>
                    <thead v-if="isTop =='0'">
                        <tr>
                            <th class="span1">序号</th>
                            <th class="span2">诈骗用户</th>
                            <th class="span2">诈骗类型</th>
                            <th class="span2">封停时间</th>
                        </tr>
                    </thead>
                    <tbody v-if="isTop =='1'">
                        <tr v-for="(item,index) in datas">
                            <td ><i>{{index+1}}</i></td>
                            <td >{{item.hurtNum}}</td>
                            <td >{{item.fraudNum}}</td>
                            <td >{{item.userCity}}</td>
                            <td>{{item.answerTime}}</td>
                            <td>{{item.callTimes}}</td>
                        </tr>
                    </tbody>
                    <tbody v-if="isTop =='0'">
                        <tr v-for="(item,index) in datas">
                            <td ><i>{{index+1}}</i></td>
                            <td>{{item.number}}</td>
                            <td>{{item.fraudType}}</td>
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
    data(){
        return {
            style2:{
                height:'160px'
            }
        }
    },
    updated(){
        this.tableInit();
        //this.setContentSize()
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
            let me = this;
            let $table =  this.innerTable;
            $table.wrap('<div style="height: 100%; overflow: hidden; position: relative;"></div>');

            var $thead = $table.find("thead");
            var thHeight = $thead.height();

            this.$sticky = $('<table class="' + $table.attr('class') + '" style="position: absolute;left:8px;  top: 0;"></table>');
            this.$sticky.append($thead.clone());
            $table.parent().append(this.$sticky);

            $thead.css('visibility', 'hidden');

            let width = $table.width();

            // 原始table第二层wrapper
            $table.wrap('<div style="overflow: hidden;margin-left:3px ;margin-top:'+thHeight+'px;"></div>');
            $table.css('margin-top', "-" + thHeight+'px');

//            $thead.find('th').each(function(i){
//                $(this).css('width', me.$sticky.find('th').eq(i).width() + 'px');
//            });

            //this.setContentSize();
        },

        setContentSize(){
            var me =this;
            var width = $(this.$el).width();
            var trs = this.innerTable.find('tbody tr');

            let w1 = 30 ;
            let w2 = "10%";
            let w3 = "18%";
            let w4 = "20%";
            let w5 =  150 ;
            let w6 =  "10%";

            let stopW2 ='35%';
            let stopW3 ='20';
            let stopW4 ='160';


            trs.each(function(){
                let tds = $(this).children();
                if(me.isTop == "1"){
                    tds.eq(0).width(w1);
                    tds.eq(1).width(w2);
                    tds.eq(2).width(w3);
                    tds.eq(3).width(w4);
                    tds.eq(4).width(w5);
                    tds.eq(5).width(w6);
                }else {
                    tds.eq(1).width(w1);
                    tds.eq(1).width(stopW2);
                    tds.eq(2).width(stopW3);
                    tds.eq(3).width(stopW4);
                }
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
        position:absolute;
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
        text-align:center;
    }

    .table td a img{
        vertical-align: middle;
    }

    .table th,
    .table td {
        border-top:none;
        padding: 8px;
        font-size: 12px;
        line-height:20px;
        text-align: left;
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

    .table th {
    }

    .table thead th {
        vertical-align: bottom;
    }



    .table-condensed th,
    .table-condensed td {
        padding: 4px 4px;
    }

    table td[class*="span"],
    table th[class*="span"]{
        display: table-cell;
        float: none;
        margin-left: 0;
    }


    .table td.span1,
    .table th.span1 {
        float: none;
        width: 44px;
        margin-left: 0;
    }

    .table td.span2,
    .table th.span2 {
        float: none;
        width: 124px;
        margin-left: 0;
    }

    .table td.span3,
    .table th.span3 {
        float: none;
        width: 150px;
        margin-left: 0;
    }

    .table td.span4,
    .table th.span4 {
        float: none;
        width: 224px;
        margin-left: 0;
    }

    .table td.span5,
    .table th.span5 {
        float: none;
        width: 364px;
        margin-left: 0;
    }

    .table td.span6,
    .table th.span6 {
        float: none;
        width: 444px;
        margin-left: 0;
    }

    .table td.span7,
    .table th.span7 {
        float: none;
        width: 524px;
        margin-left: 0;
    }

    .table td.span8,
    .table th.span8 {
        float: none;
        width: 604px;
        margin-left: 0;
    }

    .table td.span9,
    .table th.span9 {
        float: none;
        width: 684px;
        margin-left: 0;
    }

    .table td.span10,
    .table th.span10 {
        float: none;
        width: 764px;
        margin-left: 0;
    }

    .table td.span11,
    .table th.span11 {
        float: none;
        width: 844px;
        margin-left: 0;
    }

    .table td.span12,
    .table th.span12 {
        float: none;
        width: 924px;
        margin-left: 0;
    }

    .table tr {
        width : 100%;
    }

    .table tr:hover {
        background-color: rgba(255,255,255,.1);
        cursor:pointer;
    }

</style>