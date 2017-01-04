<!-- "发现"页面 - 顶部AppBar -->
<template>
     <!--  title="Title"  -->
    <mu-appbar id="discoverAppBar" >
        <mu-icon-button icon='list' slot="left" />
        <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="S"/>
        <mu-flat-button icon='chat' slot="right"/>
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
    +bC($F,.1)
    filter: blur(1px)
    opacity: 1
    .mu-ripple-wrapper                                                                      // 两侧按钮样式
        color: $F
</style>
