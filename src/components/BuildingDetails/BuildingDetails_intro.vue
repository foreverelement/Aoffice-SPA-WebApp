<!-- 办公楼 / 联合办公 -办公楼简介 模块展示 -->
<template>
    <div class="buildingDetails--intro">
        <div class="buildingDetails--box" v-for="item in buildingIntro_Arr">
            <!-- 建筑 - 简介 -->
            <!-- @click 点击事件: @click = 'toBuildingDetails( item.code, item.type )' -->
            <div class="intro" v-bind:style="{ backgroundImage: 'url(' + item.imgUrl + ')' }" >
                <div class="badge"> {{ item.badge }} </div>
                <h2> {{ item.name }} </h2>
                <p> {{ item.subTitle }} </p>
            </div>
            <!-- 详细描述部分 -->
            <div class="buildingDetails--text">
                <p> {{ item.description }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['buildingIntro_Arr']
}
</script>

<style lang="sass">
@import '../../sass/main'

=introMixin($bottom,$fontSize,$color,$weight)
    @extend %ABS
    +REM(left,16px)
    bottom: $bottom
    +REM(font-size,$fontSize)
    color: $color
    font-weight: $weight

.buildingDetails--intro
    // 循环box
    .buildingDetails--box
        // 上部分表现Intro 图片部分
        .intro
            @extend %REL
            width: 100%
            +REM(height,200px)
            background:
                repeat: no-repeat
                position: cover
                size: cover
            .badge
                @extend %flexCenter
                @extend %ABS
                right: 0
                top: 0
                +REM(padding,4px)
                +REM(padding-left,10px)
                +REM(padding-right,10px)
                +REM(width,75px)
                +REM(font-size,$badge-size)
                color: $F
                +bC($badge-bgColor)
            >h2
                +introMixin(17%,$title-size,$F,bold)
                +REM(line-height,23px)
            >p
                +introMixin(5%,$text-size,rgba($F,.77),normal)
        // 下部分 文字详细描述部分
        .buildingDetails--text
            +REM(padding-top,$autoMargin)
            +REM(padding-bottom,$autoMargin)
            +REM(margin-bottom,$autoMargin)
            border-bottom: 1px solid rgba($badgeFont-color,.3)
            >p
                +REM(font-size,$text-size)
                color: $badgeFont-color
                +REM(line-height,$text-size*2)
        // 最后一个box的底部文字不设置边框线
        &:last-child
            .buildingDetails--text
                border: none
</style>
