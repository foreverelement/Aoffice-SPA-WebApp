<!-- "发现"页面 -->
<template>
    <div id="discover">
        <DiscoverAppBar />
        <Swiper :swiper_arr=bannerImg_Arr  />
        <EnterpriseService />
        <Title :title_info=title_info />
        <BuildingList />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import  Swiper                  from    '../components/Discover/Swiper.vue'
import  EnterpriseService       from    '../components/Discover/EnterpriseService.vue'
import  Title                   from    '../components/Auto/Title.vue'
import  BuildingList            from    '../components/Auto/BuildingList.vue'
import  DiscoverAppBar          from    '../components/Discover/DiscoverAppBar.vue'
const   components = { Swiper,EnterpriseService,Title,BuildingList,DiscoverAppBar }

export default {
    data() {
        return {
            title_info: {
                title: '热门房源',
                backgroundColor: '#F6F6F6'
            }
        }
    },
    computed: mapGetters({ bannerImg_Arr: 'bannerImg_Arr' }),
    components: components
}
</script>

<style lang="sass" scoped>
@import '../sass/main'

#discover
    position: relative
    height: 100%
    +REM(margin-bottom,80px)
</style>
