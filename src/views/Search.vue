<!-- 搜索页面 -->
<template>
    <div>
        <!-- 搜索AppBar -->
        <div id="search__appBar">
            <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="直接输入大厦名称搜索"/>
            <mu-flat-button color="white" label="取消" slot="right" @click="goBack" />
        </div>
        <!-- 搜索热门搜索 -->
        <div class="search__hotSearch">

        </div>
    </div>
</template>

<script>
import VueRouter from 'vue-router'

export default {
    methods: {
        // 目的: 返回上一页( 通过历史记录返回 )
        goBack () {
            const router = new VueRouter()
            router.go(-1)
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../sass/main.sass'

#search__appBar
    +bC($F)
    // 输入框背景色
    .mu-text-field
        +REM(margin,$autoMargin/2)
        margin:
            left: 2%
            right: 2%
        width: 76% !important
        +bC($base-color)
    // 按钮背景色修改
    .mu-flat-button
        width: 19%
        +bC($F)
        color: $btnTitle-color !important
        // "取消"按钮两侧的padding设为空
        span.mu-flat-button-label
            padding: 0 !important
</style>
