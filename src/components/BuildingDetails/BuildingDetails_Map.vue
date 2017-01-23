<!-- 办公楼 / 联合办公 - 大厦周边地图 -->
<template>
    <div id="buildingDetails--map"></div>
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
            const buildingMap               = new BMap.Map("buildingDetails--map", {enableMapClick:false});                             // 创建Map实例(关闭底图可点功能)
            const buildingMap_Point         = new BMap.Point(120.384459,36.071709);                                                     // 标点位置(华润大厦)
            const buildingMap_Icon          = new BMap.Icon("./dist/images/ico-pin-orange-24-px@2x.png", new BMap.Size(65,80));         // 自定义标注样式
            const buildingMap_CustomMarker  = new BMap.Marker(buildingMap_Point,{icon:buildingMap_Icon});                               // 创建自定义标注(将样式加入)
            buildingMap.centerAndZoom(buildingMap_Point,15);                                                                            // 创建地图中心点,层级15级（并不显示标记）
            buildingMap.disableDragging();                                                                                              // 禁止拖拽
            buildingMap.addControl(new BMap.NavigationControl({
                anchor: BMAP_ANCHOR_TOP_RIGHT,
                type: BMAP_NAVIGATION_CONTROL_SMALL
            }));
        }
        ,asyncLoadMap: function(){

        }
    }
}
</script>

<style lang="sass" scoped>

</style>
