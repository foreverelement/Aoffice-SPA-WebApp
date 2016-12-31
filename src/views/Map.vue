<!-- "地图"页面 -->
<template>
    <div id="map"></div>
</template>

<script>
export default {
    mounted: function () {
        this.setMap_height();
        this.asyncLoadMap();
    },
    methods: {
        setMap_height: function(){
            // 判断浏览器高度
            const windowHeight = window.innerHeight;                                    // 获取 当前窗口的高度
            const bottomNav = document.getElementsByClassName('mu-paper')[0];           // 获取 底部导航元素
            const bottomNav_height = bottomNav.offsetHeight;                            // 获取 底部导航高度
            let map_height = windowHeight - bottomNav_height;                           // 计算 地图元素 高度
            const objMap = document.getElementById('map');                              // 获取 Map元素
            objMap.style.height = map_height + 'px';                                    // 设置 Map元素的高度
        },
        asyncLoadMap: function() {
            setTimeout(() => {
                const miniMap = new BMap.Map("map", {enableMapClick:false});                                                  // 创建Map实例(关闭底图可点功能)
                const miniMapPoint = new BMap.Point(120.384459,36.071709);                                                // 标点位置(华润大厦)
                // var miniMapIcon = new BMap.Icon("./dist/images/ico-pin-orange-24-px@2x.png", new BMap.Size(65,80));  // 自定义标注样式
                // var miniMapCustomMarker = new BMap.Marker(miniMapPoint,{icon:miniMapIcon});                          // 创建自定义标注(将样式加入)
                miniMap.centerAndZoom(miniMapPoint,15);                                                                 // 创建地图中心点,层级15级（并不显示标记）
                // miniMap.disableDragging();                                                                           //禁止拖拽
                miniMap.addControl(new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_RIGHT,
                    type: BMAP_NAVIGATION_CONTROL_SMALL
                }));
            }, 50)
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

#map

</style>
