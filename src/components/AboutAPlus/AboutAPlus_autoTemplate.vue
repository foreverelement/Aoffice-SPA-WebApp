<!-- 接收 '常见问题 / 商务合作 / 隐私政策 / 新功能介绍' 等页面的数据 - 本组件是渲染模板 -->
<template>
    <ul>
        <li class="aboutAPlus_template" v-for="item in aboutAPlus_auto_Arr">
            <h3> {{ item.title }} </h3>
            <p> {{ item.textContent }} </p>
        </li>
    </ul>
</template>
<script>
export default {
    props: ['aboutAPlus_auto_Arr']
}
</script>
<style lang="sass">
@import '../../sass/main.sass'

.aboutAPlus_template
    +REM(margin-top,$autoMargin)
    &:first-child
        margin: 0
    h3
        font-weight: bold
</style>
