# A+office-SPA-WebApp-Vue制作(重置版)

> 本页面需要在服务器环境下通过域名访问,勿直接浏览静态页面
>
> 框架基于Vue 2
>
> 二次开发时建议安装Editor插件(大部分IDE都支持的插件)统一编辑格式



### 使用技术:
* Vuejs           框架
* Vuex            状态管理
* Vue-router      路由管理
* Axios           交互处理
* Sass            样式预处理器
* Webpack         模块打包
* Babel           ES6转译ES5工具
* Yarn            模块依赖安装



## Components Structure / 组件结构说明:

```bash
App.vue ( 根节点 )
    |
    |- Discover.vue                     ( "发现"页面 )
        |
        |- Swiper.vue                   ( Banner轮播组件 )
        |
        |- EnterpriseService.vue        ( "企业服务"组件 )
            |
            |- Title.vue                ( 通用标题组件 —— "企业服务" )
            |
            |- EnterpriseService_box    ( 通用 "企业服务"组件 —— 内容盒子 )
        |
        |- Title.vue                    ( 通用标题组件 —— "热门房源" )
        |
        |- BuildingList.vue             ( 通用楼盘组件 —— "热门房源" )
    |
    |- HouseResource.vue                ( "房源"页面 )
        |
        |- BuildingList.vue             ( 通用楼盘组件 —— "全部房源" )
    |
    |- Map.vue                          ( "地图"页面 )
    |
    |- Service.vue                      ( "服务"页面 )
    |
    |- 404.vue                          ( "404"页面 )
```

## Build Setup / 开发流程

``` bash
# install dependencies/拉取项目,在项目路径下执行
# 国内环境建议使用cnpm install
npm install

# *推荐Yarn
yarn install

# serve with hot reload at localhost:8080
# npm安装依赖后,运行node服务器,打开 localhost:80 预览 (已运行热更新功能)
npm run dev

# build for production with minification
# 当修改代码后,需要手动打包发布时,运行npm run build命令进行打包
npm run build
```

***

### UI组件库将 使用 [Muse UI](https://museui.github.io/#/index)

### 当制作多页面时,将引入`路由` [vue-router 2](http://router.vuejs.org/zh-cn/) 来制作SPA单页面应用

***

## 测试机器: iPhone 6s

## 测试浏览器: Chrome/Safari/FireFox/微信
