<!-- 版权信息 -->
<template>
    <div id="copyrightInfo">
        <AutoTemplate :aboutAPlus_auto_Arr = copyrightInfo_Arr />
    </div>
</template>
<script>
import AutoTemplate         from    './AboutAPlus_autoTemplate.vue'         // 通用渲染数组模板
const components = { AutoTemplate }
export default {
    data() {
        return {
            copyrightInfo_Arr: [
                {
                    title:         `版权信息1`,
                    textContent:   `版权信息介绍1`
                },
                {
                    title:         `版权信息2`,
                    textContent:   `版权信息介绍2`
                },
                {
                    title:         `版权信息3`,
                    textContent:   `版权信息介绍3`
                }
            ]
        }
    },
    components: components
}
</script>
<style lang="sass">
@import '../../sass/main.sass'

#copyrightInfo
    +auto--contentBox($autoMargin,$title-color,$title-size,$badgeFont-color,$text-size)
    +bC($F)
</style>
