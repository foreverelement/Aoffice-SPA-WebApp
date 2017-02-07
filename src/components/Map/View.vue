<!-- "地图"页面 - 百度地图视图组件( 接收经过筛选后的表现数据 ) -->
<template>
    <div id="mapView"></div>
</template>

<script>
export default {
    watch: {
        // 如果 行政区数据 发生改变，这个函数就会运行
        getRegionPointList: function () {
            this.asyncLoadMap()
            this.setBCPointList()                                                               // 获取商圈数据
            this.setBuildingPointList()                                                         // 获取写字楼数据
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../sass/main'

</style>
