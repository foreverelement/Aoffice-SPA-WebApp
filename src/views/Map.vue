<!-- "地图"页面 -->
<template>
    <div id="map">
        <!-- 上部导航 -->
        <div id="map__topNav">
            <Auto_AppBar class="Auto_AppBar"/>
            <DropDownMenu class="DropDownMenu" />
        </div>
        <!--<div id="map"></div>-->
    </div>
</template>

<script>
import  { mapActions, mapGetters }  from    'vuex'
import  Auto_AppBar                 from    '../components/Auto/Auto_AppBar.vue'    // 全局通用 AppBar组件
import  DropDownMenu                from    '../components/Map/DropDownMenu.vue'    // '地图'专用下拉菜单
const   components  = { Auto_AppBar, DropDownMenu }

export default {
    mounted: function () {
        this.setBottomBtnState(2)
    },
    methods: {
        // 目的: 改变底部按钮状态样式
        setBottomBtnState(state) {
            let bottomBtn_Arr = document.getElementsByClassName("mu-buttom-item")
            for( let i = 0; i < bottomBtn_Arr.length; i++ ) {                                                           // 清空状态
                bottomBtn_Arr[i].setAttribute("class","mu-buttom-item router-link-active")
            }
            bottomBtn_Arr[state].setAttribute("class","mu-buttom-item router-link-active mu-bottom-item-active")        // 改变"发现"按钮的状态
        }
    }
    ,components: components
}
</script>

<style lang="sass" scoped>
@import '../sass/main'

#map
    #map__topNav
        .Auto_AppBar,.DropDownMenu                              // appBar 与 下拉菜单设置样式 并排( 抵消顶部重叠样式 )
            @extend %REL
</style>
