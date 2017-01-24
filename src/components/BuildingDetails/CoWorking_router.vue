<!-- 联合办公 ( 房源详情页 ) 模版页面 -->
<template>
    <div class="co-working_router">
        <!-- 加载动画 -->
        <CssLoading v-if="getCoWorkingInfo.judgeShow" />
        <!-- 当加载动画消失时 显示以下内容 -->
        <div v-else>
            <!---->
            <DBAppBar :AppBar_title = getCoWorkingInfo.buildingDetails.name />
            <Swiper :swiper_arr = getCoWorkingInfo.imgUrl_Arr />
            <div class="intro">
                <h2> {{ getCoWorkingInfo.buildingDetails.name }} </h2>
                <ul>
                    <li>
                        <span> 详细地址: </span>
                        <p class="origin"> {{ getCoWorkingInfo.buildingDetails.city }} </p>
                        <p> {{ getCoWorkingInfo.buildingDetails.reg }} </p>
                        <p class="end"> {{ getCoWorkingInfo.buildingDetails.road }} </p>
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
                        <p> {{ getCoWorkingInfo.buildingDetails.propertyCompany }} </p>
                    </li>
                    <li>
                        <span> 车位: </span>
                        <p> {{ getCoWorkingInfo.buildingDetails.parkingNum }} </p>
                    </li>
                </ul>
            </div>
            <!-- '联合办公'简介 -->
            <div class="contentBox">
                <Title :title_info = titleInfo />
                <p> {{ getCoWorkingInfo.buildingDetails.description }} </p>
            </div>
            <!-- 独立空间 -->
            <div class="contentBox buildingDetails--list">
                <Title :title_info = typeASearch />
                <ul>
                    <li v-for = "item in getCoWorkingInfo.typeASearch">
                        <!-- 小图片 -->
                        <div>
                            <img :src="item.imgUrl" class="listImg" >
                        </div>
                        <!-- 面积 -->
                        <p> {{ item.area }}m² </p>
                        <!-- 月 价格 -->
                        <p> <b> {{ item.priceMonth }} </b> <spsn>元/月</spsn></p>
                        <!-- 平方米 日 价格 -->
                        <p class="priceDay"> <b> {{ item.priceDay }} </b> <spsn>元/m²/日</spsn></p>
                        <!-- 工位 -->
                        <p> {{ item.seatCount }} 个工位</p>
                    </li>
                </ul>
            </div>
            <!-- 工位 -->
            <div class="contentBox buildingDetails--list">
                <Title :title_info = typeBSearch />
                <ul>
                    <li v-for = "item in getCoWorkingInfo.typeBSearch">
                        <!-- 小图片 -->
                        <div>
                            <img :src="item.imgUrl" class="listImg" >
                        </div>
                        <!-- 面积 -->
                        <p> {{ item.area }}m² </p>
                        <!-- 月 价格 -->
                        <p>
                            <b> {{ item.priceMonth }} </b>
                            <span>元/月</span>
                        </p>
                        <!-- 平方米 日 价格 -->
                        <p class="priceDay">
                            <b> {{ item.priceDay }} </b>
                            <span>元/m²/日</span>
                        </p>
                        <!-- 剩余工位 -->
                        <p> 剩余 {{ item.seatCount }} 个 </p>
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
            <!-- 所属 - 大厦 -->
            <div class="contentBox">
                <Title :title_info = affiliation />
                <Intro :buildingIntro_Arr=getCoWorkingInfo.buildingRelationList />
            </div>
            <!-- 大厦周边 -->
            <div class="contentBox">
                <Title :title_info = around />
                <Map :building_centrePoint = getCoWorkingInfo.buildingDetails />
            </div>
        </div>
    </div>
</template>
<script>
import  { mapActions, mapGetters }  from    'vuex'
import  DBAppBar                    from    './BuildingDetails_AppBar.vue'      // 通用头部
import  Intro                       from    './BuildingDetails_Intro.vue'       // Intro 信息介绍
import  CssLoading                  from    '../Auto/CssLoading_1.vue'          // 引入加载动画
import  Title                       from    '../Auto/Title.vue'                 // 引入标题
import  Swiper                      from    '../Discover/Swiper.vue'            // 引入轮播图
import  DetailsList                 from    './BuildingDetails_List.vue'        // 引入 独立空间 + 工位 的列表
import  Map                         from    './BuildingDetails_Map.vue'         // 引入 地图组件 ( 房源详情图 )

const   components = { DBAppBar, Intro, CssLoading, Title, Swiper, DetailsList, Map }

export default {
    data() {
        return {
            // title: this.$route.params.id
            // title: this.$store.state.coWorking.buildingDetails.name
            // ,
            titleInfo: {
                title: '联合办公'
                ,backgroundColor: '#FFF'
            }
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
        this.heightRevise()                         // 更改List 图片高度
    }
    ,methods:{
        // 目的: 通过ajax获取联合办公数据
        ...mapActions(['setCoWorkingInfo'])         // 执行异步
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
        getCoWorkingInfo: 'getCoWorkingInfo'
    })
    ,components: components
}
</script>
<style lang="sass">
@import '../../sass/main'

.co-working_router
    // 加载 通用 - 房源详情页 样式内容 ( Sass混合 )
    +auto--BuildingDetails
</style>
