<template>
    <div id="dataTotal" :style="dtStyle">
        <div class="phoneToday">
            <div class="phoneTodayLeft"></div>
            <div class="phoneTodayCenter">今日共检测通话：<span class="nt" v-text="dtData.todayTimes"></span>（次）</div>
            <div class="phoneTodayRight"></div>
        </div>
        <div class="phoneAll">
            <div class="phoneAllLeft"></div>
            <div class="phoneAllCenter">今日检测诈骗电话：<span class="nt" v-text="dtData.todayData"></span>（个）</div>
            <div class="phoneAllRight"></div>
        </div>

        <!--全国地图-->
        <template v-if="curType == 1">
            <div class="yidong">
                <div class="IconLeft"></div>
                <div class="Text">省内</div>
                <div class="IconCenter"></div>
                <div class="Num">
                    <ul v-html="provIn">
                    </ul>
                </div>
                <div class="IconRight"></div>
            </div>
            <div class="dianxin">
                <div class="IconLeft"></div>
                <div class="Text">省外</div>
                <div class="IconCenter"></div>
                <div class="Num">
                    <ul v-html="provOut">
                    </ul>
                </div>
                <div class="IconRight"></div>
            </div>
        </template>

        <!--辽宁地图-->
        <template v-if="curType == 0">
            <div class="yidong">
                <div class="IconLeft"></div>
                <div class="Text">移动</div>
                <div class="IconCenter"></div>
                <div class="Num">
                    <ul v-html="Mobile">
                    </ul>
                </div>
                <div class="IconRight"></div>
            </div>
            <div class="dianxin">
                <div class="IconLeft"></div>
                <div class="Text">电信</div>
                <div class="IconCenter"></div>
                <div class="Num">
                    <ul v-html="Telecom">
                    </ul>
                </div>
                <div class="IconRight"></div>
            </div>
            <div class="liantong">
                <div class="IconLeft"></div>
                <div class="Text">联通</div>
                <div class="IconCenter"></div>
                <div class="Num">
                    <ul v-html="Unicom">
                    </ul>
                </div>
                <div class="IconRight"></div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name : 'dataTotal',
    props:['dtData','curType'],
    data(){
        return {
            Mobile : "",
            Unicom: "",
            Telecom:"",
            provIn:"",
            provOut:""
        }
    },
    watch:{
        dtData:{
            deep:true,
            handler(val,oldval){
                //TODO
                this.calNum(val)
            }
        },
    },
    // 计算属性
    computed:{
        dtStyle(){
            if(this.pieObj){
                this.pieObj.resize()
            }
            return this.$store.getters.getDtStyle;
        }
    },
    // 挂载前
    mounted(){

    },
    // 方法
    methods:{
        calNum:function(val){
            var that = this;
            this.Mobile = this.setStr(val.Mobile);
            this.Unicom = this.setStr(val.Unicom);
            this.Telecom = this.setStr(val.Telecom);
            this.provIn = this.setStr(val.provIn);
            this.provOut = this.setStr(val.provOut);
        },
        setStr:function(obj){
            var str = '';
            for(var i = 0 ; i < obj.length ; i++ ){
                str += "<li class='fontS' style='list-style:none;float:left;width:18px;height:24px;background:rgb(65,193,237);margin-right:3px;font-size:20px;color:#fff;text-align:center;line-height:24px;'>"+obj.substr(i,1)+"</li>"
            }
            return str;
        }
    }
}
</script>
<style scoped>
    #dataTotal{
        font-family: "SimHei", Helvetica, sans-serif;
        cursor: default;
        top:1%;
        position: absolute;
    }
    #dataTotal>div>div{
        float:left;
        height:36px;
        line-height:36px;
    }
    .yidong>div,.liantong>div,.dianxin>div{
        height:38px;
    }
    #dataTotal>div{
        height:36px;
        margin-bottom:15px;
    }
    .phoneToday{
        color: #2aa4d5;
    }
    .phoneAll{
        color:#f09777;
    }
    .yidong,.liantong,.dianxin{
        color:#2aa4d5;
        margin-left:10px;
        font-size:16px;
    }
    .phoneTodayLeft,.phoneAllLeft{
        width:10px;
    }
    .phoneTodayRight,.phoneAllRight{
        width:24px;
    }
    .phoneTodayLeft{
        background:url(../assets/images/dt/ps_03.png)
    }
    .phoneTodayRight{
        background:url(../assets/images/dt/ps_05.png)
    }
    .phoneAllLeft{
        background:url(../assets/images/dt/ps_08.png)
    }
    .phoneAllRight{
        background:url(../assets/images/dt/ps_10.png)
    }
    .phoneTodayCenter{
        padding:0 15px 0 15px;
        background:url(../assets/images/dt/ps_04.png);
        background-size: contain;
    }
    .phoneAllCenter{
        padding:0 15px 0 15px;
        background:url(../assets/images/dt/ps_09.png);
        background-size: contain;
    }

    #dataTotal span.nt{
        font-family: "Helvetica,Regular";
        font-size: 18px;
        font-weight: bold;
    }
    .IconLeft{
        width:3px;
        background:url(../assets/images/dt/ps_13.png);
    }
    .Text{
        padding:0 15px 0 15px;
        background:url(../assets/images/dt/ps_16.png);
    }
    .IconCenter{
        width:3px;
        background:url(../assets/images/dt/ps_15.png);
    }
    .Num{
        padding:6px;
        height:24px;
        background:url(../assets/images/dt/ps_16.png);
    }
    .IconRight{
        width:3px;
        background:url(../assets/images/dt/ps_17.png);
    }
    .Num li{
        list-style:none;
        float:left;
        width:18px;
        height:24px;
        background:rgb(65,193,237);
        margin-right:3px;
        font-size:20px;
        color:#fff;
        text-align:center;
        line-height:24px;
    }
</style>