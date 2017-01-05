<!-- "发现"页面 - 顶部AppBar -->
<template>
    <mu-appbar id="discoverAppBar" >
        <mu-icon-button icon='list' slot="left" />
        <mu-text-field icon="search" class="appbar-search-field"  slot="right" />
        <mu-icon-button icon='chat' slot="right" />
        <!--<mu-flat-button icon='' slot=""/>-->
    </mu-appbar>
</template>

<style lang="sass">
@import '../../sass/main'

.appbar-search-field
    color: #FFF
    margin-bottom: 0
    &.focus-state
        color: #FFF
    .mu-text-field-hint
        color: fade(#FFF,54%)
    .mu-text-field-input
        color: #FFF
    .mu-text-field-focus-line
        background-color: #FFF
// '发现' - 顶部AppBar栏
#discoverAppBar
    position: fixed
    +bC(rgba($F,.1))
    opacity: 1
    .mu-icon                                                                      // 两侧按钮样式
        color: $F !important
.mu-appbar-title
    width: 0 !important
.left
    position: absolute                                                          // 相对定位( 左侧按钮 )
    left: 0
    width: 14%
.right
    width: 84%
    margin-left: -3%
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
        padding-left: 34.5% !important                                          // 修正输入框的位置
    .focus-state
        >i.mu-icon
            display: none !important
</style>
