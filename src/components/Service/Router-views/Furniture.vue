<template>
    <div id="Service_Furniture">
        <Service_dropDownMenu />
        <!-- 家具 - 下拉列表 -->
        <Furniture_scrollList />
    </div>
</template>

<script>
import      Service_dropDownMenu        from    '../Furniture/Furniture_dropDownMenu.vue'
import      Furniture_scrollList       from    '../Furniture_scrollList.vue'
const components = { Service_dropDownMenu,Furniture_scrollList }

export default {
    mounted: function () {
        this.setScrollHeight()
    },
    methods: {
        // 目的: 通过计时器 二次修改Scroll列表的高度,使下滑加载的效果实现
        setScrollHeight: function() {
            setTimeout(() => {
                // 获取到顶部appBar高度
                const appBar = document.getElementsByClassName('mu-paper-1')[0]                                      // 顶部标题的组件对象
                const appBar_height = appBar.offsetHeight                                                           // 顶部标题的组件高度
                const dropDownMenu = document.getElementsByClassName('Service_dropDownMenu')[0]
                dropDownMenu.style.top = appBar_height + "px"                                                       // 设置下拉选项 对象的top值( 顶部标题高度值 )
                const dropDownMenu_height = dropDownMenu.offsetHeight                                               // 获取下来选项 对象的高度值
                const windows_height = document.body.offsetHeight                                                   // 窗口高度值
                const service_contentHeight = windows_height - ( appBar_height + dropDownMenu_height + 10 ) + "px"  // 设置内容部分高度( 包括单位 )
                const service_content = document.getElementsByClassName("demo-infinite-container")[0]
                service_content.style.height = service_contentHeight                                                // 预留空间下滑
                service_content.style.marginTop = dropDownMenu_height + "px"
            }, 200)
        }
    },
    components: components
}
</script>

<style lang="sass" scoped>
@import '../../../sass/main'

#Service_Furniture
</style>
