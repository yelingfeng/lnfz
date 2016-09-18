<template>
    <div id="dataTotal" :style="dtStyle"></div>
</template>

<script>
export default {
    name : 'dataTotal',
    data(){
        return {

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


</style>