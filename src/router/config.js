import Vue       from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app                          from '../App.vue'                                           // 根组件
import bottomNav                    from '../views/BottomNav.vue'                               // 底部导航
import discover                     from '../views/Discover.vue'                                // "发现" 页面
import houseResource                from '../views/HouseResource.vue'                           // "房源" 页面
import map                          from '../views/Map.vue'                                     // "地图" 页面
import service                      from '../views/Service.vue'                                 // "服务" 页面
// 关于艾迦办公
import aboutAPlus_router            from '../components/AboutAPlus/AboutAPlus_router.vue'       // '关于艾迦办公' - 路由模块
// 服务版块
import service_router               from '../components/Service/Service_router.vue'             // "服务" 页面 - 路由模块
import service_furniture_router     from '../components/Service/Service_furniture_router.vue'   // "服务" 页面 - '家具'路由模块
import research_router              from '../components/Service/Research/Research_router.vue'   // "服务" 页面 - '外出考察'路由模块
// 房源详情 ( 写字楼 / 联合办公 )
import OfficeBuilding_router        from '../components/Auto/OfficeBuilding_router.vue'         // "写字楼 ( 详情 )" - 路由模块
import CoWorking_router             from '../components/Auto/CoWorking_router.vue'              // "联合办公 ( 详情 )" - 路由模块

const router = new VueRouter({
    routes: [
        {
            path: 'app',
            components: {
                default: app
            }
        },
        {
            path: '/',
            name:'index',
            components: { default: app },
            children: [
                {
                    path: '/',
                    components: {
                        AppContent      : discover,
                        AppBottomNav    : bottomNav
                    }
                },
                {
                    path: '/discover',
                    components: {
                        AppContent      : discover,
                        AppBottomNav    : bottomNav
                    }
                },
                {
                    path: '/houseResource',
                    components: {
                        AppContent      : houseResource,
                        AppBottomNav    : bottomNav
                    }
                },
                {
                    path: '/map',
                    components: {
                        AppContent      : map,
                        AppBottomNav    : bottomNav
                    }
                },
                {
                    path: '/service',
                    components: {
                        AppContent      : service,
                        AppBottomNav    : bottomNav
                    }
                },
                {
                    path: '/aboutAPlus/:id',                                                     // '关于艾迦办公'等信息
                    components: {
                        AppContent      : aboutAPlus_router
                    }
                },
                {                                                                               // 因不需 底部按钮, 所以 设在2级路由嵌套
                    path: '/service/:id',
                    components: {
                        AppContent      : service_router
                    }
                },
                {                                                                               // 服务模块 - '家具'内容 渲染模版
                    path: '/service/furniture/:id',
                    components: {
                        AppContent      : service_furniture_router
                    }
                },
                {                                                                               // 服务模块 - '外出考察'内容 渲染模版
                    path: '/service/research/:id',
                    components: {
                        AppContent      : research_router
                    }
                },
                {                                                                               // "写字楼 ( 详情 )" - 路由模块
                    path: '/office-Building/:id',
                    components: {
                        AppContent      : OfficeBuilding_router
                    }
                },
                {                                                                               // "联合办公 ( 详情 )" - 路由模块
                    path: '/co-working/:id',
                    components: {
                        AppContent      : CoWorking_router
                    }
                }
            ]
        }
    ]
})

export default {
    router
}
