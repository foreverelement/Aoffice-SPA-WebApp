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
    mounted: function() {
        this.setBottomBtnState(1)
    }
    ,methods: {
        // 改变底部按钮状态样式
        setBottomBtnState(state) {
            let bottomBtn_Arr = document.getElementsByClassName("mu-buttom-item")
            for( let i = 0; i < bottomBtn_Arr.length; i++ ) {                                                           // 清空状态
                bottomBtn_Arr[i].setAttribute("class","mu-buttom-item router-link-active")
            }
            bottomBtn_Arr[state].setAttribute("class","mu-buttom-item router-link-active mu-bottom-item-active")        // 改变"发现"按钮的状态
        }
    }
    ,components: components
}
</script>

<style lang="sass" scoped>
@import '../sass/main'

#houseResource
    +REM(margin-bottom,80px)
</style>
