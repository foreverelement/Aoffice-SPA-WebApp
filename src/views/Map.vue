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
                miniMap.centerAndZoom(miniMapPoint,11);                                     // 创建地图中心点,层级15级（并不显示标记）
                miniMap.addControl(new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_RIGHT,
                    type: BMAP_NAVIGATION_CONTROL_SMALL
                }));
                /* 地图覆盖物判断添加事件 —— 调用 */
                // 地图缩放监听
                const lastLevel
                miniMap.addEventListener("zoomstart",function(){
                    lastLevel = this.getZoom();
                })
                miniMap.addEventListener("zoomend", function(){
                    let zoomLevel = this.getZoom();     //　当前地图级别
                    if (zoomLevel >= 15){                                                           // 输出3级地图内容:详细覆盖
                        addBuilding(BuildingModel,17);
                        // console.log("输出3级地图内容:详细覆盖");
                    }else if (zoomLevel >= 14){
                        addRangeOverlay(businessCirclePoint,16);
                        // console.log("输出2级地图内容:商圈");                                      // 商圈自定义覆盖物
                    }else{
                        if (!lastLevel < 14) {
                            addRangeOverlay(RegionPoint,14);                                        // 输出行政区自定义覆盖物
                            // console.log("输出1级地图内容:行政区");
                        }
                    }
                });
                // 地图覆盖物判断添加事件 —— 声明常量 ( 行政区 + 商圈 + 具体覆盖物 )
                const buildingOverlayArr = []                                                       // 声明常量
                const addRangeOverlay = ( ObjGroup,setZoom ) => {                                   // 1级 + 2级 通用添加覆盖物事件
                    miniMap.clearOverlays()                                                         // 清理地图上面所有点
                    for (let i = 0; i < ObjGroup.length; i++) {
                        let arr = new Object()
                            arr = ObjGroup[i]
                        let code = arr.code,
                            url = arr.url,
                            text = arr.name + "<br />" + arr.resourceAmount + "套"                   // 拼接字符串
                        let zoom = setZoom                                                          // 获取地图层级
                        let RangeOverlay = new rangeOverlay(
                            new BMap.Point(arr.latitude,arr.longitude),text,code,url,zoom
                        )
                        miniMap.addOverlay(RangeOverlay)
                    }
                }
                const addBuilding = ( ObjGroup,setZoom ) => {
                    miniMap.clearOverlays()                                                         // 清理地图上面所有点
                    for (let i = 0; i < ObjGroup.length; i++) {
                        let buildingArr = new Object()
                            buildingArr = ObjGroup[i]
                        let zoom = setZoom                                                         // 获取地图层级
                        // 拼接属性文字内容
                        let text = "￥" + buildingArr.priceBeginning +  " 起",
                            mouseoverTxt = buildingArr.name + " " + buildingArr.resourceAmount + "套"
                        buildingOverlayArr[i] = BuildingOverlay = new buildingOverlay(
                            new BMap.Point(buildingArr.latitude,buildingArr.longitude),text,mouseoverTxt,buildingArr.code,i,zoom    // i = 序号
                        )
                        miniMap.addOverlay(BuildingOverlay)
                        buildingOverlayArr[i] = BuildingOverlay
                    }
                }
                // 测试运行(实际项目不使用 - 而是条件调用)
                addRangeOverlay()
                addBuilding()
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
