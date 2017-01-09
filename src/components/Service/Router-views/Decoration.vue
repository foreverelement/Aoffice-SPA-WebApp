<!-- '办公装修'组件 -->
<template>
    <div id="Service_Decoration">
        <!-- 关于我们 -->
        <div class="decoration--info">
            <Title :title_info=decoration_aboutUs_title />
            <div class="aboutUs--content" v-for="item in decoration_aboutUs">
                <h3> {{ item.title }} </h3>
                <p> {{ item.contentText }} </p>
            </div>
        </div>
        <!-- 玻璃隔断 -->
        <div class="decoration--info">
            <Title :title_info=decoration_glass_title />
            <div class="glass--content">
                <div class="glass--box" v-for="item in decoration_glass">
                    <img :src="item.imgUrl">
                    <h3> {{ item.title }} </h3>
                    <p> {{ item.subTitle_1 }} </p>
                    <p> {{ item.subTitle_2 }} </p>
                    <p> <span> 注: </span> {{ item.note }} </p>
                </div>
            </div>
        </div>
        <!-- 装修项目 -->
        <div class="decoration--info">
            <Title :title_info=decoration_project_title />
            <div class="project--box" v-for="item in decoration_project">
                <h3> {{ item.title }} </h3>
                <p> {{ item.contentText }} </p>
            </div>
        </div>
        <!-- 装修流程 -->
        <div class="decoration--info">
            <Title :title_info=decoration_flow_title />
            <div class="flow--box">
                <img :src="decoration_flow.imgUrl">
            </div>
        </div>
        <!-- 注意事项 -->
        <div class="decoration--info">
            <Title :title_info=decoration_Notes_title />
            <!-- <li v-for="(item, index) in items"> -->
            <div class="Notes--box" v-for="(item, index) in decoration_Notes">
                <p> {{ index + 1 }} . {{ item.title }} </p>
            </div>
        </div>
    </div>
</template>

<script>
import      Title        from    '../../Auto/Title.vue'
const components = { Title }

export default {
    data() {
        return {
            decoration_aboutUs_title: {
                title: '关于我们',
                backgroundColor: '#FFF',
            },
            decoration_aboutUs: [
                {
                    title: '专业团队',
                    contentText: 'A+OFFICE致力于给我们的客户提供除租赁服务以外的其他相关服务，即与本土装修团队合作，为我们的客户打造舒适专业的办公环境'
                },
                {
                    title: '超值折扣',
                    contentText: '凡A+OFFICE的会员采用本平台所提供的装修团队，即可享受相应的装修折扣'
                },
                {
                    title: '个性化定制',
                    contentText: '可直接拨打客户电话，提出装修请求。我们会尽快为您约见装修专家实地考察并给予您专业的装修建议'
                },
                {
                    title: '家具享受95折',
                    contentText: '凡A+OFFICE的会员使用装修服务后，在本平台采购办公家具可享受95折'
                }
            ],
            decoration_glass_title: {
                title: '玻璃隔断',
                backgroundColor: '#FFF',
            },
            decoration_glass: [
                {
                    imgUrl: require('../../../assets/images/pic_blgd_1.png'),
                    title: '单层玻璃隔断加百叶',
                    subTitle_1: '商品规格：厚度60mm，厚度80mm，厚度100mm',
                    subTitle_2: '商品简介：玻璃为5mm厚钢化玻璃',
                    note: '60款安装安全高度为2.8米'
                },
                {
                    imgUrl: require('../../../assets/images/pic_blgd_2.png'),
                    title: '双层玻璃隔断加百叶',
                    subTitle_1: '商品规格：厚度60mm，厚度80mm，厚度100mm',
                    subTitle_2: '商品简介：玻璃为5mm厚钢化玻璃',
                    note: '60款安装安全高度为2.8米'
                },
                {
                    imgUrl: require('../../../assets/images/pic_blgd_3.png'),
                    title: '单层玻璃隔断加百叶',
                    subTitle_1: '商品规格：厚度60mm，厚度80mm，厚度100mm',
                    subTitle_2: '商品简介：玻璃为5mm厚钢化玻璃',
                    note: '60款安装安全高度为2.8米'
                },
                {
                    imgUrl: require('../../../assets/images/pic_blgd_4.png'),
                    title: '双层玻璃隔断加百叶',
                    subTitle_1: '商品规格：厚度60mm，厚度80mm，厚度100mm',
                    subTitle_2: '商品简介：玻璃为5mm厚钢化玻璃',
                    note: '60款安装安全高度为2.8米'
                },
                {
                    imgUrl: require('../../../assets/images/pic_blgd_5.png'),
                    title: '单层玻璃隔断加百叶',
                    subTitle_1: '商品规格：厚度60mm，厚度80mm，厚度100mm',
                    subTitle_2: '商品简介：玻璃为5mm厚钢化玻璃',
                    note: '60款安装安全高度为2.8米'
                },
                {
                    imgUrl: require('../../../assets/images/pic_blgd_6.png'),
                    title: '双层玻璃隔断加百叶',
                    subTitle_1: '商品规格：厚度60mm，厚度80mm，厚度100mm',
                    subTitle_2: '商品简介：玻璃为5mm厚钢化玻璃',
                    note: '60款安装安全高度为2.8米'
                },
                {
                    imgUrl: require('../../../assets/images/pic_blgd_7.png'),
                    title: '单层玻璃隔断加百叶',
                    subTitle_1: '商品规格：厚度60mm，厚度80mm，厚度100mm',
                    subTitle_2: '商品简介：玻璃为5mm厚钢化玻璃',
                    note: '60款安装安全高度为2.8米'
                },
                {
                    imgUrl: require('../../../assets/images/pic_blgd_8.png'),
                    title: '双层玻璃隔断加百叶',
                    subTitle_1: '商品规格：厚度60mm，厚度80mm，厚度100mm',
                    subTitle_2: '商品简介：玻璃为5mm厚钢化玻璃',
                    note: '60款安装安全高度为2.8米'
                }
            ],
            decoration_project_title: {
                title: '装修项目',
                backgroundColor: '#FFF',
            },
            decoration_project: [
                {
                    title: '免费测量',
                    contentText: '免费为办公室提供分析、侧量、报价'
                },
                {
                    title: '免费设计',
                    contentText: '正式合作后提供免费设计后期保修服务'
                },
                {
                    title: '按需选择',
                    contentText: '可选择单项装修服务（隔断、走线等) 或是整套装修服务'
                },
                {
                    title: '服务细项',
                    contentText: '服务细项包括走线、刮泥、吊顶、水电、地砖、隔断等'
                },
                {
                    title: '专业建议',
                    contentText: '可根据客户需求，实地考察并给予专业的装修建议'
                }
            ],
            decoration_flow_title: {
                title: '装修流程',
                backgroundColor: '#FFF',
            },
            decoration_flow: {
                imgUrl: require('../../../assets/images/flow.png')
            },
            decoration_Notes_title: {
                title: '注意事项',
                backgroundColor: '#FFF',
            },
            decoration_Notes: [
                {
                    title: '您可直接拨打我司电话，提出您的装修请求'
                },
                {
                    title: '我们会尽快为你约定专家，实地考察并给予专业建议'
                },
                {
                    title: '最终解释权归A+office所有'
                },
            ]
        }
    },
    components: components
}
</script>

<style lang="sass" scoped>
@import '../../../sass/main'

%Decoration--title
    h3
        +REM(font-size,$title-size)
        +REM(line-height,$title-size*2)
        color: rgba($title-color-light,.5)
        font-weight: bold
    p
        +REM(font-size,$text-size)
        +REM(line-height,$text-size*2)
        color: $badgeFont-color

#Service_Decoration
    .decoration--info
        +REM(margin-top,$autoMargin)
        +REM(padding-left,$autoMargin)
        +REM(padding-right,$autoMargin)
        +bC($F)
        box-shadow: 0 1px 2px rgba(31,0,0,.1)
        img
            @extend %imgCover
        &:last-child
            +REM(margin-bottom,$autoMargin)
/* 关于我们 */
.aboutUs--content
    +REM(padding-bottom,$autoMargin)
    @extend %Decoration--title
/* 玻璃隔断 */
.glass--content
    +REM(padding-bottom,$autoMargin)
    +REM(margin-bottom,$autoMargin)
    @extend %Decoration--title
    .glass--box
        +REM(margin-bottom,$autoMargin)
    span
        font-weight: bold
        color: $theme-color
/* 装修项目 */
.project--box
    +REM(padding-bottom,$autoMargin)
    @extend %Decoration--title
/* 装修流程 */
.flow--box
    +REM(padding-bottom,$autoMargin)
/* 注意事项 */
.Notes--box
    +REM(padding-bottom,$autoMargin)
    p
        +REM(font-size,$text-size)
        color: $badgeFont-color
</style>
