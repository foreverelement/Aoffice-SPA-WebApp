<!-- 办公楼 ( 房源详情页 ) 模版页面 -->
<template>
    <div class="office-building_router">
        <!-- 加载动画 -->
        <CssLoading v-if="getOfficeBuildingInfo.judgeShow" />
        <!-- 当加载动画消失时 显示以下内容 -->
        <div v-else>
            <DBAppBar :AppBar_title = title />
            <Swiper :swiper_arr = getOfficeBuildingInfo.imgUrl_Arr />
            <!-- 大厦详情 -->
            <div class="intro">
                <h2> {{ getOfficeBuildingInfo.buildingDetails.name }} </h2>
                <ul>
                    <li>
                        <span> 详细地址: </span>
                        <p class="origin"> {{ getOfficeBuildingInfo.buildingDetails.city }} </p>
                        <p> {{ getOfficeBuildingInfo.buildingDetails.reg }} </p>
                        <p class="end"> {{ getOfficeBuildingInfo.buildingDetails.road }} </p>
                    </li>
                    <li>
                        <span> 价格区间: </span>
                        <p> <b> {{ getOfficeBuildingInfo.buildingDetails.priceDayMin }} ~ {{ getOfficeBuildingInfo.buildingDetails.priceDayMax }} 元/m²/天 </b> </p>
                    </li>
                    <li>
                        <span> 物业: </span>
                        <p> {{ getOfficeBuildingInfo.buildingDetails.propertyCompany }} </p>
                    </li>
                    <li>
                        <span> 层高: </span>
                        <p> {{ getOfficeBuildingInfo.buildingDetails.floorHeight }} </p>
                    </li>
                    <li>
                        <span> 车位: </span>
                        <p> {{ getOfficeBuildingInfo.buildingDetails.parkingNum }} </p>
                    </li>
                </ul>
            </div>
            <!-- 简介 -->
            <div class="contentBox">
                <Title :title_info = titleInfo />
                <p> {{ getOfficeBuildingInfo.buildingDetails.description }} </p>
            </div>
            <!-- 待租房源 -->
            <div class="contentBox">
                <Title :title_info = status12Search />
                <ul>
                    <li v-for = "item in getOfficeBuildingInfo.status12Search">
                        <!-- 小图片 -->
                        <img :src="item.imgUrl">
                        <!-- 面积 -->
                        <p> {{ item.area }}m² </p>
                        <!-- 月 价格 -->
                        <p> <b> {{ item.priceMonth }} </b> 元 / 月 </p>
                        <!-- 平方米 日 价格 -->
                        <p> <b> {{ item.priceDay }} </b> 元 / m² / 日 </p>
                        <!-- 待租状态 -->
                        <p> {{ item.statusStr }} </p>
                        <!-- 装修类型 -->
                        <p> {{ item.decorationStr }} </p>
                    </li>
                </ul>
            </div>
            <!-- 待售房源 -->
            <div class="contentBox">
                <Title :title_info = status3Search />
                <ul>
                    <li v-for = "item in getOfficeBuildingInfo.status3Search">
                        <!-- 小图片 -->
                        <img :src="item.imgUrl">
                        <!-- 面积 -->
                        <p> {{ item.area }}m² </p>
                        <!-- 售价 -->
                        <p> <b> {{ item.priceSale }} </b> 万元 / 套 </p>
                        <!-- 层高 -->
                        <p> {{ item.floorStr }} </p>
                        <!-- 待售状态( 属性名与 '待租房源' 相同 ) -->
                        <p> {{ item.statusStr }} </p>
                        <!-- 装修类型 -->
                        <p> {{ item.decorationStr }} </p>
                    </li>
                </ul>
            </div>
            <!-- 立即预约 -->
            <div class="contentBox">
                <Title :title_info = reserve />
            </div>
            <!-- 所属 - 联合办公 -->
            <div class="contentBox">
                <Title :title_info = coWorking />
            </div>
            <!-- 大厦周边 -->
            <div class="contentBox">
                <Title :title_info = around />
            </div>
        </div>
    </div>
</template>

<script>
import  { mapActions, mapGetters } from 'vuex'
import  DBAppBar            from    './BuildingDetails_AppBar.vue'      // 通用头部
import  CssLoading          from    '../Auto/CssLoading_1.vue'          // 引入加载动画
import  Title               from    '../Auto/Title.vue'                 // 引入标题
import  Swiper              from    '../Discover/Swiper.vue'            // 引入轮播图
import  DetailsList         from    './BuildingDetails_List.vue'        // 引入 独立空间 + 工位 的列表
const   components = { DBAppBar, CssLoading, Title, Swiper, DetailsList }

export default {
    data() {
        return {
            title: this.$route.params.id
            ,titleInfo: {
                title: '大厦简介'
                ,backgroundColor: '#FFF'
            }
            ,status12Search: {
                title: '待租房源'
                ,backgroundColor: '#FFF'
            }
            ,status3Search: {
                title: '待售房源'
                ,backgroundColor: '#FFF'
            }
            ,reserve: {
                title: '立刻预订'
                ,backgroundColor: '#FFF'
            }
            ,coWorking: {
                title: '联合办公'
                ,backgroundColor: '#FFF'
            }
            ,around: {
                title: '大厦周边'
                ,backgroundColor: '#FFF'
            }
        }
    }
    ,mounted: function() {
        this.setOfficeBuildingInfo()                    // 获取store内 联合办公数据
    }
    ,methods:{
        // 目的: 通过ajax获取联合办公数据
        ...mapActions(['setOfficeBuildingInfo'])        // 执行异步
    }
    ,computed: mapGetters({
        getOfficeBuildingInfo: 'getOfficeBuildingInfo'
    })
    ,components: components
}
</script>

<style lang="sass">
@import '../../sass/main'

.office-building_router
    // 加载 通用 - 房源详情页 样式内容 ( Sass混合 )
    +auto--BuildingDetails
</style>
