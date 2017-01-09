<!-- Service 卷轴列表 -->
<template>
    <div class="demo-infinite-container">
        <mu-list>
            <template v-for="item in list">
                <mu-row gutter class="product--list">
                    <!-- 盒子内容 -->
                    <mu-col width="50" tablet="33" desktop="25" class="product--box" v-for="item in testGrid_info">
                        <!-- 图片 -->
                        <!-- @click="returnService()" -->
                        <img :src="item.imgUrl" @click="toFurnitureDetails(item.furnitureID)" />
                        <!-- 文字内容 -->
                        <div class="product--content">
                            <h4> {{ item.title }} </h4>
                            <p> ￥ <b> {{ item.subTitle }} </b> </p>
                        </div>
                    </mu-col>
                </mu-row>

            </template>
        </mu-list>
        <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
    </div>
</template>

<script>
export default {
    data () {
        const list = []
        for (let i = 0; i < 1; i++) {
            list.push('item' + (i + 1))
        }
        return {
            list,
            num: 1,
            loading: false,
            scroller: null,
            // 测试盒子内容
            testGrid_info: [
                // 设置12个测试
                {
                    imgUrl: 'http://images.aplusoffice.cn/images/furniture/es002/thumbnail.jpg',
                    title: '舒适皮质座椅1',
                    subTitle: '240',
                    furnitureID: 'A001'
                },
                {
                    imgUrl: 'http://images.aplusoffice.cn/images/furniture/es003/thumbnail.jpg',
                    title: '舒适皮质座椅2',
                    subTitle: '240',
                    furnitureID: 'A002'
                },
                {
                    imgUrl: 'http://images.aplusoffice.cn/images/furniture/es004/thumbnail.jpg',
                    title: '舒适皮质座椅3',
                    subTitle: '240',
                    furnitureID: 'A003'
                },
                {
                    imgUrl: 'http://images.aplusoffice.cn/images/furniture/es005/thumbnail.jpg',
                    title: '舒适皮质座椅4',
                    subTitle: '240',
                    furnitureID: 'A004'
                },
                {
                    imgUrl: 'http://images.aplusoffice.cn/images/furniture/es006/thumbnail.jpg',
                    title: '舒适皮质座椅5',
                    subTitle: '240',
                    furnitureID: 'A005'
                },
                {
                    imgUrl: 'http://images.aplusoffice.cn/images/furniture/es007/thumbnail.jpg',
                    title: '舒适皮质座椅6',
                    subTitle: '240',
                    furnitureID: 'A006'
                }
            ]
        }
    },
    mounted () {
        this.scroller = this.$el
    },
    methods: {
        loadMore () {
            this.loading = true
            setTimeout(() => {
                for (let i = this.num; i < this.num + 2; i++) {
                    this.list.push('item' + (i + 1))
                }
                this.num += 1
                this.loading = false
            }, 1500)
        },
        say: function (message) {
            alert(message)
        },
        toFurnitureDetails: function (toPageNum) {
            location.href='#/service/furniture/' + toPageNum
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../sass/main'

.demo-infinite-container
    width: 100%
    overflow: auto
    -webkit-overflow-scrolling: touch
    /* row 家具产品列表 */
    .product--list
        +REM(padding-top,16px)
        .product--box
            +REM(margin-bottom,16px)
            img
                display: block
                width: 100%
                object-fit: cover
            .product--content
                padding: 4%
                    left: 8%
                +bC($F)
                h4
                    +REM(padding-top,4px)
                    +REM(padding-bottom,4px)
                    color: $title-color
                    +REM(font-size,$text-size)
                p
                    color: $theme-color
                    +REM(font-size,$badge-size)
                p >b
                    color: $theme-color
                    font-weight: normal
            /* 奇数行 */
            &:nth-of-type(odd)
                padding:
                    left: 4%
                    right: 1%
            /* 偶数行 */
            &:nth-of-type(even)
                padding:
                    left: 1%
                    right: 4%
</style>
