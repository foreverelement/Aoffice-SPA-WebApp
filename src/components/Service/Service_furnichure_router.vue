<!-- 服务模块 - 3级家具详情页面 - 内容模版根据$router.id 来获取数据 -->
<template>
    <div id="service_furnichure_router">
        <!-- 标题 组件 -->
        <mu-appbar >
            <!-- 返回'家居页面' -->
            <mu-icon-button icon='arrow_back' slot="left" @click="returnFurnichure()"/>
            <h2> {{ title }} </h2>
            <mu-icon-button icon='sms' slot="right"/>
        </mu-appbar>

        <!-- 内容条件渲染 -->
        <Swiper :swiper_arr=bannerImg_Arr[0]  />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import  Swiper      from    '../Discover/Swiper.vue'     // 引入轮播组件
const   components = { Swiper }

export default {
    data() {
        return {
            title: this.$route.params.id
        }
    },
    methods: {
        // 目的: 执行跳转 ( 返回 '家居页面' )
        returnFurnichure: () => {
            location.href='#/service/furnichure'
        }
    },
    computed: mapGetters({ bannerImg_Arr: 'bannerImg_Arr' }),
    components: components
}
</script>

<style lang="sass?indentedSyntax">
@import '../../sass/main.sass'

#service_furnichure_router
    /* 设置MuseUI - App Bar样式 */
    .mu-paper-1
        top: 0 !important
        bottom: initial !important
        box-shadow: 0 1px 2px rgba(0,0,0,.117647), 0 1px 3px rgba(0,0,0,.117647) !important
        +bC($F)
        .mu-icon
            color: $badgeFont-color !important
        h2
            color: $badgeFont-color !important
            text-align: center
</style>
