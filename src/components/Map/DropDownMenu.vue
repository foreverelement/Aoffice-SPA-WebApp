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
import  { mapActions }  from    'vuex'

export default {
    data () {
        return {
            buildingType: '1'
            ,dayPrice: '1'
            ,decoration: '1'
        }
    }
    ,mounted: function() {
        this.setRegionPointList()   // 首先 获取行政区数据
    }
    ,methods: {
        buildingTypeChange (value) {
            this.buildingType = value
            // 获取行政区数据 ( 参数: 城市代码, 类型 ) => 提交actions的事件
            let getTypeRegionPointList = ( typeValue ) => {
                this.$store.dispatch({
                    type: 'getTypeRegionPointList'
                    ,cityCode: this.$store.state.city.cityCode                                   // 查询当前城市 —— 行政区数据
                    ,btype: typeValue
                })
            }
            // 判断 类型值, 然后根据类型值进行检索 获取数据
            if( value == 1 ){
                getTypeRegionPointList('A')
            }else{
                getTypeRegionPointList('B')
            }
        }
        ,dayPriceChange (value) {
            this.dayPrice = value
        }
        ,decorationChange (value) {
            this.decoration = value
        }
        // 目的: 获取行政区数据
        ,setRegionPointList() {
            this.$store.dispatch({
                type: 'setRegionPointList',
                cityCode: this.$store.state.city.cityCode                                   // 查询当前城市 —— 行政区数据
            })
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
        border-right: 1px solid rgba($badgeFont-color,.3)
        &:last-child
            border-right: none
</style>
