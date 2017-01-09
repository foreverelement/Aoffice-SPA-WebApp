<!-- 服务模块 - 3级家具详情页面 - 内容模版根据$router.id 来获取数据 -->
<template>
    <div id="service_furniture_router">
        <!-- 标题 组件 -->
        <mu-appbar>
            <!-- 返回'家居页面' -->
            <mu-icon-button icon='arrow_back' slot="left" @click="returnFurniture()" />
            <h2> {{ title }} </h2>
            <mu-icon-button icon='sms' slot="right"/>
        </mu-appbar>
        <!-- 内容条件渲染 -->
        <Swiper :swiper_arr=furnitureInfo.imgUrl class="furniture--swiper" />
        <div class="furniture--title">
            <h3> {{ furnitureInfo.name }} </h3>
            <p> ￥ {{ furnitureInfo.price }} </p>
            <!-- 收藏按钮 -->
            <mu-checkbox class="demo-checkbox" uncheckIcon="favorite_border" checkedIcon="favorite" />
        </div>
        <!-- 家具描述 -->
        <div class="furniture--box furniture__Describe">
            <Title :title_info = describe_title />
            <p> {{ furnitureInfo.description }} </p>
        </div>
        <!-- 家具尺寸 -->
        <div class="furniture--box">
            <Title :title_info = size_title />
            <!-- 尺寸列表 -->
            <ul class="furniture--sizeList">
                <li v-for="item in furnitureInfo.furnitureSizeList">
                    <p> {{ item.name }} </p>
                    <span> {{ item.price }} </span>
                </li>
            </ul>
        </div>
        <!-- 家具定制 -->
        <div class="furniture--box">
            <Title :title_info = custom_title />
            <div>
                <p> 1.  {{ custom_List[0].text }} </p>
                <p> 2.  {{ custom_List[1].text }} </p>
                <p> 3.  定制电话：<b> {{ custom_List[2].text }} </b> </p>
            </div>
        </div>
        <!-- 购买流程 -->
        <div class="furniture--box">
            <Title :title_info = flow_title />
            <img :src="flow_img.imgUrl" />
        </div>
        <!-- 注意事项 -->
        <div class="furniture--box">
            <Title :title_info = Notes_title />
            <div v-for="(item, index) in Notes_content">
                <p> {{ index + 1 }} . {{ item.text }} </p>
            </div>
        </div>
    </div>
</template>

<script>
import      { mapActions, mapGetters } from 'vuex'
import      Title           from    '../Auto/Title.vue'
import      Swiper          from    '../Discover/Swiper.vue'     // 引入轮播组件
const       components = { Swiper,Title }

export default {
    data() {
        return {
            title: this.$route.params.id,
            describe_title: {
                title: '家居描述',
                backgroundColor: '#FFF'
            },
            size_title: {
                title: '家具尺寸',
                backgroundColor: '#FFF'
            },
            custom_title: {
                title: '家具定制',
                backgroundColor: '#FFF'
            },
            custom_List: [
                { text: '独家定制专属您的办公家具；' },
                { text: '定制流程请联系客服或拨打电话咨询；' },
                { text: '0532-83861532' }
            ],
            flow_title: {
                title: '购买流程',
                backgroundColor: '#FFF'
            },
            flow_img: {
                imgUrl: require('../../assets/images/instruction.png')
            },
            Notes_title: {
                title: '注意事项',
                backgroundColor: '#FFF'
            },
            Notes_content: [
                { text: '商品为厂家直销；' },
                { text: '商品最终以实物为准；' },
                { text: '商品任何质量问题均有厂家直接解决；' },
                { text: '一次性购买5000元家具可享青岛市内免费运输服务。' }
            ]
        }
    },
    mounted: function() {
        this.addAppOnClick()                                                 // 添加App专用点击事件
        this.getFurnitureInfo()                                             // 获取家具信息
    }
    ,methods: {
        // 目的: 进行交互
        ...mapActions([ 'getFurnitureInfo' ])                                 // 测试
        // 目的: 执行跳转 ( 返回 '家居页面' )
        ,returnFurniture: () => {
            location.href='#/service/furniture'
        }
        // 目的: 向两个按钮添加App反馈事件( 返回 / 对话窗口 )
        ,addAppOnClick: () => {
            setTimeout(() => {
                // console.log('执行计时器事件')
                const btnLeft   = document.getElementsByClassName('left')[0]        // 向左侧的返回按钮添加 returnBtn()事件
                const btnRight  = document.getElementsByClassName('right')[0]       // 向右侧的对话按钮添加 dialogueBtn() 事件
                btnLeft.setAttribute("onClick", "returnBtn()")
                btnRight.setAttribute("onClick", "dialogueBtn()")
            },1000)
        }
    }
    ,computed: mapGetters({ furnitureInfo: 'furnitureInfo' })
    ,components: components
}
</script>

<style lang="sass">
@import '../../sass/main.sass'
%furniture--font
    h3
        +REM(font-size,$text-size)
        color: rgba($title-color,.7)
    p
        +REM(font-size,$text-size)
        color: rgba($title-color,.7)
        >b
            color: $theme-color

#service_furniture_router
    /* 设置MuseUI - App Bar样式 */
    .mu-paper-1
        top: 0 !important
        bottom: initial !important
        box-shadow: 0 1px 2px rgba(0,0,0,.117647), 0 1px 3px rgba(0,0,0,.117647) !important
        +bC($F)
        .mu-icon
            color: $badgeFont-color !important
        h2
            color: $badgeFont-color !important
            text-align: center
    // 统一上边距
    .furniture--box
        +REM(padding,$autoMargin)
        padding-top: 0
        +REM(margin-top,$autoMargin)
        +bC($F)
        box-shadow: 0 1px 2px rgba(0,0,0,.117647), 0 1px 3px rgba(0,0,0,.117647) !important
        &:last-child
            +REM(margin-bottom,$autoMargin)
        img
            @extend %imgCover
        @extend %furniture--font
    // 轮播图
    .furniture--swiper
        +REM(margin-top,$autoMargin)
        box-shadow: 1px 1px 0 rgba(#1F0000,.1)
    // 名称介绍
    .furniture--title
        position: relative
        +REM(padding,$autoMargin)
        +bC($F)
        @extend %furniture--font
        >p
            color: $theme-color
        .mu-checkbox
            position: absolute
            +REM(right,$autoMargin*2)
            +REM(top,$autoMargin*1.5)
            .mu-icon
                color: $theme-color !important
    // 家具尺寸
    .furniture--sizeList
        li
            +REM(padding-top,$autoMargin/2)
            +REM(padding-bottom,$autoMargin/2)
            border-bottom: 1px solid rgba($badgeFont-color,.5)
            overflow: hidden
            p
                float: left
            span
                float: right
                color: $theme-color
</style>
