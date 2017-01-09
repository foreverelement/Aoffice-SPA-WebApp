<!-- 通用上边距的组件，将内容挤到顶部标题栏下面 -->
<template>
    <div class="contentMarginTop" />
</template>

<script>
export default {
    mounted: function() {
        this.marginTopRevise()
    },
    methods: {
        // 目的: 通过读取顶部导航的高度值,将这个值赋给#Service_Furniture的margin-top 来避免重叠
        marginTopRevise: function() {
            const appBar_Arr = document.getElementsByClassName('mu-paper-1')
            const appBar_height = appBar_Arr[0].offsetHeight                                            //只需要获取第一个对象的宽度即可
            // console.log(appBar_height)
            const content_MarginTop = document.getElementsByClassName("contentMarginTop")
            content_MarginTop[0].style.height = appBar_height + "px"
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../sass/main'

.contentMarginTop
    width: 100%
    +REM(margin-bottom,$autoMargin)
</style>
