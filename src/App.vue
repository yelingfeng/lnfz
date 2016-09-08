<template>
  <div id="app" :style="centerStyle">
        <div class="container-fluid">
            <div class="row">
                 <search-comp></search-comp>
            </div>
            <div class="row">
                <div class="col-md-8"></div>
                     <map-comp ></map-comp>
                <div class="col-md-4">
                    <table-comp :title="title1" :style="tableSizeT" isTop="1" :datas="tableData2"></table-comp>
                    <table-comp :title="title2" :style="tableSizeB" isTop="0" :datas="tableData1"></table-comp>
                </div>
            </div>
        </div>


  </div>
</template>

<script>
  import mapComp from "views/mapComp"
  import tableComp from "views/table"
  import searchComp from "views/search"
  import {mapActions } from "vuex"
  export default {
    name : "app",
      data(){
          return {
              title1 :"已检出号码",
              title2 : "已封停号码",
              centerStyle:{

              }
          }
      },
     computed:{
         tableData1(){
             return this.$store.getters.getTableData1;
         },
         tableData2(){
             return this.$store.getters.getTableData2;
         },
         tableSizeT(){
             return this.$store.getters.getTableSizeTop;
         },
         tableSizeB(){
             return this.$store.getters.getTableSizeBottom;
         }
     },
    methods:{
        resizeWin(){
            let ww = $(window).width();
            let wh = $(window).height();

            let wantw = ( ww * 2 / 3  ) - 10
            let wanth = ( wh  - 50 )


            this.centerStyle.width = ww +"px";
            this.centerStyle.height = wh +"px";

            let tableH = (wanth / 2) -10 +"px";
            let tableW = (ww - wantw)  +"px" ;
            let tableSize = {
                width : tableW ,
                height : tableH
            }

            this.$store.dispatch('RESIZE_TABLE',{
                size: tableSize,
            })

            this.$store.dispatch('RESIZE_MAP',{
                w : wantw +'px',
                h : wanth+ 'px'
            })
        },

        openLayer(id){
            layer.open({
                content: '<div class="openBox"></div>'
            });
        }
    },
    beforeMount (){
        this.$store.dispatch('INIT_CHART_LIST')
        this.resizeWin()
    },
    mounted(){
          var me = this;
          $(window).resize(() => {
              this.resizeWin()
          })

          $(document).delegate('.tip_table td','click',function(){
              var relId = $(this).attr("data-rel");
              if(relId != null){
                  me.openLayer(relId);
              }

          })

          this.$store.dispatch('GET_LIST')
    },
    components :{
      mapComp,tableComp,searchComp
    }
  }
</script>

<style>
body {
    font-family: "Microsoft YaHei",Helvetica, sans-serif;
    background: url("./assets/images/bg.jpg") #0e1227 no-repeat;
    background-size:cover;
    width : 100%;
    height : 100%;
    overflow: hidden;
}
#app{
    position: relative;
}
.row {
  margin-top:10px;
}
.tip_table{
    border:#ccc 1px solid;
    color:#393939;
}
.tip_table td{
    color:#fff;
    border: rgba(57,152,236,0.5) 1px solid;
    font-size:12px;
    padding: 5px;
}

.tip_table tr:first-child{
    text-align: right;
}
.tip_table tr:last-child{
    text-align: left;
}

.openBox{
    padding: 10px;
    height: 300px;
}

</style>
