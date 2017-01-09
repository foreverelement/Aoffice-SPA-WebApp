import  Vue                 from 'vue'
import  Vuex                from 'vuex'
import  * as getters        from './getters'
import  * as actions        from './actions'
import  * as mutations      from './mutations'
// "服务" - "家具"详情 模块交互

Vue.use(Vuex)
// 状态树
const state = {
    bannerImg_Arr: []                                       // "发现" - banner图片数组
    ,hotBuildingList_Arr: []                                // "发现" - "热门房源"内容
    ,furnitureInfo: {}
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
