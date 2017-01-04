<template>
    <mu-paper id="bottomNav">
        <mu-bottom-nav :value="bottomNav"  @change="handleChange" style="height: 1.7rem; color: #FFF;">
            <mu-bottom-nav-item value="discover" title="发现" icon="near_me" href="#/discover" class="router-link-active"/>
            <mu-bottom-nav-item value="building" title="房源" icon="home" href="#/houseResource" class="router-link-active"/>
            <mu-bottom-nav-item value="map" title="地图" icon="place" href="#/map" class="router-link-active"/>
            <mu-bottom-nav-item value="serve" title="服务" icon="call" href="#/service" class="router-link-active"/>
        </mu-bottom-nav>
    </mu-paper>
</template>

<script>
export default {
    data () {
        return {
            bottomNav: 'movies',
            bottomNavColor: 'movies'
        }
    },
    methods: {
        handleChange (val) {
            this.bottomNav = val
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main.sass'

// 本项目Muse-UI的特定样式 (抵消默认权重)
#bottomNav
    position: fixed !important
    bottom: 0px !important
    width: 100% !important
    z-index: 9999
</style>
