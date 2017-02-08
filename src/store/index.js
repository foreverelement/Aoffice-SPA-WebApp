import  Vue                 from 'vue'
import  Vuex                from 'vuex'
import  * as getters        from './getters'
import  * as actions        from './actions'
import  * as mutations      from './mutations'
// "服务" - "家具"详情 模块交互

Vue.use(Vuex)
// 状态树
const state = {
    city: {                                             // 查询城市
        cityCode: '3702'
    }
    ,loadingState: {
        judgeShow: true
    }                                                   // 加载动画状态
    ,bannerImg_Arr: []                                  // "发现" - banner图片数组
    ,hotBuildingList_Arr: []                            // "发现" - "热门房源"内容
    ,furnitureInfo: {
        appPic: '',
        code: '',
        description: '',
        furnitureSizeList: [],
        imgUrl: [],
        name: '',
        price: 0,
        type: '',
        judgeShow: true
    }
    ,researchInfo: {                                    // "考察" -详情页数据
        IPList: [],
        address: '',
        appPic: '',
        description: '',
        name: '',
        judgeShow: true
    }
    ,officeBuilding: {                                  // "办公楼" -详情
        judgeShow: true,
        buildingRelationList_judgeShow: true
    }
    ,coWorking: {                                       // "联合办公" - 详情
        judgeShow: true,
        buildingRelationList_judgeShow: true,
        nameInfo: '0'
    }
    ,regionPointList: []                                        // '地图' 初始数据( 获取行政区数据 )
    ,BCPointList: []                                            // '地图' 商圈数据
    ,buildingPointList: []                                      // '地图' 写字楼数据
    ,mapView: {
         typeRegionPointList: []                                // 经过检索后的行政区数据( 类型判断 )
    }
    // 检索状态集( 下拉菜单 / 层级改变 都可以修改这个检索集合 )
    ,searchValue: {
        // 地图层级检索条件
        cityCode:               ''                                      // 检索城市code
        ,indexLevel:            'administrative'                        // 行政区: administrative; 商圈: business; 具体: building
        ,regionCode:            ''                                      // 行政区编号
        ,businessCircleCode:    ''                                      // 商圈编号
        // 下拉菜单检索条件
        ,btype:                 'A'                                     // 检索类型( 只有A / B 选项 )
        ,priceDayMin:           '0'                                     // 价格( 天 )最小值
        ,priceDayMax:           ''                                      // 价格( 天 )最大值
        ,priceMonthMin:         '0'                                     // 价格( 月 )最小值
        ,priceMonthMax:         ''                                      // 价格( 月 )最大值
        ,decoration:            ''                                      // 装修( A:豪装; B:精装; C:简装; D:毛坯 )
        // 经过检索后的渲染对象
        ,administrative_Arr:    ''                                      // 行政区数组
        ,business_Arr:          ''                                      // 商圈数组
        ,building_Arr:          ''                                      // 办公楼数组
    }
    ,searchMapRequest_Arr: []                                           // 当发生地图检索请求时,向内推入一个空对象( 触发watch观察事件 )
}
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})
if (module.hot) {
    module.hot.accept([
        './getters',
        './actions',
        './mutations',
    ], () => {
        store.hotUpdate({
            getters: require('./getters'),
            actions: require('./actions'),
            mutations: require('./mutations'),
        })
    })
}

export default store
