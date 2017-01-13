<!-- 新功能介绍 -->
<template>
    <div id="newFeatures">
        <AutoTemplate :aboutAPlus_auto_Arr = newFeatures_Arr />
    </div>
</template>
<script>
import AutoTemplate         from    './AboutAPlus_autoTemplate.vue'         // 通用渲染数组模板
const components = { AutoTemplate }
export default {
    data() {
        return {
            newFeatures_Arr: [
                {
                    title:         `新功能1`,
                    textContent:   `新功能介绍1`
                },
                {
                    title:         `新功能2`,
                    textContent:   `新功能介绍2`
                },
                {
                    title:         `新功能3`,
                    textContent:   `新功能介绍3`
                }
            ]
        }
    },
    components: components
}
</script>
<style lang="sass">
@import '../../sass/main.sass'

#newFeatures
    +auto--contentBox($autoMargin,$title-color,$title-size,$badgeFont-color,$text-size)
    +bC($F)
</style>
