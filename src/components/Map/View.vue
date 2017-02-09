<!-- "地图"页面 - 百度地图视图组件( 接收经过筛选后的表现数据 ) -->
<template>
    <div id="mapView"></div>
</template>

<script>
import  { mapActions, mapGetters }  from    'vuex'
export default {
    data() {
        return {
            indexLevel_const : ''  // 一个层级常量: 第一次将默认状态保存进来; 然后用于比较当前层级是否发生变化( 发生变化: 将最新的值存入 / 未发生变化: 无处理 )
        }
    }
    ,mounted: function() {
        this.firstSaveIndexLevel()
    }
    ,methods: {
        // 目的: 第一次将默认状态保存进来
        firstSaveIndexLevel: function() {
            this.$data.indexLevel_const = this.$store.state.searchValue.indexLevel  // 保存初次层级
            // console.log(this.$data.indexLevel_const)
        }
        // 目的: 加载百度地图事件( 后期不再二次加载 )
        ,loadingBaiduMap: function() {
            let renderMap = ( longitude, latitude ) => {
                const miniMap = new BMap.Map("mapView", {enableMapClick:false})            // 创建Map实例(关闭底图可点功能)
                const miniMapPoint = new BMap.Point( longitude, latitude)                  // 标点位置( 青岛中心 )
                miniMap.centerAndZoom(miniMapPoint,11)                                     // 创建地图中心点,层级15级（并不显示标记）
                miniMap.addControl(new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_RIGHT
                    ,type: BMAP_NAVIGATION_CONTROL_SMALL
                }))
            }
            let city_Longitude = this.$store.state.city.cityLongitude                       // 经度
                ,city_Latitude  = this.$store.state.city.cityLatitude                       // 纬度
            renderMap( city_Longitude, city_Latitude )                                      // 执行
        }
    }
    ,computed: mapGetters({
        getSearchRequest: 'getSearchRequest'
    })
    ,watch: {
        // 当 '请求记录' 数组发生改变时, 执行刷新页面
        getSearchRequest: function () {

            // 还要保留层级级别状态 用于请求( 已层级等级为先, 然后判断类型 )
            let indexLevel = this.$store.state.searchValue.indexLevel   // 层级
                ,btypeState = this.$store.state.searchValue.btype       // 类型
                ,requestLength = this.$store.state.searchMapRequest_Arr.length // 判断是否是第一次加载
            // 在这里进行层级比较
            // indexLevel == this.$data.indexLevel_const
            if ( requestLength == 1 ) {
                console.log('初次加载')
                // 在此处判断一下 如果层级改变 渲染页面; 如果层级未发生改变 不渲染页面;
                this.loadingBaiduMap()
            } else if( indexLevel != this.$data.indexLevel_const ) {
                console.log('发生层级改变, 重新渲染地图')
                this.loadingBaiduMap()
            } else {
                console.log('层级未发生改变, 地图不进行渲染')
            }
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../sass/main'

</style>
