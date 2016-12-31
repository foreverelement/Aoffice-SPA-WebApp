<template>
    <div id="index">
        <router-view name="AppContent">      </router-view>
        <router-view name="AppBottomNav">    </router-view>
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

<style lang="sass?indentedSyntax">
@import './sass/main.sass'
@import './sass/vendors/MuseUi'

body
    @extend %clearScroll
#index
    /*+REM(margin-bottom,80px)*/
#app
    position: relative
</style>
