<template>
    <div id="index">
        <!-- 初始加载动画 -->
        <div v-if="this.$store.state.loadingState.judgeShow">
            <h1> 正在加载... </h1>
        </div>
        <!-- 完成加载动画 -->
        <div v-else>
            <router-view name="AppContent">      </router-view>
            <router-view name="AppBottomNav">    </router-view>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    mounted: function () {
        this.addState()
    },
    methods: mapActions([ 'addState' ])
}
</script>

<style lang="sass">
@import './sass/main'
@import './sass/vendors/MuseUi'

body
    @extend %clearScroll
#app
    position: relative
</style>
