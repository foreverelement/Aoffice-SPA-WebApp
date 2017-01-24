<!-- "房源"页面 -->
<template>
    <div id="houseResource">
        <Auto_AppBar />
        <BuildingTabs />
        <BuildingList />
    </div>
</template>

<script>
import  BuildingList            from        '../components/Auto/BuildingList.vue'
import  BuildingTabs            from        '../components/HouseResource/Building_Tabs.vue'
import  Auto_AppBar             from        '../components/Auto/Auto_AppBar.vue'

const   components  = { BuildingList, BuildingTabs, Auto_AppBar }

export default {
    components: components
}
</script>

<style lang="sass" scoped>
@import '../sass/main'

#houseResource
    +REM(margin-bottom,80px)
</style>
