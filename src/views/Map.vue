<!-- "地图"页面 -->
<template>
    <div id="map">
        <!-- 上部导航 -->
        <div id="map__topNav">
            <Auto_AppBar class="Auto_AppBar"/>
            <DropDownMenu class="DropDownMenu" />
            <MapView />
        </div>
    </div>
</template>

<script>
import  { mapActions, mapGetters }  from    'vuex'
import  Auto_AppBar                 from    '../components/Auto/Auto_AppBar.vue'    // 全局通用 AppBar组件
import  DropDownMenu                from    '../components/Map/DropDownMenu.vue'    // '地图'专用下拉菜单
import  MapView                     from    '../components/Map/View.vue'            // '地图'视图渲染部分
const   components  = { Auto_AppBar, DropDownMenu, MapView }

export default {
    mounted: function () {
        this.setViewStyle_height()
        this.setBottomBtnState(2)
    },
    methods: {
        // 目的: 改变'地图'view视图 组件的高度, 在组件内直接渲染百度地图即可
        setViewStyle_height() {
            let windowScreen_height   = this.$store.state.deviceInfo.device_height                         // 设备高度
                ,auto__AppBar_height  = document.getElementsByClassName('auto__AppBar')[0].offsetHeight
                ,dropDownMenu_height  = document.getElementById('map_dropDownMenu').offsetHeight
                ,bottomNav_height     = document.getElementById('bottomNav').offsetHeight
            let mapView_height        = windowScreen_height - ( auto__AppBar_height + dropDownMenu_height + bottomNav_height )
                ,mapView_Obj          = document.getElementById('mapView')
            mapView_Obj.setAttribute('style','height:' + mapView_height + 'px' )                           // 设置mapView组件的高度
        }
        // 目的: 改变底部按钮状态样式
        ,setBottomBtnState(state) {
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
