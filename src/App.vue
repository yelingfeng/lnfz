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
                    <table-comp :title="title1" :style="tableSizeT" isTop="1" :datas="EngineData"></table-comp>
                    <table-comp :title="title2" :style="tableSizeB" isTop="0" :datas="StopData"></table-comp>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
  import mapComp from "views/mapComp"
  import tableComp from "views/table"
  import searchComp from "views/search"
  export default {
    name : "app",
      data(){
          return {
              layerParam : {
                  pageNumber:1,
                  pageSize : 10
              },
              title1 :"已检出号码",
              title2 : "已封停号码",
              centerStyle:{

              }
          }
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
     computed:{
         EngineData(){
             return this.$store.getters.getEngineData;
         },
         StopData(){
             return this.$store.getters.getStopData;
         },
         tableSizeT(){
             return this.$store.getters.getTableSizeTop;
         },
         tableSizeB(){
             return this.$store.getters.getTableSizeBottom;
         },
         layerData(){
             return this.$store.getters.getLayerData;
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

            let tableH = ((wanth * 0.33) - 50)  +"px";
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

        openLayer(){
            let me = this;

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
                        columns : [ [
                            {field:'cheatedUser',title:'疑似被诈骗用户',width:"140",align:'left',sortable:true,
                            },
                            {field:'evilNumber',title:'疑似恶意号码',width:"110",align:'left',sortable:true,
                            },
                            {field:'allTimes',title:'通话次数',width:"130",align:'left',sortable:true,
                            },
                            {field:'stopFlag',title:'封停状态',width:"100",align:'left',sortable:true,
                            },
                        ] ],
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
              me.openLayer();
          }

      })
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

</style>
