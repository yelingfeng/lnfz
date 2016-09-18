<template>
  <div id="app" :style="centerStyle">
        <div class="container-fluid">
            <div class="row">
                 <search-comp></search-comp>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div>
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" v-for="(item,index) in tabItems" :class="{'active':isActived(index)}" @click="tabAction(item,index)"><a href="javascript:;">{{item.name}}</a></li>
                        </ul>
                        <div v-show=" tabActiveIndex === 0">
                            <map-comp map-type="liaoning" :map-data="liaoningData"></map-comp>
                        </div>
                        <div v-show=" tabActiveIndex === 1">
                            <map-comp map-type="china" :map-data="chinaData"></map-comp>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6">
                            <dataTotal :dt-data="dtData"></dataTotal>
                        </div>
                        <div class="col-md-6">
                            <pieComp :style="pieStyle" :pie-data="pieData"></pieComp>
                        </div>
                    </div>
                    <div class="bottom-table" :style="bottomStyle">
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" v-for="(item,index) in tabTableItems" :class="{'active':isActivedTable(index)}" @click="tabTableAction(item,index)"><a href="javascript:;">{{item.name}}</a></li>
                        </ul>
                        <div v-show=" tabActiveTableIndex === 0">
                            <table-comp :title="title1"  isTop="1" :datas="EngineData"></table-comp>
                        </div>
                        <div v-show=" tabActiveTableIndex === 1">
                            <table-comp :title="title2"  isTop="0" :datas="StopData"></table-comp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
  import mapComp from "views/mapComp"
  import tableComp from "views/table"
  import searchComp from "views/search"
  import tabs from "views/tab"
  import pieComp from "views/pieView"
  import dataTotal from "views/dataTotal"
  export default {
      name : "app",
      data(){
          const opData = {
              "layerParam" : {
                  "pageNumber":1,
                  "pageSize" : 10
              },
              "tabActiveIndex":0,
              "tabActiveTableIndex":0,
              "tabItems":[
                  {
                      "name":"辽宁",
                      "clickAction":function(){
                          this.tabActiveIndex = 0;
                      }.bind(this)
                  },
                  {
                      "name":"中国",
                      "clickAction":function(){
                          this.tabActiveIndex = 1;
                      }.bind(this)
                  }
              ],
              "tabTableItems":[
                  {
                      "name":"已检出号码",
                      "clickAction":function(){
                          this.tabActiveTableIndex = 0;
                      }.bind(this)
                  },
                  {
                      "name":"已封停号码",
                      "clickAction":function(){
                          this.tabActiveTableIndex = 1;
                      }.bind(this)
                  }
              ],
              "title1" :"已检出号码",
              "title2" : "已封停号码",
              "centerStyle":{

              },
              bottomStyle:{

              }
          }
          return opData;
      },
     watch:{
         layerData:{
             deep:true,
             handler(val,oldVal){
                 let reData = {
                     total : val.total,
                     rows : val.rows
                 }
                 if(val.total == 0){
                     reData.rows = [];
                 }
                 $('#opentable').datagrid('loadData', reData)
             }
         }
     },
    methods:{
        resizeWin(){
            let ww = $(window).width();
            let wh = $(window).height();

            let mapw = ( ww * 0.55  ) - 10;
            let maph = ( wh  - 50 );


            this.centerStyle.width = ww +"px";
            this.centerStyle.height = wh +"px";



            let tableH = ((maph * 0.35 ) - 50)  +"px";
            let tableW = (ww - mapw)  +"px" ;
            let tableSize = {
                width : tableW ,
                height : tableH
            }

            this.bottomStyle = {
                width : tableW,
                height : (maph * 0.3) + 50 +"px"
            }



            this.$store.dispatch('RESIZE_TABLE',{
                size: tableSize,
            })

            this.$store.dispatch('RESIZE_MAP',{
                w : mapw +'px',
                h : maph+ 'px'
            })


            let topW = ((ww - mapw) /2 )  ;
            let topH = (maph / 2 )

            this.$store.dispatch('RESIZE_PIE',{
                size:{
                    width:topW + 100+"px",
                    height : topH + 50 +"px",
                    right : "30%"
                }
            })

            this.$store.dispatch('RESIZE_DT',{
                size:{
                    width:topW +"px",
                    height : topH + "px"
                }
            })

        },


        isActivedTable(index){
            return index === this.tabActiveTableIndex;
        },

        isActived(index){
            return index === this.tabActiveIndex
        },
        tabAction(item,index){
            this.tabActiveIndex = index;
            item.clickAction()
        },
        tabTableAction(item,index){
            this.tabActiveTableIndex = index;
            item.clickAction()
        },

        openLayer(type){
            let me = this;

            let columnArr =  [
                {field:'cheatedUser',title:'疑似被诈骗用户',width:"140",align:'left',sortable:true,
                },
                {field:'evilNumber',title:'疑似恶意号码',width:"110",align:'left',sortable:true,
                },
            ]
            if(type == "1"){
                columnArr.push({field:'allTimes',title:'通话次数',width:"130",align:'left',sortable:true })
            }else if(type == "2"){
                columnArr.push({field:'keyWords',title:'关键词',width:"130",align:'left',sortable:true})
            }
            columnArr.push({field:'stopFlag',title:'封停状态',width:"100",align:'left',sortable:true })

            layer.open({
                type:1,
                content: '<div class="openBox"><table id="opentable"></table></div>',
                success(){
                    me.$store.dispatch('INSERT_INFO_DATA',me.layerParam);
                    $('#opentable').datagrid({
                        height: 300,
                        width : '100%',
                        singleSelect : true, // 只能选择一行
                        fitColumns : true,// 让列宽自动适应数据表格的宽度。
                        rownumbers : true,
                        pageList : [ 5, 10, 20, 30, 40, 50, 100 ],// 可以设置每页记录条数的列表
                        pageSize : 10,// 每页显示的记录条数，默认为10
                        pagination : true, // 分页工具栏
                        loadMsg : '正在加载数据，请稍后...',
                        method : 'POST',
                        columns : [columnArr],
                    });

                    $('#opentable').datagrid('getPager').pagination({
                        loadMsg : '正在加载数据，请稍后...',
                        beforePageText : '第',//页数文本框前显示的汉字
                        afterPageText : '页    共 {pages} 页',
                        displayMsg : '当前显示 {from} - {to} 条记录   共 {total} 条记录',
                        onSelectPage:function(pageNum, pageSize){
                            me.layerParam.pageNumber = pageNum
                            me.layerParam.pageSize = pageSize
                            me.$store.dispatch('INSERT_INFO_DATA',me.layerParam)
                        }
                    });
                }
            });


        }
    },
    beforeMount (){
        this.$store.dispatch('INIT_RESOURCE')
        this.resizeWin()
        if(process.env.NODE_ENV === 'production'){
            $("body").css("background","transparent")
        }
    },
     computed:{
          EngineData(){
              return this.$store.getters.getEngineData;
          },
          dtData(){
              return this.$store.getters.getTotalData;
          },
          pieData(){
             return this.$store.getters.getPieData;
          },
          StopData(){
              return this.$store.getters.getStopData;
          },
          pieStyle(){
             return this.$store.getters.getPieStyle;
          },
          layerData(){
              return this.$store.getters.getLayerData;
          },
          liaoningData(){
              return this.$store.getters.getliaoningData;
          },
          chinaData(){
              return this.$store.getters.getChinaData
          }
     },
    mounted(){
      let me = this;
      $(window).resize(() => {
          this.resizeWin()
      })

      $(document).delegate('.tip_table td','click',function(){
          let typeId = $(this).attr("data-rel");
          let cityName =$(this).attr("data-city");
          if(typeId != null){
              me.layerParam.type = typeId;
              me.layerParam.cityName = cityName;
              me.openLayer(typeId);
          }
      })
    },
    components :{
      mapComp,tableComp,searchComp,tabs,pieComp,dataTotal
    }
}
</script>

<style>
body {
    font-family: "Microsoft YaHei",Helvetica, sans-serif;
    background: url("./assets/images/bg.png") #0e1227 no-repeat;
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

a:hover{
    color :#44c4f0;
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
    width: 600px;
}
.datepicker.dropdown-menu{
    background-color: rgba(21,82,141,0.95);
    border: 1px solid #3477b9;
    border-radius:0;
    color : #fff;
}
.datepicker th, .datepicker td{
    background: rgba(21,82,141,0.95);
}


.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}

.nav-tabs {
    border:none;
}
.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover{
    box-shadow: inset 0px 0px 8px #44c4f0;
    color:#fff;
    background-color: transparent;
    border :none;
}
.nav-tabs>li>a {
    border-radius: 0;
}
.nav>li>a:focus, .nav>li>a:hover{
    background-color: transparent;
    border-color:transparent;
}

.bottom-table{
    position: fixed;
    bottom: 3%;
    right : 10px;
}


</style>
