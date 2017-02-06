<!-- "地图"页面 -->
<template>
    <div id="map"></div>
</template>

<script>
import  { mapActions, mapGetters }  from    'vuex'
export default {
    mounted: function () {
        this.setMap_height()
        this.setRegionPointList()                                                           // 获取行政区数据
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
                const miniMapPoint = new BMap.Point(120.292284,36.126949);                  // 标点位置( 青岛中心 )
                miniMap.centerAndZoom(miniMapPoint,11);                                     // 创建地图中心点,层级15级（并不显示标记）
                miniMap.addControl(new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_RIGHT,
                    type: BMAP_NAVIGATION_CONTROL_SMALL
                }));
                /* 地图覆盖物判断添加事件 —— 调用 */
                // 保存接口返回值
                let administrativeRegion_Arr    = [];
                    administrativeRegion_Arr    = this.$store.state.regionPointList;                    // 行政区
                let businessRegion_Arr          = [];
                    businessRegion_Arr          = this.$store.state.BCPointList;                        // 商圈
                let buildingPoint_Arr           = [];
                    buildingPoint_Arr           = this.$store.state.buildingPointList;                  // 办公楼
                // 地图缩放监听
                let lastLevel;
                miniMap.addEventListener("zoomstart",function(){
                    lastLevel = this.getZoom();
                });
                miniMap.addEventListener("zoomend", function(){
                    let zoomLevel = this.getZoom();     //　当前地图级别
                    if (zoomLevel >= 15){                                                           // 输出3级地图内容:详细覆盖
                        console.log("输出3级地图内容:详细覆盖");
                        addBuilding(buildingPoint_Arr,17);
                    }else if (zoomLevel >= 14){
                        console.log("输出2级地图内容:商圈");                                         // 商圈自定义覆盖物
                        addRangeOverlay(businessRegion_Arr,16);
                    }else if (zoomLevel >= 12){
                        console.log("输出1级地图内容:行政区( 覆盖物放大 )");                          // 商圈自定义覆盖物
                        addRangeOverlay(administrativeRegion_Arr,14);
                    }else{
                        if (!lastLevel < 12) {
                            console.log("输出1级地图内容:行政区( 覆盖物缩小 )");
                            addRangeOverlay(administrativeRegion_Arr,14);                           // 输出行政区自定义覆盖物
                            setRangeOverlayStyle()                                                  // 改变范围覆盖物尺寸( 只有初始级别要缩小 )
                        }
                    }
                });
                // 地图覆盖物判断添加事件 —— 声明常量 ( 行政区 + 商圈 + 具体覆盖物 )
                const buildingOverlayArr = []                                                       // 声明常量
                const addRangeOverlay = ( ObjGroup,setZoom ) => {                                     // 1级 + 2级 通用添加覆盖物事件
                    miniMap.clearOverlays()                                                         // 清理地图上面所有点
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
                }
                rangeOverlay.prototype = new BMap.Overlay();
                rangeOverlay.prototype.initialize = function(map){
                    this._map = map;
                    var div = this._div = document.createElement("div");
                    div.setAttribute("id",this._code);
                    div.setAttribute("class","range-overlay--big");
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
                    // 我也不知道为什么 需要兑换一下数值才可以输出( 如果不换,坐标会统一到西非那里.. )
                    var pointA = {}
                    pointA.lat = this._point.lng
                    pointA.lng = this._point.lat
                    var pixel = map.pointToOverlayPixel(pointA)
                    this._div.style.left = pixel.x - 40 + "px"
                    this._div.style.top  = pixel.y - 40 + "px"
                }
                // 3级 详细覆盖物 事件( 建筑物点覆盖物 )
                const addBuilding = ( ObjGroup,setZoom ) => {
                    miniMap.clearOverlays()                                                         // 清理地图上面所有点
                    for(let i=0; i < ObjGroup.length; i++) {
                        let buildingArr  = new Object();
                            buildingArr  = ObjGroup[i];
                        // 办公楼 详细数据 保存变量
                        let code    = buildingArr.code                                              // 保存code, 用于跳转页面
                            ,imgUrl = buildingArr.imgUrl                                            // 保存图片地址, 点击自定义覆盖物 弹出框内图片
                            ,zoom   = setZoom;
                        // 执行添加坐标覆盖物事件
                        addBuilding_RangeOverlay( buildingArr.longitude, buildingArr.latitude, code, zoom )
                    }
                };
                // 写字楼覆盖物 —— 3级使用
                let addBuilding_RangeOverlay = (longitude, latitude, code, zoom) => {
                    // 信息自定义标识
                    let pointImg_Obj    = require('../assets/images/map_select_postion_copy.png');                          // 通过webpack引入图片对象
                    let building_Icon   = new BMap.Icon(pointImg_Obj, new BMap.Size(40,40));                                // 自定义标注样式( 加入前面图片对象 )
                    let building_Marker = new BMap.Marker(new BMap.Point(longitude,latitude),{icon: building_Icon});        // 创建信息自定义标识(将样式加入)
                    // 添加建筑物 坐标覆盖物
                    miniMap.addOverlay(building_Marker);
                    building_Marker.addEventListener("click",function(e){
                        /*
                            let p = e.target;
                            let point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                            let infoWindow = new BMap.InfoWindow(infoContent,opts);     // 创建信息窗口对象( 暂无信息 )
                            building_Marker.openInfoWindow(infoWindow,point);           // 开启信息窗口
                        */
                        console.log(code)
                    });
                }

                const setRangeOverlayStyle = () => {                                                    // 改变1级范围覆盖物的样式( 当层级小于12级时 执行这个事件 )
                    for(let i=0; i<administrativeRegion_Arr.length; i++){
                        let rangeOverlay_Obj = document.getElementById(administrativeRegion_Arr[i].code)
                        rangeOverlay_Obj.setAttribute('class','range-overlay')
                    }
                }
                addRangeOverlay(administrativeRegion_Arr,14)                                            // 先执行一次覆盖物添加( 运行小覆盖物 , 层级默认为11级 )
                setRangeOverlayStyle()                                                                  // 改变范围覆盖物尺寸( 只有初始级别要缩小 )
                (function(){
                    let cpy_Obj = document.getElementsByClassName('BMap_cpyCtrl')[0]                    // 获得百度地图左下标志
                        cpy_Obj.setAttribute('style','display: none')                                   // 隐藏百度地图左下角标志
                }())
            },50)
        }
        // 目的: 获取行政区数据
        ,setRegionPointList() {
            this.$store.dispatch({
                type: 'setRegionPointList',
                cityCode: this.$store.state.city.cityCode                                   // 查询当前城市 —— 行政区数据
            })
        }
        // 目的: 获取商圈数据
        ,setBCPointList() {
            this.$store.dispatch({
                type: 'setBCPointList',
                cityCode: this.$store.state.city.cityCode                                   // 查询当前城市 —— 商圈数据
            })
        }
        // 目的: 获取写字楼数据
        ,setBuildingPointList() {
            this.$store.dispatch({
                type: 'setBuildingPointList',
                cityCode: this.$store.state.city.cityCode                                   // 查询当前城市 —— 写字楼数据
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
            this.setBCPointList()                                                               // 获取商圈数据
            this.setBuildingPointList()                                                         // 获取写字楼数据
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../sass/main'

#map
</style>
