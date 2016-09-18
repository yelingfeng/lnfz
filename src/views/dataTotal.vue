<template>
    <div id="dataTotal" :style="dtStyle">
        <p>今日：<span v-text="dtData.todayData"></span></p>
        <p>总计:<span v-text="dtData.totalData"></span></p>
        <p>电信:<span v-text="dtData.Telecom"></span></p>
        <p>联通:<span v-text="dtData.Unicom"></span></p>
        <p>移动:<span v-text="dtData.Mobile"></span></p>
    </div>
</template>

<script>
export default {
    name : 'dataTotal',
    props:['dtData'],
    data(){
        return {

        }
    },
    watch:{
        dtData:{
            deep:true,
            handler(val,oldval){
                //TODO
            }
        }
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


    }
}
</script>
<style scoped>
#dataTotal{
    color : #fff;
}

</style>