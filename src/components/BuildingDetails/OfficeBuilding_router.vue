<!-- 办公楼 ( 房源详情页 ) 模版页面 -->
<template>
    <div class="office-building_router">
        <!-- 加载动画 -->
        <CssLoading v-if="getOfficeBuildingInfo.judgeShow" />
        <!-- 当加载动画消失时 显示以下内容 -->
        <div v-else>
            <DBAppBar :AppBar_title = title />
            <p> 办公楼 </p>
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
</style>
