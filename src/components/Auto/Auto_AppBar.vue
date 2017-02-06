<!-- 通用顶部AppBar ( 除'发现'页的顶部AppBar外 ) -->
<template>
    <mu-appbar class="auto__AppBar" >
        <mu-icon-button icon='list' slot="left" @click="toggle(true)" />
        <!--<mu-text-field icon="search" class="auto__AppBar-search-field"  slot="right" />-->
        <!-- 搜索按钮 -->
        <div class="auto__AppBar-search-field" @click="toSearch()">
            <mu-icon-button icon='search' />
        </div>
        <mu-icon-button icon='chat' slot="right" />
        <!-- 隐藏左侧 -->
        <mu-drawer :open="open" :docked="docked" class="left--box" @close="toggle()">
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-list-item title="新功能介绍" @click="toAboutInfo( 'newFeatures' )" />
                <mu-list-item title="常见问题"   @click="toAboutInfo( 'FAQ' )" />
                <mu-list-item title="关于我们"   @click="toAboutInfo( 'aboutUs' )" />
                <mu-list-item title="商务合作"   @click="toAboutInfo( 'cooperation' )" />
                <mu-list-item title="隐私政策"   @click="toAboutInfo( 'privacyPolicy' )" />
                <mu-list-item title="版权信息"   @click="toAboutInfo( 'copyrightInfo' )" />
            </mu-list>
        </mu-drawer>
    </mu-appbar>
</template>
<script>
export default {
    data () {
        return {
            open: false,
            docked: true
        }
    },
    mounted: function () {
        this.setListObj_marginTop()
    },
    methods: {
        toggle (flag) {
            this.open = !this.open
            this.docked = !flag
        },
        toAboutInfo: function(pageName) {
            location.href = '#/aboutAPlus/' + pageName
        }
        ,toSearch: function() {
            location.href = '#/search/'
        }
        // 目的: 通过计时器 二次修改 房源列表对象的高度
        ,setListObj_marginTop: function() {
            setTimeout(() => {
                const appBar_height     = document.getElementsByClassName("auto__AppBar")[0].offsetHeight       // 获取AppBar对象高度
                const tabs_height       = document.getElementById("building_tabs").offsetHeight                 // 获取tabs对象高度
                const buildingList_Obj  = document.getElementsByClassName("buildingList")[0]                    // 获取房源列表对象
                buildingList_Obj.style.marginTop = appBar_height + tabs_height + 18 + "px"                      // 设置房源列表对象 的 margin-top值( 要加上一个$autoMargin值 )
            }, 100)
        }
    }
}
</script>
<style lang="sass">
@import '../../sass/main'

.auto__AppBar-search-field
    @extend %flexCenter
    +bC($searchBackGround-color)
    button
        padding: 0
        +REM(width,35px)
        +REM(height,35px)
// 通用顶部AppBar ( 除'发现'页的顶部AppBar外 )
.auto__AppBar
    position: fixed
    top: 0
    +bC(rgba($F,.1))
    opacity: 1
    .mu-icon                                                                      // 两侧按钮样式
        color: $theme-color !important
    .mu-appbar-title
        width: 0 !important
    .left
        left: 0
        width: 14%
    .right
        right: 0
        width: 14%
        .mu-text-field                                                              // 相对定位( 中间输入框 )
            position: absolute
            left: 15%
            padding-left: 38%!important
            margin-bottom: 0 !important
            >.mu-text-field-icon                                                    // 控制放大镜的位置定位
                left: 44.5% !important
                top: 25% !important
            >div>div
                .mu-text-field-line,.mu-text-field-focus-line
                    left: 0 !important
        .mu-icon-button                                                             // 相对定位( 右侧按钮 )
            position: absolute
            right: 0
        .mu-text-field.has-icon
            padding-left: 0 !important                                          // 修正输入框的位置
        .focus-state
            >i.mu-icon
                display: none !important
    // 输入框提示线 ( 未输入状态为浅色 )
    .mu-text-field-line
        +bC($badgeFont-color)
    // 输入框提示线 ( 输入状态为主题色 )
    .mu-text-field-focus-line
        +bC($theme-color)
</style>
