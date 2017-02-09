// 百度地图View组件内的全局变量
let baiduMap = ( longitude, latitude ) => {
    const miniMap = new BMap.Map("mapView", {enableMapClick:false})            // 创建Map实例(关闭底图可点功能)
    const miniMapPoint = new BMap.Point( longitude, latitude)                  // 标点位置( cityCode坐标 )
    miniMap.centerAndZoom(miniMapPoint,11)                                     // 创建地图中心点,层级15级（并不显示标记）
    miniMap.addControl(new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_SMALL
    }))
};

let msg = 'AAAmsg'
