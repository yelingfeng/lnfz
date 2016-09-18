<template>
    <div class="col-md-12">
        <div class="search_bar">
            <div class="search_box" id="search">
            <div class="searchContainer clear">
                <div class="searchComponent">
                    <div class="input_box ">
                        <span class="lbl_txt">开始时间：</span>
                        <input type="text" class="x_form_text" id="beginTime"  v-model="dstartTime"  readonly="readonly" style="width: 200px;">
                        <span class="tip_star"></span>
                        <span class="after_text"></span>
                    </div>
                    <div class="input_box ">
                        <span class="lbl_txt">结束时间：</span>
                        <input type="text" class="x_form_text " id="endTime"  v-model="dendTime"  style="width: 200px;" readonly="readonly">
                         <span class="tip_star"></span>
                        <span class="after_text"></span>
                    </div>
                </div>
                <div class="searchBtn" style="left: 603px;">
                    <div class="btn_box">
                        <div class="btns" @click="searchAction">
                            <span >查询</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default  {
    name :"search",
    data(){
        return {
            sT : "",
            eT : ""
        }
    },
    computed:{
        dstartTime(){
            return this.$store.getters.getStartTime
        },
        dendTime(){
            return this.$store.getters.getEndTime
        }
    },
    methods:{
        searchClick(){
        },
        // 点击查询
        searchAction(){

           this.$store.dispatch("SEARCH_ACTION",{
               s : this.sT,
               e : this.eT
           })
        }
    },
    mounted(){
        let me = this;
        $('#beginTime').fdatepicker({
            format: 'yyyy-mm-dd hh:ii',
            language:"zh-CN",
            disableDblClickSelection: true,
            initialDate:this.dstartTime,
            pickTime: true
        }).on('hide', function (ev) {
            let time = $(this).val();
            me.sT = time;
        })

        $('#endTime').fdatepicker({
            format: 'yyyy-mm-dd hh:ii',
            language:"zh-CN",
            initialDate:this.dendTime,
            disableDblClickSelection: true,
            pickTime: true
        }).on('hide', function (ev) {
            let time = $(this).val();
            me.eT = time;
        })

         me.sT = this.dstartTime;
         me.eT = this.dendTime

    }
}
</script>
<style>

    .search_bar{
        /*padding:5px 0;*/
        width: 100%;
        font-size: 14px;
    }
    .searchContainer{
        position:relative;
        width: 100%;
    }
    .searchComponent{
        float:left;
        /*
        max-width: 65%;
        min-width: 300px;*/
    }
    .set_search .searchComponent{
        padding-left:10px;
        width:405px;
        max-width:405px;
    }
    .searchBtn{
        /*float:left;*/
        position: absolute;
        /*bottom: 5px;*/
        top:0;
        left:80%;
        padding-left: 5px;

    }
    .search_title{
        font-weight:bold;
        font-size:22px;
        color:#fff;
        padding-top: 5px;
    }
    .search_box{
        border: 2px solid transparent;
        border: 1px solid transparent \9;
        /*padding: 8px 2px;*/
        -moz-border-image: url(../assets/images/split-line1.png) 0 0 5 0 stretch;
        -webkit-border-image: url(../assets/images/split-line1.png) 0 0 5 0 stretch;
        -o-border-image: url(../assets/images/split-line1.png) 0 0 5 0 stretch;
        border-image: url(../assets/images/split-line1.png) 0 0 5 0 stretch;
        border-bottom-color: rgba(170, 225, 246, 0.7);
        height:auto;
    }
    .btns{
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        -o-border-radius: 3px;
        -ms-border-radius: 3px;
        -khtml-border-radius: 3px;
        border-radius: 3px;
        width:70px;
        height:26px;
        line-height:26px;
        margin-right:10px;
        background:linear-gradient(to bottom,#3d97e6,#2f84cf,#2374bb);
        color: #fff;
        cursor:pointer;
        text-align:center;
    }
    .btns:hover,.btns_selected{
        background:linear-gradient(to bottom,#42a5fb,#3593e6,#267fcd);
    }
    .btns{
        width:80px;
    }
    .btn_box{
        position:relative;
        /*width:150px;*/
        display:inline-block;
        padding-top:8px;
        /*padding:10px;*/
    }
    .btn_box .x-btn-arrow{
        background: url('../assets/images/arrow.gif') no-repeat;
        width: 10px;
        height: 10px;
        position: absolute;
        top: 18px;
        right:15px;

    }
    .input_box{
        display:inline-block;
        padding:8px 5px;
        cursor: default;
        text-align: left;
        position: relative;
        color:#fff;
    }
    .input_box span.lbl_txt,.area_box span.lbl_txt{
        color:#fff;
        display: inline-block;
        width: 80px;
        text-align: right;
    }
    .x_form_text,.x_area_text{
        /*    padding: 1px 3px;
          background: repeat-x 0 0;*/
        border: 1px solid #3477b9;
        background-color: rgba(21,82,141,.4);
        /*background-image: none;*/
        color: #fff;
        height:26px;
        text-indent:3px;
    }
    .x_form_text:focus,.x_area_text:focus{
        border-color: #699cdb;
    }
    .hide_input{
        display:none;
    }
    .radio_wrap{
        display: inline-block;
        padding-right: 10px;
    }
    .r_txt{
        color:#fff;
    }
    .radio_wrap input[type='radio']{
        vertical-align: middle;
    }
    .input_box input:disabled{
        color:grey;
    }
    .checkbox_wrap {
        display: inline-block;
        padding-right: 10px;
    }
    .checkbox_wrap input[type='checkbox']{
        vertical-align: middle;
    }
    input::-webkit-input-placeholder { /* WebKit browsers */
        color:#fff;
    }
    input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:#fff;
    }
    input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:#fff;
    }
    input:-ms-input-placeholder { /* Internet Explorer 10+ */
        color: #fff;
    }

</style>