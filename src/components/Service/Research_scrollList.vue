<!-- Service 卷轴列表 -->
<template>
    <div class="demo-infinite-container">
        <mu-list>
            <template v-for="item in list">

                <mu-row gutter class="research--list">
                    <!-- 盒子内容 -->
                    <mu-col width="50" tablet="33" desktop="25" class="research--box" v-for="item in research_info" >
                        <img :src="item.imgUrl" @click="toResearchDetails(item.code)" />
                        <!-- 文字内容 -->
                        <div class="research--content" @click="toResearchDetails(item.code)" >
                            <h4> {{ item.title }} </h4>
                            <p> {{ item.subTitle }} </p>
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
            research_info: [
                // 设置12个测试
                {
                    imgUrl:     'http://images.aplusoffice.cn/images/building/B000000009/real/real2.jpg',
                    title:      '上海漕河泾新兴1',
                    subTitle:   '上海市徐汇区桂平路',
                    code:       'ig0001'
                },
                {
                    imgUrl:     'http://images.aplusoffice.cn/images/building/B000000009/real/real1.jpg',
                    title:      '上海漕河泾新兴2',
                    subTitle:   '上海市徐汇区桂平路',
                    code:       'ig0001'
                },
                {
                    imgUrl:     'http://images.aplusoffice.cn/images/building/B000000009/real/real4.jpg',
                    title:      '上海漕河泾新兴3',
                    subTitle:   '上海市徐汇区桂平路',
                    code:       'ig0001'
                },
                {
                    imgUrl:     'http://images.aplusoffice.cn/images/building/B000000009/real/real3.jpg',
                    title:      '上海漕河泾新兴4',
                    subTitle:   '上海市徐汇区桂平路',
                    code:       'ig0001'
                },
                {
                    imgUrl:     'http://images.aplusoffice.cn/images/building/real4-default.jpg',
                    title:      '上海漕河泾新兴5',
                    subTitle:   '上海市徐汇区桂平路',
                    code:       'ig0001'
                },
                {
                    imgUrl:     'http://images.aplusoffice.cn/images/building/real3-default.jpg',
                    title:      '上海漕河泾新兴6',
                    subTitle:   '上海市徐汇区桂平路',
                    code:       'ig0001'
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
                for (let i = this.num; i < this.num + 4; i++) {
                    this.list.push('item' + (i + 1))
                }
                this.num += 1
                this.loading = false
            }, 1500)
        },
        toResearchDetails: function (toPageCode) {
            location.href = '#/service/research/' + toPageCode
        }
        //,
        //consoloMsg: function()
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
    .research--list
        .research--box
            +REM(margin-bottom,16px)
            img
                display: block
                width: 100%
                object-fit: cover
            .research--content
                padding: 4%
                    left: 8%
                +bC($F)
                h4
                    +REM(padding-top,4px)
                    +REM(padding-bottom,4px)
                    color: $title-color
                    +REM(font-size,$text-size)
                p
                    color: $badgeFont-color
                    +REM(font-size,$badge-size)
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
