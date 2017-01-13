<!-- 商务合作 -->
<template>
    <div id="cooperation">
        <AutoTemplate :aboutAPlus_auto_Arr = cooperation_Arr />
    </div>
</template>
<script>
import AutoTemplate         from    './AboutAPlus_autoTemplate.vue'         // 通用渲染数组模板
const components = { AutoTemplate }
export default {
    data() {
        return {
            cooperation_Arr: [
                {
                    title:         `租赁服务合作：`,
                    textContent:   `艾迦办公随时欢迎业主、开发商、物业运营商与我们合作，您可以将合作内容以及您自己的信息内容以邮件
                                    的形式发送给我们，我们会尽快与您联系。您也可以直接拨打我们的电话83861532与我们进行沟通。`
                },
                {
                    title:         `企业服务合作：`,
                    textContent:   `请描述您的公司，以及合作的方式发送至我们的邮箱（aplusoffice@forevercj.com），我们会尽快与您
                                    取得联系。您也可以直接拨打我们的电话83861532与我们进行沟通。`
                },
                {
                    title:         `市场推广合作：`,
                    textContent:    `请描述您的公司，以及合作的方式发送至我们的邮箱，我们会尽快与您取得联系。您也可以直接拨打我们
                                    的电话83861532与我们进行沟通。`
                }
            ]
        }
    },
    components: components
}
</script>
<style lang="sass">
@import '../../sass/main.sass'

#cooperation
    +auto--contentBox($autoMargin,$title-color,$title-size,$badgeFont-color,$text-size)
    +bC($F)
</style>
