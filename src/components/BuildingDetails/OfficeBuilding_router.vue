<!-- 办公楼 ( 房源详情页 ) 模版页面 -->
<template>
    <div class="office-building_router">
        <!-- 加载动画 -->
        <CssLoading v-if="getOfficeBuildingInfo.judgeShow" />
        <!-- 当加载动画消失时 显示以下内容 -->
        <div v-else>
            <DBAppBar :AppBar_title = getOfficeBuildingInfo.buildingDetails.name />
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
            <div class="contentBox buildingDetails--list">
                <Title :title_info = status12Search />
                <ul>
                    <li v-for = "item in getOfficeBuildingInfo.status12Search">
                        <!-- 小图片 -->
                        <div>
                            <img :src="item.imgUrl" class="listImg" >
                        </div>
                        <!-- 面积 -->
                        <p> {{ item.area }}m² </p>
                        <!-- 月 价格 -->
                        <p class="priceMonth"> <b> {{ item.priceMonth }} </b> <spsn>元/月</spsn></p>
                        <!-- 平方米 日 价格 -->
                        <p class="priceDay"> <b> {{ item.priceDay }} </b><spsn>元/m²/日</spsn></p>
                        <!-- 待租状态 -->
                        <!--<p> {{ item.statusStr }} </p>-->
                        <!-- 装修类型 -->
                        <p class="decorationStr"> {{ item.decorationStr }} </p>
                    </li>
                </ul>
            </div>
            <!-- 待售房源 -->
            <div class="contentBox buildingDetails--list">
                <Title :title_info = status3Search />
                <ul>
                    <li v-for = "item in getOfficeBuildingInfo.status3Search">
                        <!-- 小图片 -->
                        <div>
                            <img :src="item.imgUrl" class="listImg" >
                        </div>
                        <!-- 面积 -->
                        <p> {{ item.area }}m² </p>
                        <!-- 售价 -->
                        <p class="priceDay"> <b> {{ item.priceSale }} </b> <spsn>万元/套</spsn> </p>
                        <!-- 层高 -->
                        <p> {{ item.floorStr }} </p>
                        <!-- 待售状态( 属性名与 '待租房源' 相同 ) -->
                        <!--<p> {{ item.statusStr }} </p>-->
                        <!-- 装修类型 -->
                        <p> {{ item.decorationStr }} </p>
                    </li>
                </ul>
            </div>
            <!-- 立即预约 -->
            <div class="contentBox">
                <Title :title_info = reserve />
                <mu-icon slot="left" value="person"/> <mu-text-field label="姓名" labelFloat/><br/>
                <mu-icon slot="left" value="phone"/> <mu-text-field label="手机号码" labelFloat/><br/>
                <mu-icon slot="left" value="vpn key"/>
                <mu-raised-button class="demo-raised-button" label="发送验证码" icon="send" primary/>
            </div>
            <!-- 所属 - 联合办公 -->
            <div class="contentBox">
                <Title :title_info = coWorking />
                <Intro :buildingIntro_Arr = getOfficeBuildingInfo.buildingRelationList />
            </div>
            <!-- 大厦周边 -->
            <div class="contentBox">
                <Title :title_info = around />
                <Map :building_centrePoint = getOfficeBuildingInfo.buildingDetails />
            </div>
        </div>
    </div>
</template>

<script>
import  { mapActions, mapGetters } from 'vuex'
import  DBAppBar            from    './BuildingDetails_AppBar.vue'      // 通用头部
import  Intro               from    './BuildingDetails_Intro.vue'       // Intro 信息介绍
import  CssLoading          from    '../Auto/CssLoading_1.vue'          // 引入加载动画
import  Title               from    '../Auto/Title.vue'                 // 引入标题
import  Swiper              from    '../Discover/Swiper.vue'            // 引入轮播图
import  DetailsList         from    './BuildingDetails_List.vue'        // 引入 独立空间 + 工位 的列表
import  Map                         from    './BuildingDetails_Map.vue'         // 引入 地图组件 ( 房源详情图 )

const   components = { DBAppBar, Intro, CssLoading, Title, Swiper, DetailsList, Map }

export default {
    data() {
        return {
            titleInfo: {
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
        this.heightRevise()                             // 更改List 图片高度
    }
    ,methods:{
        // 目的: 通过ajax获取联合办公数据
        ...mapActions(['setOfficeBuildingInfo'])        // 执行异步
        // 目的: 通过读取图片的宽度，将List 图片的高度设为相同尺寸.保持比例为 1:1
        ,heightRevise: function(){
            // 不能立刻执行,因为ajax内的数据还没有塞入,所以会是空值
            setTimeout(() => {
                let img_Arr     = document.getElementsByClassName('listImg')
                let img_width   = img_Arr[0].offsetWidth                            // 只需要获取第一个对象的宽度即可
                for (let i = 0; i < img_Arr.length; i++){
                    img_Arr[i].style.height = img_width + 'px'                    // 修改高度
                }
            }, 4500)
        }
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
