<template>
    <div id="Service_Research">
        <Research_scrollList />
    </div>
</template>

<script>
import      Research_scrollList       from    '../Research_scrollList.vue'
const components = { Research_scrollList }

export default {
    mounted: function () {
        this.marginTopRevise()
        this.setScrollHeight()
    },
    methods: {
        // 目的: 通过读取顶部导航的高度值,将这个值赋给#Service_Furnichure的margin-top 来避免重叠
        marginTopRevise: function() {
            const appBar_Arr = document.getElementsByClassName('mu-paper-1')
            const appBar_height = appBar_Arr[0].offsetHeight                                            //只需要获取第一个对象的宽度即可
            // console.log(appBar_height)
            const service_content = document.getElementById("Service_Research")
            service_content.style.marginTop = appBar_height + "px"
        },
        // 目的: 通过计时器 二次修改Scroll列表的高度,使下滑加载的效果实现
        setScrollHeight: function() {
            setTimeout(() => {
                // 获取到顶部appBar高度
                const appBar_Arr = document.getElementsByClassName('mu-paper-1')
                const appBar_height = appBar_Arr[0].offsetHeight                                        //只需要获取第一个对象的宽度即可

                const windows_height = document.body.offsetHeight
                const service_contentHeight = windows_height - appBar_height - 2
                const service_content = document.getElementsByClassName("demo-infinite-container")
                // 预留空间下滑
                service_content[0].style.height = service_contentHeight + "px"
                service_content[0].style.marginTop = appBar_height + "px"
            }, 100)
        }
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../../sass/main'

#Service_Research
    .demo-infinite-container
        margin-bottom: 1px
</style>
