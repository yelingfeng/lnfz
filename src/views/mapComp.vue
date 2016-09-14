<template>
    <div :style="mapstyle"></div>
</template>
<script>
import Map from "components/Map"
export default  {
    name : "map",
    props:{
        mapType:String,
        mapData:Array
    },
    computed: {
        mapstyle(){
            if(this.lnMap){
                this.lnMap.resize()
            }
            return this.$store.getters.getMapSize;
        }
    },
    watch:{
        mapData:{
            deep:true,
            handler(val,oldval){
                if(this.mapData == undefined ){
                    this.mapData = [];
                }
                this.lnMap.render(this.mapData)
            }
        }
    },
    mounted(){
        let maptype = "liaoning";
        let sub = "base";
        if(this.mapType == "china"){
            maptype = "china";
            sub = "chinaAttact";
        }
        this.lnMap = new Map({
            el : this.$el,
            sub: sub,
            props: {
                mapOption: {
                    mapType: maptype
                }
            }
        });
    }
}
</script>
<style>

</style>