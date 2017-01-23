<!-- 办公楼 / 联合办公 - 大厦周边地图 -->
<template>
    <div class="buildingDetails_around">
        <div id="buildingDetails--map" data-point-longitude=" {{ building_centrePoint.longitude }} "  data-point-latitude=" {{ building_centrePoint.latitude }} "  ></div>
        <!-- 标题文字 -->
        <div class="around__title">
            <div class="title--flexbox">
                <p> {{ building_centrePoint.name }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['building_centrePoint']
    ,mounted: function() {
        this.setMap_height()
        this.asyncLoadMap()
    }
    ,methods: {
        setMap_height: function(){
            const mapObj                    = document.getElementById('buildingDetails--map')               // 获取对象
            const mapWidth                  = mapObj.offsetWidth                                            // 获取对象的宽度
            mapObj.style.height             = mapWidth + "px"                                               // 设置宽度为高度
            mapObj.style.backgroundColor    = "rgb(255,94,27)"                                              // 设置默认背景色
        }
        // 后期此处可用Promise来写
        ,asyncLoadMap: function(){
            // 不能立刻执行,因为ajax内的数据还没有塞入,所以会是空值
            setTimeout(() => {
                // 百度地图API功能
                const buildingMap           = new BMap.Map("buildingDetails--map")
                const buildingMap_Point     = new BMap.Point(120.384459,36.071709)
                const buildingMap_Icon      = new BMap.Icon("http://www.aplusoffice.cn/images/resourceMap/ico-pin-orange-24-px@2x.png", new BMap.Size(50,50))
                const buildingMap_marker    = new BMap.Marker(buildingMap_Point,{icon:buildingMap_Icon})                                                       // 创建自定义标注(将样式加入)
                buildingMap.centerAndZoom(buildingMap_Point, 16)
                buildingMap.addOverlay(buildingMap_marker)                                                                                                     // 将标注添加到地图中
                buildingMap.disableDragging()                                                                                                                  // 禁止拖拽
                buildingMap_marker.setAnimation(BMAP_ANIMATION_BOUNCE)                                                                                         // 跳动的动画

                // 百度原生信息窗口
                // const sContent ="文字"
                // const infoWindow = new BMap.InfoWindow(sContent)                                                                                   // 创建信息窗口对象
                // const content_point = new BMap.Point(120.384459,36.072709)
                // buildingMap.openInfoWindow(infoWindow,content_point)                                                                                       //开启信息窗口
            }, 2000)
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../sass/main'

.buildingDetails_around
    position: relative
    // 百度地图
    #buildingDetails--map
    // “周边” 标题文字
    .around__title
        position: absolute
        top: 28%
        left: 26%
        +REM(padding,$autoMargin/2)
        width: 50%
        +bC($F)
        .title--flexbox
            @extend %flexCenter
            width: 100%
            >p
                +REM(font-size,$text-size)
                color: $theme-color
</style>
