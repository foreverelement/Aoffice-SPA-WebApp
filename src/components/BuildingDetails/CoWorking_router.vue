<!-- 联合办公 ( 房源详情页 ) 模版页面 -->
<template>
    <div class="co-working_router">
        <!-- 加载动画 -->
        <CssLoading v-if="getCoWorkingInfo.judgeShow" />
        <!-- 当加载动画消失时 显示以下内容 -->
        <div v-else>
            <DBAppBar :AppBar_title = title />
            <Swiper :swiper_arr = getCoWorkingInfo.imgUrl_Arr />
            <div class="coWorking--box">
                <h2> {{ getCoWorkingInfo.buildingDetails.name }} </h2>
                <ul>
                    <li>
                        <span> 详细地址: </span>
                        <p> {{ getCoWorkingInfo.buildingDetails.city }} </p>
                        <p> {{ getCoWorkingInfo.buildingDetails.reg }} </p>
                        <p> {{ getCoWorkingInfo.buildingDetails.road }} </p>
                    </li>
                    <li>
                        <span> 独立空间: </span>
                        <p> <b> {{ getCoWorkingInfo.buildingDetails.amountA }} 套 </b> </p>
                    </li>
                    <li>
                        <span> 工位数量: </span>
                        <p> <b> {{ getCoWorkingInfo.buildingDetails.amountB }} 个 </b> </p>
                    </li>
                    <li>
                        <span> 物业: </span>
                        <p> <b> {{ getCoWorkingInfo.buildingDetails.propertyCompany }} </b> </p>
                    </li>
                    <li>
                        <span> 车位: </span>
                        <p> <b> {{ getCoWorkingInfo.buildingDetails.parkingNum }} </b> </p>
                    </li>
                </ul>
            </div>
            <!-- '联合办公'简介 -->
            <div class="coWorking--box">
                <!--<Title :title_info = titleInfo />-->
                <p> {{ getCoWorkingInfo.buildingDetails.description }} </p>
            </div>
            <!-- 独立空间 -->
            <div class="coWorking--box">
                <Title :title_info = typeASearch />
            </div>
            <!-- 工位 -->
            <div class="coWorking--box">
                <Title :title_info = typeBSearch />
            </div>
            <!-- 立刻预约 -->
            <div class="coWorking--box">
                <Title :title_info = reserve />
            </div>
            <!-- 所属大厦 -->
            <div class="coWorking--box">
                <Title :title_info = affiliation />
            </div>
            <!-- 大厦周边 -->
            <div class="coWorking--box">
                <Title :title_info = around />
            </div>
        </div>
    </div>
</template>
<script>
import  { mapActions, mapGetters } from 'vuex'
import  DBAppBar    from    './BuildingDetails_AppBar.vue'      // 通用头部
import  CssLoading  from    '../Auto/CssLoading_1.vue'          // 引入加载动画
import  Title       from    '../Auto/Title.vue'                 // 引入标题
import  Swiper      from    '../Discover/Swiper.vue'            // 引入轮播图

const   components = { DBAppBar, CssLoading, Title, Swiper }

export default {
    data() {
        return {
            title: this.$route.params.id
            // ,titleInfo: {
            //     title: this.getCoWorkingInfo.buildingDetails.name + '简介'
            //     ,backgroundColor: '#FFF'
            // }
            ,typeASearch: {
                title: '独立空间'
                ,backgroundColor: '#FFF'
            }
            ,typeBSearch: {
                title: '工位'
                ,backgroundColor: '#FFF'
            }
            ,reserve: {
                title: '立刻预订'
                ,backgroundColor: '#FFF'
            }
            ,affiliation: {
                title: '所属大厦'
                ,backgroundColor: '#FFF'
            }
            ,around: {
                title: '大厦周边'
                ,backgroundColor: '#FFF'
            }
        }
    }
    ,mounted: function() {
        this.setCoWorkingInfo()                     // 获取store内 联合办公数据
    }
    ,methods:{
        // 目的: 通过ajax获取联合办公数据
        ...mapActions(['setCoWorkingInfo'])         // 执行异步
    }
    ,computed: mapGetters({
        getCoWorkingInfo: 'getCoWorkingInfo'
    })
    ,components: components
}
</script>
<style lang="sass">
@import '../../sass/main'

.co-working_router
</style>
