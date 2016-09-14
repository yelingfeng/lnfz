<template>
    <div>
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" v-for="(item,index) in items" :class="{'active':isActived(index)}" @click="tabAction(item,index)"><a href="javascript:;">{{item.name}}</a></li>
        </ul>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>

export default{
    name:"tab",
    props:{
        items:Array,
    },
    data(){
        return {
            activeIndex:0
        }
    },
    methods:{
        isActived(index){
            return index === this.activeIndex
        },
        tabAction(item,index){
            this.activeIndex = index;
            item.clickAction()
        }
    }
}
</script>

<style scoped>
.nav-tabs {
    border:none;
}
.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover{
    box-shadow: inset 0px 0px 8px rgba(126, 220, 248,0.55);
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
</style>