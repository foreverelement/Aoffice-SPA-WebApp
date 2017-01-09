<!-- 服务模块 - 3级家具详情页面 - 内容模版根据$router.id 来获取数据 -->
<template>
    <div id="service_furnichure_router">
        <!-- 标题 组件 -->
        <mu-appbar >
            <!-- 返回'家居页面' -->
            <mu-icon-button icon='arrow_back' slot="left" @click="returnFurnichure()" />

            </mu-icon-button>
            <h2> {{ title }} </h2>
            <mu-icon-button icon='sms' slot="right"/>
        </mu-appbar>
        <!-- 内容条件渲染 -->
        <Swiper :swiper_arr=furnichureInfo_Img_Arr  />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import  Swiper      from    '../Discover/Swiper.vue'     // 引入轮播组件
const   components = { Swiper }

export default {
    data() {
        return {
            title: this.$route.params.id
        }
    },
    mounted: function() {
        this.addAppOnClick()                                                 // 添加App专用点击事件
        this.getFurnichureInfo()                                             // 获取家具信息
    }
    ,methods: {
        // 目的: 进行交互
        ...mapActions([ 'getFurnichureInfo' ])                                 // 测试
        // 目的: 执行跳转 ( 返回 '家居页面' )
        ,returnFurnichure: () => {
            location.href='#/service/furnichure'
        }
        // 目的: 向两个按钮添加App反馈事件( 返回 / 对话窗口 )
        ,addAppOnClick: () => {
            setTimeout(() => {
                // console.log('执行计时器事件')
                const btnLeft   = document.getElementsByClassName('left')[0]        // 向左侧的返回按钮添加 returnBtn()事件
                const btnRight  = document.getElementsByClassName('right')[0]       // 向右侧的对话按钮添加 dialogueBtn() 事件
                btnLeft.setAttribute("onClick", "returnBtn()")
                btnRight.setAttribute("onClick", "dialogueBtn()")
            },1000)
        }
    }
    ,computed: mapGetters({ furnichureInfo_Img_Arr: 'furnichureInfo_Img_Arr' })
    ,components: components
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
