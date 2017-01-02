<!-- 通用 - 建筑物列表组件 -->
<template>
    <div class="buildingList">
        <div class="building--box" v-for="item in hotBuildingList_Arr[0]">
            <!-- 建筑 - 简介 -->
            <div class="building--intro" v-bind:style="{ backgroundImage: 'url(' + item.appListUrl + ')' }">
                <div class="badge"> {{ item.badge }} </div>
                <h2> {{ item.name }} </h2>
                <p> {{ item.subTitle }} </p>
            </div>

            <!-- 建筑 - 细节 (组建引入) -->
            <BuildingList_details :building_details=item />
        </div>
    </div>
</template>

<script>
import  BuildingList_details    from   './BuildingList_details.vue'
import  { mapGetters }          from 'vuex'
const   components = { BuildingList_details }

export default {
    computed: mapGetters({ hotBuildingList_Arr: 'hotBuildingList_Arr' })
    ,components: components
}
</script>

<style lang="sass" scoped>
@import '../../sass/main'

=introMixin($bottom,$fontSize,$color,$weight)
    @extend %ABS
    +REM(left,16px)
    bottom: $bottom
    +REM(font-size,$fontSize)
    color: $color
    font-weight: $weight

.buildingList
    /*+REM(margin-bottom,80px)*/
    .building--box
        +REM(margin-bottom,18px)
        +bC($F)
        border-bottom: 1px solid rgba($badgeFont-color,.4)
        .building--intro
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
</style>
