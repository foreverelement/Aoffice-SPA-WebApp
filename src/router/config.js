import Vue       from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import app              from '../App.vue'                                           // 根组件
import bottomNav        from '../views/BottomNav.vue'                               // 底部导航
import discover         from '../views/Discover.vue'                                // "发现" 页面
import houseResource    from '../views/HouseResource.vue'                           // "房源" 页面
import map              from '../views/Map.vue'                                     // "地图" 页面
import service          from '../views/Service.vue'                                 // "服务" 页面
// import user             from '../views/User.vue'                                 // "用户" 页面

// 服务版块
import service_router   from '../components/Service/Service_router.vue'             // "服务" 页面 - 路由模块

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
                    path: '/service',
                    components: {
                        AppContent      : service,
                        AppBottomNav    : bottomNav
                    }
                },
                // 因不需 底部按钮, 所以 设在2级路由嵌套
                {
                    path: '/service/:id',
                    components: {
                        AppContent      : service_router
                    }
                }
            ]
        }
    ]
})

export default {
    router
}
