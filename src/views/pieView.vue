<template>
    <div :style="pieStyle"></div>
</template>
<script>
import Pie from "components/Pie"
export default  {
    name : "pie",
    props:{
        pieData:Array,
        pieStyle:Object
    },
    computed: {
        pieStyle(){
            if(this.pieObj){
                this.pieObj.resize()
            }
            return this.$store.getters.getPieSize;
        }
    },
    watch:{
        pieData:{
            deep:true,
            handler(val,oldval){
                if(this.pieData == undefined ){
                    this.pieData = [];
                }
                this.pieObj.render(this.pieData)
            }
        }
    },
    mounted(){
        this.pieObj = new Pie({
            el : this.$el,
            sub: 'fz',
        });
    }
}
</script>
<style scoped>
.pieInner-tmp{

}
.pieInner-tmp h2{
    color : #44c4f0 ;
    fontSize : 24px;
}

.pieInner-tmp ul{

}



</style>