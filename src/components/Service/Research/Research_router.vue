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
        <div class="research--box">
            <img :src="researchInfo.appPic" />
            <h3> {{ researchInfo.name }} </h3>
            <p> {{ researchInfo.address }} </p>
        </div>
        <!-- 地点介绍 -->
        <div class="research--box">
            <Title :title_info = introduced_title />
            <p> {{ researchInfo.description }} </p>
        </div>
        <!-- 考察流程 -->
        <div class="research--box">
            <Title :title_info = flow_title />
            <ul class="flow--list">
                <li v-for = "item in researchInfo.IPList">
                    <p> <b> {{ item.descriptionIP }} </b> </p>
                    <p> {{ item.timeLenght }} 分钟 </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import      { mapActions, mapGetters } from 'vuex'
import      Title           from    '../../Auto/Title.vue'
const       components = { Title }

export default {
    data() {
        return {
            title:this.$route.params.id,
            introduced_title: {
                title: '地点介绍',
                backgroundColor: '#FFF'
            },
            flow_title: {
                title: '考察流程',
                backgroundColor: '#FFF'
            }
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
    +bC($base-color)
    /* 设置MuseUI - App Bar样式 */
    +auto--AppBar
    // 统一box样式
    .research--box
        +auto--contentBox($autoMargin,rgba($title-color,.7),$text-size,rgba($title-color,.7),$text-size)
        +bC($F)
        >img
            @extend %imgCover
            +REM(margin-bottom,$autoMargin)
    // 考察流程
    .flow--list li
        +REM(padding-top,$autoMargin/2)
        +REM(padding-bottom,$autoMargin/2)
        overflow: hidden
        @extend %auto--borderBottomSoild                    // 通用修饰下划线
        >p
            @extend %dib
            &:first-child
                width: 85%
                float: left
            &:last-child
                width: 15%
                float: right
            >b
                font-weight: normal
                color: $title-color
</style>
