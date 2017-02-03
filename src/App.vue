<template>
    <div id="index">
        <!-- 初始加载动画 -->
        <div v-if="this.$store.state.loadingState.judgeShow" id="loading">
            <img :src="loadingStyle.imgUrl" class="animated bounceInDown">
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
    data() {
        return {
            loadingStyle: {
                imgUrl: require('./assets/images/loading.png')
            }
        }
    }
    ,mounted: function () {
        this.addState()
        this.addLoadingAnimation()                         // 添加Loading动画
    }
    ,methods: {
        // 目的: 触发Action 获取首页数据
        addState() {
            this.$store.dispatch({
                type: 'addState'
            })
        }
        // 目的: 添加动画
        ,addLoadingAnimation() {
            // 当执行完默认第一个动画后添加第二个动画class
            setTimeout(() => {
                let loadingImg = document.getElementById("loading").firstChild          // 获取loading的img对象
                loadingImg.setAttribute("class","animated rubberBand")                  // 改变它的class
            }, 1500)
        }
    }
}
</script>

<style lang="sass">
@import './sass/main'
@import './sass/vendors/MuseUi'

body
    @extend %clearScroll
#app
    position: relative
#loading img
    width: 100%
    object-fit: cover
</style>
