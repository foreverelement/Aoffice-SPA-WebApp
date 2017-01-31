<template>
    <div id="aboutAPlus_router">
        <!-- 标题 组件 -->
        <mu-appbar >
            <!--<i class="material-icons"></i>-->
            <mu-icon-button icon='keyboard_arrow_left' slot="left" @click="returnService()"/>
            <h2> {{ title }} </h2>
            <mu-icon-button icon='sms' slot="right"/>
        </mu-appbar>
        <!-- 内容条件渲染 -->
        <NewFeatures             v-if = "this.$route.params.id === 'newFeatures'" />
        <FAQ                v-else-if = "this.$route.params.id === 'FAQ'" />
        <AboutUs            v-else-if = "this.$route.params.id === 'aboutUs'" />
        <Cooperation        v-else-if = "this.$route.params.id === 'cooperation'" />
        <PrivacyPolicy      v-else-if = "this.$route.params.id === 'privacyPolicy'" />
        <CopyrightInfo      v-else />
    </div>
</template>

<script>
import  NewFeatures             from    './NewFeatures.vue'
import  FAQ                     from    './FAQ.vue'
import  AboutUs                 from    './AboutUs.vue'
import  Cooperation             from    './Cooperation.vue'
import  PrivacyPolicy           from    './PrivacyPolicy.vue'
import  CopyrightInfo           from    './CopyrightInfo.vue'

const   components = { NewFeatures,FAQ,AboutUs,Cooperation,PrivacyPolicy,CopyrightInfo }

export default {
    data() {
        return {
            title: ''
        }
    },
    mounted: function () {
        this.addAppOnClick()                                                 // 添加App专用点击事件
        this.setTitle( this.$route.params.id )
    },
    methods: {
        // 目的: 改变标题名称
        setTitle: function (message) {
            if( message == 'newFeatures' ) {
                return this.title = '新功能介绍'
            } else if( message == 'FAQ' ) {
                return this.title = '常见问题'
            } else if( message == 'aboutUs' ) {
                return this.title = '关于我们'
            } else if( message == 'cooperation' ) {
                return this.title = '商务合作'
            } else if( message == 'privacyPolicy' ) {
                return this.title = '隐私政策'
            } else {
                return this.title = '版权信息'
            }
        },
        // 目的: 执行跳转
        returnService: () => {
            location.href = '#/'                                                    // 返回首页
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
    },
    components: components
}

</script>

<style lang="sass">
@import '../../sass/main.sass'

#aboutAPlus_router
    /* 设置MuseUI - App Bar样式 */
    +auto--AppBar
    min-height: 100vh
    +bC($base-color)
</style>
