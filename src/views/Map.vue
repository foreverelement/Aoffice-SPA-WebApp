<!-- "地图"页面 -->
<template>
    <div id="map"></div>
</template>

<script>
import  { mapActions, mapGetters }  from    'vuex'
export default {
    mounted: function () {
        this.setMap_height()
        // this.asyncLoadMap()
        this.setRegionPointList()                                                           // 获取地图地区所有数据
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
                let administrativeRegion_Arr = [];
                administrativeRegion_Arr = this.$store.state.regionPointList;
                // console.dir(administrativeRegion_Arr);
                let lastLevel;
                miniMap.addEventListener("zoomstart",function(){
                    lastLevel = this.getZoom();
                });
                miniMap.addEventListener("zoomend", function(){
                    let zoomLevel = this.getZoom();     //　当前地图级别
                    if (zoomLevel >= 15){                                                           // 输出3级地图内容:详细覆盖
                        console.log("输出3级地图内容:详细覆盖");
                        addBuilding(BuildingModel,17);
                    }else if (zoomLevel >= 14){
                        console.log("输出2级地图内容:商圈");                                         // 商圈自定义覆盖物
                        addRangeOverlay(businessCirclePoint,16);
                    }else{
                        if (!lastLevel < 14) {
                            console.log("输出1级地图内容:行政区");
                            addRangeOverlay(administrativeRegion_Arr,14);                           // 输出行政区自定义覆盖物
                        }
                    }
                });


                // 地图覆盖物判断添加事件 —— 声明常量 ( 行政区 + 商圈 + 具体覆盖物 )
                const buildingOverlayArr = []                                                       // 声明常量


                const addRangeOverlay = ( ObjGroup,setZoom ) => {                                     // 1级 + 2级 通用添加覆盖物事件
                    miniMap.clearOverlays()                                                         // 清理地图上面所有点
                    /*
                    for(let i=0; i<ObjGroup.length; i++){
                        let arr  = new Object();
                            arr  = ObjGroup[i];
                        let code    = arr.code
                            ,text   = arr.name + "<br />" + arr.resourceAmount + "套"                   // 拼接字符串
                            ,zoom   = setZoom;
                        let RangeOverlay = new rangeOverlay(
                            new BMap.Point(arr.latitude,arr.longitude),text,code,zoom
                        );
                        console.log('次数'+ i)
                        miniMap.addOverlay(RangeOverlay);
                    }
                    */
                    for(let i=0; i<ObjGroup.length; i++) {
                        let arr  = new Object();
                            arr  = ObjGroup[i];
                        let code    = arr.code
                            ,text   = arr.name + "<br />" + arr.resourceAmount + "套"                   // 拼接字符串
                            ,zoom   = setZoom;
                        let RangeOverlay = new rangeOverlay(
                            new BMap.Point(arr.latitude,arr.longitude),text,code,zoom
                        );
                        // console.log('次数'+ i);
                        miniMap.addOverlay(RangeOverlay);
                    }
                };

                // 行政区＋商圈范围覆盖物——１.2级通用
                function rangeOverlay(point,text,code,zoom){
                    this._point = point;
                    this._text  = text;
                    this._code  = code;
                    this._zoom  = zoom;
                    // 测试
                    // console.dir(this._point)
                }

                rangeOverlay.prototype = new BMap.Overlay();
                rangeOverlay.prototype.initialize = function(map){
                    this._map = map;
                    var div = this._div = document.createElement("div");
                    div.setAttribute("id",this._code);
                    div.setAttribute("class","range-overlay");
                    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
                    // 保存code
                    var code = this._code,   //　区域代码
                        point = this._point,
                        zoom = this._zoom;
                    div.onclick = function businessCirclePoint(){
                        // Ajax上传code，并改变中心点
                        map.setZoom(zoom);      // 根据坐标点进行跳转,改变层级
                        // console.log("跳转链接" + url);
                    }
                    var span = this._span = document.createElement("span");
                    div.appendChild(span);
                    div.getElementsByTagName("span")[0].innerHTML =  this._text;
                    div.onmouseover = function(){ this.style.zIndex = "9"; }
                    div.onmouseout = function(){ this.style.zIndex = "1"; }
                    map.getPanes().labelPane.appendChild(div);
                    return div;
                }
                rangeOverlay.prototype.draw = function(){
                    var map = this._map;

                    var pointA = {}
                    pointA.lat = this._point.lng
                    //console.log(pointA.lat)
                    pointA.lng = this._point.lat
                    //console.log(pointA.lng)
                    console.log(pointA)
                    var pixel = map.pointToOverlayPixel(pointA);
                    console.log(pixel)

                    var pointA = {}
                        pointA.lat = this._point.lng
                        //console.log(pointA.lat)
                        pointA.lng = this._point.lat
                        //console.log(pointA.lng)
                    var testA = map.pointToOverlayPixel(pointA)

                    var pointB = {}
                        pointB.lat = 36.114399
                        //console.log(pointB.lat)
                        pointB.lng = 120.474431
                        //console.log(pointB.lng)
                    var testB = map.pointToOverlayPixel(pointB)

                    var pointC = {}
                        pointC.lat = 36.150804
                        pointC.lng = 120.439543
                    var testC = map.pointToOverlayPixel(pointC)


                    // console.log(this._point);
                    // console.log(pixel)


                    //console.dir(testA)
                    //console.dir(testB)
                    //console.dir(testC)

                    this._div.style.left = pixel.x - 30 + "px";
                    this._div.style.top  = pixel.y - 30 + "px";
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
                };
            },50)
        }
        // 目的: 获取地图地区所有数据
        ,setRegionPointList() {
            this.$store.dispatch({
                type: 'setRegionPointList',
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
    ,computed: mapGetters({
        getRegionPointList: 'getRegionPointList'
    })
    ,watch: {
        // 如果 question 发生改变，这个函数就会运行
        getRegionPointList: function () {
            this.asyncLoadMap()
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../sass/main'

#map

.range-overlay
    position: absolute
    background-color: #FF5E1B
    color: #FFF
    padding: 2px 2px
    line-height: 18px
    white-space: nowrap
    cursor: pointer
    display: flex
    justify-content: center
    align-items: center
    font-size: 14px
    font-weight: bold
    width: 100px
    height: 100px
    border-radius: 50%
</style>
