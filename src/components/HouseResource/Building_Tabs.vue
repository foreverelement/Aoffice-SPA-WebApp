<!-- 房源页( 顶级 ) - Tab切换组件 -->
<template>
    <div id="building_tabs">
        <mu-tabs :value="activeTab" @change="handleTabChange" >
            <mu-tab value="tab1" title="全部类型"  />
            <mu-tab value="tab2" title="写字楼" />
            <mu-tab value="tab3" title="联合办公"/>
            <mu-tab value="tab4" title="工位"/>
            <mu-tab value="tab5" @active="handleActive" icon="search" title="筛选"/>
        </mu-tabs>
    </div>
</template>

<script>
export default {
    data () {
        return {
            activeTab: 'tab1'
        }
    },
    methods: {
        handleTabChange (val) {
            this.activeTab = val
        },
        handleActive () {
            window.alert('tab active')
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../sass/main'

#building_tabs
    position: fixed
    top: 1.5rem
    z-index: 1
    width: 100%

.mu-tabs
    +bC($F)
    button
        padding: 0
        +REM(padding-left,$autoMargin/2)
        +REM(padding-right,$autoMargin/2)
        // 最后一个按钮 - 按键效果

</style>
