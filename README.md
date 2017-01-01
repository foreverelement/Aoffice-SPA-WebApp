# A+office-SPA-WebApp-Vue制作(重置版)

> 本页面需要在服务器环境下通过域名访问,勿直接浏览静态页面

### 使用技术:
| 技术名称        | 作用   |  版本  |
| --------   | -----:  | :----:  |
| Vuejs     | 框架 |   2.6.0     |
| Vuex        |  状态管理   |   2.1.1   |
| Vue-router        |    路由管理    |  2.1.1  |
| Axios        |    交互处理   |  0.15.3  |
| Sass (node-sass)       |    样式预处理器    |  4.1.1  |
| Webpack        |    模块打包    |  1.13.2  |
| Babel        |    ES6转译ES5    |  6.0.0  |
| Yarn        |    模块依赖安装    |  0.17.6  |

## Components Structure / 组件结构说明:

```bash
App.vue ( 根节点 )
    |
    |- Discover.vue                     ( "发现" )
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
    |- HouseResource.vue                ( "房源" )
        |
        |- BuildingList.vue             ( 通用楼盘组件 —— "全部房源" )
    |
    |- Map.vue                          ( "地图" )
    |
    |- Service.vue                      ( "服务" )
        |
        |- Service_router.vue           ( "服务" - 路由页面 [ 上侧 通用标题组件; 下侧内容 根据  $route.params.id  传递来的ID值进行条件渲染  ] )
            |
            |- FindProperties.vue       ( "服务" - 条件渲染: "委托找房"内容 )
            |
            |- PutInProperties.vue      ( "服务" - 条件渲染："投放房源"内容 )
            |
            |- Furnichure.vue           ( "服务" - 条件渲染："办公家具"内容 )
            |
            |- Decoration.vue           ( "服务" - 条件渲染："办公装修"内容 )
            |
            |- Research.vue             ( "服务" - 条件渲染："外出考察"内容 )
            |
            |- Training.vue             ( "服务" - 条件渲染："员工培训"内容 —— 静态页 )
            |
            |- Computer.vue             ( "服务" - 条件渲染："办公电脑"内容 —— 静态页 )
    |
    |- 404.vue                          ( "404" )
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
