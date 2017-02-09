<!-- "地图"页面 - 百度地图视图组件( 接收经过筛选后的表现数据 ) -->
<template>
    <div id="mapView"></div>
</template>

<script>
import  { mapActions, mapGetters }  from    'vuex'
export default {
    data() {
        return {
            lat: ''
            ,functionObj: {}
            ,loadingBaiduMap_Obj: {}
        }
    }
    ,mounted: function() {

    }
    ,methods: {
        // 目的: 异步加载百度地图
        asyncLoadMap: function() {
            /*
                const city_Longitude = this.$store.state.city.cityLongitude     // 经度
                const city_Latitude  = this.$store.state.city.cityLatitude      // 纬度
                const miniMap = new BMap.Map("mapView", {enableMapClick:false})            // 创建Map实例(关闭底图可点功能)
                const miniMapPoint = new BMap.Point(city_Longitude,city_Latitude)                  // 标点位置( 青岛中心 )
                miniMap.centerAndZoom(miniMapPoint,11)                                     // 创建地图中心点,层级15级（并不显示标记）
                miniMap.addControl(new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_RIGHT,
                    type: BMAP_NAVIGATION_CONTROL_SMALL
                }))
                this.$data.lat = city_Latitude
            */
        }
        ,testFun: function() {
            // console.log(this.$data.lat)
            // console.log(this.$data.functionObj)

            let testAAA = this.$data.functionObj = (msg) => {
                console.log('这是' + msg + '个函数')
            }
            this.$data.functionObj(100);
        }
        // 目的: 加载百度地图事件( 后期不再二次加载 )
        ,loadingBaiduMap: function() {
            this.$data.loadingBaiduMap_Obj = ( longitude, latitude ) => {
                const miniMap = new BMap.Map("mapView", {enableMapClick:false})            // 创建Map实例(关闭底图可点功能)
                const miniMapPoint = new BMap.Point( longitude, latitude)                  // 标点位置( 青岛中心 )
                miniMap.centerAndZoom(miniMapPoint,11)                                     // 创建地图中心点,层级15级（并不显示标记）
                miniMap.addControl(new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_RIGHT,
                    type: BMAP_NAVIGATION_CONTROL_SMALL
                }))
            }
            let city_Longitude = this.$store.state.city.cityLongitude     // 经度
                ,city_Latitude  = this.$store.state.city.cityLatitude      // 纬度
            this.$data.loadingBaiduMap_Obj( city_Longitude, city_Latitude ) // 执行
        }
    }
    ,computed: mapGetters({
        getSearchRequest: 'getSearchRequest'
    })
    ,watch: {
        // 当 '请求记录' 数组发生改变时, 执行刷新页面
        getSearchRequest: function () {
            this.asyncLoadMap()  // 异步加载百度地图
            this.testFun()       // 测试
            // 正式测试
            this.loadingBaiduMap() // 加载百度地图( 固定变量 )
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../sass/main'

</style>
