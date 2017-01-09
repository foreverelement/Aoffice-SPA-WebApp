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
            |- Furniture.vue           ( "服务" - 条件渲染："办公家具"内容 )
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

- [ ] **Aoffice-SPA-WebApp-Vue待完成内容**
    - [ ] 家具详情 - 接口数据
    - [ ] 外出考察详情 - 接口数据
    - [ ] 关于艾迦办公 详情页面
    - [ ] 办公电脑 - 内容图片修改( 静态页 )
    - [ ] 员工培训( 静态页面 )
    - [ ] 委托找房( 表单提交 )
    - [ ] 后期将modules 分出
- [ ] **Aoffice-SPA-WebApp-Vue性能优化**
    - [ ] 可复用组件改为`render`组件形式
    - [ ] 优化项目结构列表
    - [ ] 提出`content--box`盒子作为通用内容盒子,减少样式描述
    - [ ] 整理`Sass`样式表内容,删除多余代码
    - [ ] 减少HTML内容重复描述样式
    - [ ] 增加`Gulp`构建流,优化静态图片( 进行无损压缩,避免资源加载过慢问题 )
    - [ ] 测试Router动态加载组件方案,如果性能优于单一JS加载速度,那么全部拆为动态加载
    - [ ] 增加Router切换动画,避免加载延迟空白

***

## API接口目录
* 获取家具详情
    > http://192.168.1.250:8082/api/es/furniture

* 外出考察详情
    > http://192.168.1.250:8082/api/es/getInvestigate

***
> test Service_furniture_router.vue
```js
<!-- 服务模块 - 3级家具详情页面 - 内容模版根据$router.id 来获取数据 -->
<template>
    <div id="service_furniture_router">
        <!-- 标题 组件 -->
        <mu-appbar >
            <!-- 返回'家居页面' -->
            <mu-icon-button icon='arrow_back' slot="left" @click="returnFurniture()"/>
            <h2> {{ title }} </h2>
            <mu-icon-button icon='sms' slot="right"/>
        </mu-appbar>
        <!-- 内容条件渲染 -->
        <Swiper :swiper_arr=bannerImg_Arr[0]  />
    </div>
</template>

<script>
import { mapGetters, mapActions }   from 'vuex'
import  Swiper          from    '../Discover/Swiper.vue'     // 引入轮播组件
const   components = { Swiper }

export default {
    data() {
        return {
            title: this.$route.params.id
        }
    },
    mounted: function() {
        this.addState()                                                 // 测试
        // 获取通过路由传递过来的序号值
        // const furnitureNO = this.$route.params.id
        // console.log( furnitureNO ) // 获取到序号值
        this.getFurnitureNO( this.$route.params.id )
        // 获取 Vuex store拿到的数据 - 测试 暂时使用首页轮播数据
        this.mapGetters({ bannerImg_Arr: 'bannerImg_Arr' })
    },
    methods: {
        // 目的: 执行跳转 ( 返回 '家居页面' )
        returnFurniture: () => {
            location.href='#/service/furniture'
        }
        // ,mapActions([ 'getFurnitureNO' ])
        // 目的: 进行异步请求 —— 请求'家具'数据
        ,function: () => {
            mapActions([ 'addState' ])                                  // 测试
        }
    }
    ,components: components
}
</script>

```
