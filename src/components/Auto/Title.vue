<!-- 通用 - 标题组件 -->
<template>
    <div class="title">
        <div class="string"></div>
        <h2 v-bind:style="{ backgroundColor: title_info.backgroundColor }" > {{ title_info.title }} </h2>
    </div>
</template>

<script>
export default { props: ['title_info'] }
</script>

<style lang="sass">
@import '../../sass/main'

.title
    position: relative
    @extend %flexCenter
    width: 50%
    +REM(height,50px)
    +mL(25%)
    +mR(25%)
    .string
        display: block
        position: absolute
        left: 0
        top: 46%
        z-index: 1
        width: 100%
        +REM(height,1px)
        border-top: 1px solid $title-color
        +REM(border-bottom-width,1px)
    h2
        @extend %dib
        +REM(padding-left,14px)
        +REM(padding-right,14px)
        +REM(padding-bottom,4px)
        color: $title-color
        +REM(font-size,14px)
        font-weight: bold
        +REM(line-height,23px)
        white-space: nowrap
        z-index: 2
</style>
