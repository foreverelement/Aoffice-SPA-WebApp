<!-- "发现"页面 -->
<template>
    <div id="discover">
        <Swiper />
        <EnterpriseService />
        <Title :title_info=title_info />
        <BuildingList />
    </div>
</template>

<script>
import  Swiper                  from    '../components/Discover/Swiper.vue'
import  EnterpriseService       from    '../components/Discover/EnterpriseService.vue'
import  Title                   from    '../components/Auto/Title.vue'
import  BuildingList            from    '../components/Auto/BuildingList.vue'
const   components = { Swiper,EnterpriseService,Title,BuildingList }

export default {
    data() {
        return {
            title_info: {
                title: '热门房源',
                backgroundColor: '#F6F6F6'
            }
        }
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

#discover
    position: relative
    height: 100%
    +REM(margin-bottom,80px)
</style>
