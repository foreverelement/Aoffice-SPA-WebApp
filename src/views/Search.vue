<!-- 搜索页面 -->
<template>
    <div>
        <!-- 搜索AppBar -->
        <div class="search__appBar">
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

</style>
