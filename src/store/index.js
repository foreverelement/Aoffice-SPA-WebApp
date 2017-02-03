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
    ,regionPointList: []                                // '地图' 初始数据( 地区时间 )
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
