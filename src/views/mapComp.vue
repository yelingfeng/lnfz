<template>
    <div class="mapBox" id="mapLN" :style="mapstyle"></div>
</template>
<script>
import Map from "components/Map"
export default  {
    name : "map",
    computed: {
        mapData(){
            return this.$store.getters.getMapData;
        },
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
                this.lnMap.render(this.mapData)
            }
        }
    },
    mounted(){
        this.lnMap = new Map({
            el : document.querySelector("#mapLN"),
            sub: "base",
            props: {
                mapOption: {
                    mapType: 'liaoning'
                }
            }
        });
    }
}
</script>
<style>

</style>