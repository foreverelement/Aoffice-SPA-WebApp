<!-- 常见问题 -->
<template>
    <div id="FAQ">
        <AutoTemplate :aboutAPlus_auto_Arr=FAQ_Arr />
    </div>
</template>
<script>
import AutoTemplate         from    './AboutAPlus_autoTemplate.vue'         // 通用渲染数组模板
const components = { AutoTemplate }
export default {
    data() {
        return {
            FAQ_Arr: [
                {
                    title:         `Q：请问通过你们租房收取中介费吗？`,
                    textContent:   `A：我们将会为客户提供全程筛选优质房源、议价、审核合同等服务，在租赁服
                                    务完成后，我们会适当收取服务费。我们承若服务费低于市面收费标准，与此同时
                                    ，若在我平台继续使用装修以及采购家具等服务，我们会给予多重优惠，保证给客户提供一个满意的租赁服务。`
                },
                {
                    title:         `Q：除了办公室租赁，你们还有别的服务吗？`,
                    textContent:   `A：目前我们除了提供租赁服务，还于本土优质企业合作为客户准备了办公装修，
                                    家具采购的服务，在保证质量的同时，给客户提供一个低于市场平均价位的价格。`
                },
                {
                    title:         `Q：你们目前服务于哪些城市呢？`,
                    textContent:    `A：现阶段我们只在青岛发展，青岛是一个发展趋势迅猛的
                                    城市，我们想充分的为当地企业提供优质的服务，所以目前只在青岛开展业务。`
                }
            ]
        }
    },
    components: components
}
</script>
<style lang="sass">
@import '../../sass/main.sass'

#FAQ
    +auto--contentBox($autoMargin,$title-color,$title-size,$badgeFont-color,$text-size)
    +bC($F)
</style>
