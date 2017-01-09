import  Vue                 from 'vue'
import  Vuex                from 'vuex'
import  * as getters        from './getters'
import  * as actions        from './actions'
import  * as mutations      from './mutations'
// "服务" - "家具"详情 模块交互
import furnichureInfoAPI    from './furnichureInfo/actions'

Vue.use(Vuex)
// 状态树
const state = {
    bannerImg_Arr: []                                       // "发现" - banner图片数组
    ,hotBuildingList_Arr: []                                // "发现" - "热门房源"内容
    ,furnichureInfo_Img_Arr: []                                 // "服务" - "家具"详情内容
    ,furnichureInfo: {}
}
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    // 模块部分
    furnichureInfoAPI
})
if (module.hot) {
    module.hot.accept([
        './getters',
        './actions',
        './mutations',
        // 模块部分
        './furnichureInfo/actions'
    ], () => {
        store.hotUpdate({
            getters: require('./getters'),
            actions: require('./actions'),
            mutations: require('./mutations'),
            // 模块部分
            furnichureInfoAPI: require('./furnichureInfo/actions')
        })
    })
}

export default store
