<template>
    <div id="service_router">
        <!-- 标题 组件 -->
        <mu-appbar >
            <mu-icon-button icon='arrow_back' slot="left" @click="returnService()"/>
            <h2> {{ title }} </h2>
            <mu-icon-button icon='sms' slot="right"/>
        </mu-appbar>

        <!-- 内容条件渲染 -->
        <Furnichure     v-if="this.$route.params.id === 'furnichure'" />
        <Decoration     v-else-if="this.$route.params.id === 'decoration'" />
        <Research       v-else-if="this.$route.params.id === 'research'"/>
        <Training       v-else-if="this.$route.params.id === 'training'" />
        <Welfare        v-else-if="this.$route.params.id === 'welfare'" />
        <Computer       v-else />
    </div>
</template>

<script>
import  Furnichure          from    './Router-views/Furnichure.vue'
import  Decoration          from    './Router-views/Decoration.vue'
import  Research            from    './Router-views/Research.vue'
import  Training            from    './Router-views/Training.vue'
import  Welfare             from    './Router-views/Welfare.vue'
import  Computer            from    './Router-views/Computer.vue'

const   components = { Furnichure,Decoration,Research,Training,Welfare,Computer }

export default {
    data() {
        return {
            title: ''
        }
    },
    mounted: function () {
        this.setTitle( this.$route.params.id )
    },
    methods: {
        // 目的: 改变标题名称
        setTitle: function (message) {
            if( message == 'furnichure' ) {
                return this.title = '办公家具'
            } else if( message == 'decoration' ) {
                return this.title = '办公装修'
            } else if( message == 'research' ) {
                return this.title = '外出考察'
            } else if( message == 'training' ) {
                return this.title = '员工培训'
            } else if( message == 'welfare' ) {
                return this.title = '员工福利'
            } else {
                return this.title = '办公电脑'
            }
        },
        // 目的: 执行跳转
        returnService: () => {
            location.href='#/service/'
        }
    },
    components: components
}

</script>

<style lang="sass?indentedSyntax">
@import '../../sass/main.sass'

#service_router
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

