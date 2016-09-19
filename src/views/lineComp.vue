<template>
    <div :style="lineStyle"></div>
</template>
<script>
import Line from "components/Line"
export default  {
    name : "line",
    props:{
        lineData:Array,
        lineStyle:Object
    },
    computed: {
        lineStyle(){
            if(this.lineObj){
                this.lineObj.resize()
            }
            return this.$store.getters.getLineSize;
        }
    },
    watch:{
        lineData:{
            deep:true,
            handler(val,oldval){
                if(this.lineData == undefined ){
                    this.lineData = [];
                }
                this.lineObj.render(this.lineData)
            }
        }
    },
    mounted(){
        this.lineObj = new Line({
            el : this.$el,
            sub: 'fzline',
        });
    }
}
</script>
<style >



</style>