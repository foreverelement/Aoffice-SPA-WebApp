<!-- "房源"页面 -->
<template>
    <div id="houseResource">
        <BuildingList />
    </div>
</template>

<script>
import  BuildingList            from        '../components/Auto/BuildingList.vue';
const   components  = { BuildingList }

export default {
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

#houseResource
    +REM(margin-bottom,80px)
</style>
