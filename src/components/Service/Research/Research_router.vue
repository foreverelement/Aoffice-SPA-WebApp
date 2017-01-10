<!-- 服务模块 - 3级外出考察详情页 -->
<template>
    <div id="service_research_router">
        <!-- 标题 组件 -->
        <mu-appbar>
            <!-- 返回'家居页面' -->
            <mu-icon-button icon='arrow_back' slot="left" @click="returnResearch()" />
            <h2> {{ title }} </h2>
            <mu-icon-button icon='sms' slot="right"/>
        </mu-appbar>
        <!-- 内容渲染 -->
    </div>
</template>

<script>
import      { mapActions, mapGetters } from 'vuex'
import      Title           from    '../../Auto/Title.vue'
const       components = { Title }

export default {
    data() {
        return {
            title:this.$route.params.id
        }
    },
    mounted: function() {
        this.addAppOnClick()                                                        // 添加App专用点击事件
        this.getResearchInfo()                                                      // 获取家具信息
    }
    ,methods: {
        // 目的: 进行交互
        ...mapActions([ 'getResearchInfo' ])                                       // 测试
        // 目的: 执行跳转 ( 返回 '家居页面' )
        ,returnResearch: () => {
            location.href='#/service/research'
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
    ,computed: mapGetters({ researchInfo: 'researchInfo' })
    ,components: components
}
</script>

<style lang="sass">
@import '../../../sass/main'

#service_research_router
</style>
