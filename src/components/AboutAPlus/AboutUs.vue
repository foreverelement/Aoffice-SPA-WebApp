<!-- 关于我们 -->
<template>
    <div id="aboutUs">
        <div class="aboutUs--box">
            <div v-for = "item in aboutUsInfo.describe">
                <p> {{ item.textContent }} </p>
            </div>
        </div>
        <div class="aboutUs--box">
            <AutoTemplate :aboutAPlus_auto_Arr = aboutUsInfo.connection />
        </div>
        <div class="aboutUs--box">
            <img :src="aboutUsInfo.mapImgUrl" />
        </div>
    </div>
</template>
<script>
import AutoTemplate         from    './AboutAPlus_autoTemplate.vue'         // 通用渲染数组模板
const components = { AutoTemplate }
export default {
    data() {
        return {
            aboutUsInfo: {
                describe: [
                    {
                        textContent:    `艾迦办公隶属于青岛上朝信息科技有限公司，是一个专注于为各类企业
                                        提供中高端办公室租赁及配套服务的互联网平台，成立于2016年，总部
                                        设于中国青岛。`
                    },
                    {
                        textContent:    `艾迦办公以提升企业租赁体验为目标，抵制虚假信息。通过线上初步选房
                                        -线下核定房源-陪同看房-撮合交易这一流程，为客户提供最有效的租房
                                        服务。同时，艾迦办公还为客户准备了办公装修，家具采买等其他专业的
                                        配套服务，为所有客户提供一站式优质服务。`
                    }
                ],
                connection: [
                    {
                        title:          `热线电话：`,
                        textContent:    `0532-83861532`
                    },
                    {
                        title:           `邮件咨询：`,
                        textContent:     `aplusoffice@forevercj.com`
                    },
                    {
                        title:           `公司地址：`,
                        textContent:     `山东省青岛市市南区华润大厦B座2408号`
                    }
                ],
                mapImgUrl: require('../../assets/images/map.png')
            }
        }
    },
    components: components
}
</script>
<style lang="sass">
@import '../../sass/main.sass'

#aboutUs
    +auto--contentBox($autoMargin,$title-color,$title-size,$badgeFont-color,$text-size)
    +bC($F)
    .aboutUs--box
        +REM(margin-bottom,$autoMargin)
        &:last-child
            margin: 0
        // 联系方式
        ul li
            margin: 0
            >h3
                @extend %dib
            >p
                @extend %dib
                color: rbga($title-color-light,.7)
        >img
            @extend %imgCover
</style>
