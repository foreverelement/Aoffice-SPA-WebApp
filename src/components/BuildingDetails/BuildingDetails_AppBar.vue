<!-- 房源详情 AppBar ( 联合办公 / 办公楼 - 通用组件 ) -->
<template>
    <div class="buildingDetails--AppBar">
        <mu-appbar >
            <mu-icon-button icon='arrow_back' slot="left" @click="returnIndex()"/>
            <h2> {{ AppBar_title }} </h2>
            <mu-icon-button icon='sms' slot="right"/>
        </mu-appbar>
    </div>
</template>
<script>
// import  { mapGetters } from 'vuex'

export default {
    props: ['AppBar_title']
    // data() {
    //     return {
    //         title: this.$props.name
    //     }
    // }
    ,methods: {
        // 目的: 执行跳转
        returnIndex: () => {
            // 此处应该返回上一步的历史位置 而不是指定页面
            location.href = '#'
        }
    }
}
</script>

<style lang="sass">
@import '../../sass/main'

.buildingDetails--AppBar
    /* 设置MuseUI - App Bar样式 */
    +auto--AppBar
</style>
