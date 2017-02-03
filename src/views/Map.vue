<!-- "地图"页面 -->
<template>
    <div id="map"></div>
</template>

<script>
export default {
    mounted: function () {
        this.setMap_height()
        this.asyncLoadMap()
        this.getRegionPointList()                                                           // 获取地图地区所有数据
        this.setBottomBtnState(2)
    },
    methods: {
        setMap_height: function(){
            // 判断浏览器高度
            const   windowHeight = window.innerHeight;                                      // 获取 当前窗口的高度
            const   bottomNav = document.getElementsByClassName('mu-paper')[0];             // 获取 底部导航元素
            const   bottomNav_height = bottomNav.offsetHeight;                              // 获取 底部导航高度
            let     map_height = windowHeight - bottomNav_height;                           // 计算 地图元素 高度
            const   objMap = document.getElementById('map');                                // 获取 Map元素
            objMap.style.height = map_height + 'px';                                        // 设置 Map元素的高度
        }
        ,asyncLoadMap: function() {
            setTimeout(() => {
                const miniMap = new BMap.Map("map", {enableMapClick:false});                // 创建Map实例(关闭底图可点功能)
                const miniMapPoint = new BMap.Point(120.378522,36.113888);                   // 标点位置( 青岛中心 )
                miniMap.centerAndZoom(miniMapPoint,10);                                     // 创建地图中心点,层级15级（并不显示标记）
                miniMap.addControl(new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_RIGHT,
                    type: BMAP_NAVIGATION_CONTROL_SMALL
                }));

                // 地图覆盖物判断添加事件 ( 行政区 + 商圈 + 具体覆盖物 )

                // ObjGroup,setZoom 参数
                const addRangeOverlay = () => {
                    /* map.clearOverlays();                                                        // 清理地图上面所有点
                    for (let i = 0; i < ObjGroup.length; i++) {
                        let arr = new Object();
                        arr = ObjGroup[i];
                        let code = arr.code,
                            url = arr.url,
                            text = arr.name + "<br />" + arr.resourceAmount + "套";              // 拼接字符串
                        let zoom = setZoom;                                                      // 获取地图层级
                        let RangeOverlay = new rangeOverlay(
                            new BMap.Point(arr.latitude,arr.longitude),text,code,url,zoom
                        );
                        map.addOverlay(RangeOverlay);
                    } */
                    console.log(miniMap)
                }
                // 测试运行
                addRangeOverlay();
            },50)
        }
        // 目的: 获取地图地区所有数据
        ,getRegionPointList() {
            this.$store.dispatch({
                type: 'getRegionPointList',
                cityCode: this.$store.state.city.cityCode                                   // 查询当前城市地图数据
            })
        }
        // 地图覆盖物判断添加事件 ( 行政区 + 商圈 + 具体覆盖物 )
        ,addOverlay() { }
        // 改变底部按钮状态样式
        ,setBottomBtnState(state) {
            let bottomBtn_Arr = document.getElementsByClassName("mu-buttom-item")
            // 清空状态
            for( let i = 0; i < bottomBtn_Arr.length; i++ ) {
                bottomBtn_Arr[i].setAttribute("class","mu-buttom-item router-link-active")
            }
            bottomBtn_Arr[state].setAttribute("class","mu-buttom-item router-link-active mu-bottom-item-active")        // 改变"发现"按钮的状态
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../sass/main'

#map
</style>
