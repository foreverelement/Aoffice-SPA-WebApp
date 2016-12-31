miniMap = new BMap.Map("map", {enableMapClick:false});                                                  // 创建Map实例(关闭底图可点功能)
var miniMapPoint = new BMap.Point(120.384459,36.071709);                                                // 标点位置(华润大厦)
// var miniMapIcon = new BMap.Icon("./dist/images/ico-pin-orange-24-px@2x.png", new BMap.Size(65,80));  // 自定义标注样式
// var miniMapCustomMarker = new BMap.Marker(miniMapPoint,{icon:miniMapIcon});                          // 创建自定义标注(将样式加入)
miniMap.centerAndZoom(miniMapPoint,15);                                                                 // 创建地图中心点,层级15级（并不显示标记）
// miniMap.disableDragging();                                                                           //禁止拖拽
miniMap.addControl(new BMap.NavigationControl({
    anchor: BMAP_ANCHOR_TOP_RIGHT,
    type: BMAP_NAVIGATION_CONTROL_SMALL
}));                                                                                                    // 添加 缩放 与 平移控件

// 判断浏览器高度
const windowHeight = window.innerHeight;                                    // 获取 当前窗口的高度
const bottomNav = document.getElementsByClassName('mu-paper')[0];           // 获取 底部导航元素
const bottomNav_height = bottomNav.offsetHeight;                            // 获取 底部导航高度
let map_height = windowHeight - bottomNav_height;                           // 地图元素 高度
console.log(map_height);
