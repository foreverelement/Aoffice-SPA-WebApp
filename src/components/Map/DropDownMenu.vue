 <!-- Map 下拉选项组件 -->
<template>
    <div id="map_dropDownMenu">
        <mu-dropDown-menu :value="buildingType" @change="buildingTypeChange">
            <mu-menu-item value="1" title="写字楼"/>
            <mu-menu-item value="2" title="联合办公"/>
        </mu-dropDown-menu>

        <mu-dropDown-menu :value="dayPrice" @change="dayPriceChange">
            <mu-menu-item value="1" title="按天价格"/>
            <mu-menu-item value="2" title="价格不限"/>
            <mu-menu-item value="3" title="小于3元"/>
            <mu-menu-item value="4" title="3~5元"/>
            <mu-menu-item value="5" title="5~8元"/>
            <mu-menu-item value="6" title="8~10元"/>
            <mu-menu-item value="7" title="大于10元"/>
        </mu-dropDown-menu>

        <mu-dropDown-menu :value="decoration" @change="decorationChange">
            <mu-menu-item value="1" title="装修"/>
            <mu-menu-item value="2" title="不限"/>
            <mu-menu-item value="3" title="豪装"/>

            <mu-menu-item value="4" title="精装"/>
            <mu-menu-item value="5" title="简装"/>
            <mu-menu-item value="6" title="毛坯"/>
        </mu-dropDown-menu>
    </div>
</template>

<script>
export default {
    data () {
        return {
            buildingType: '1'
            ,dayPrice: '1'
            ,decoration: '1'
        }
    },
    methods: {
        buildingTypeChange (value) {
            this.buildingType = value
        }
        ,dayPriceChange (value) {
            this.dayPrice = value
        }
        ,decorationChange (value) {
            this.decoration = value
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../sass/main'

#map_dropDownMenu
    position: fixed
    z-index: 2
    @extend %flexWrap
    width: 100%
    border-bottom: 1px solid rgba($badgeFont-color,.3)
    >.mu-dropDown-menu
        flex: 1
        +bC($F)
        &:first-child
            border-right: 1px solid rgba($badgeFont-color,.3)
</style>
