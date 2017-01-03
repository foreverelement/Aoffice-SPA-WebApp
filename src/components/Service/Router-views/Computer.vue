<template>
    <div id="Service_Computer">
        <div class="computer--info">
            <Title :title_info=computer_title />
            <img :src="computer_title_img.imgUrl" />
        </div>

        <div class="computer--info">
            <Title :title_info=computer_info />
            <div class="computer_info_img" v-for="item in computer_info_img">
                <img :src="item.imgUrl" />
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
            computer_title: {
                title: '主营品牌',
                backgroundColor: '#FFF'
            },
            computer_title_img: {
                imgUrl: require('../../../assets/images/computer_logo.png')
            },
            computer_info: {
                title: '产品展示',
                backgroundColor: '#FFF'
            },
            computer_info_img: [
                { imgUrl: require('../../../assets/images/pic_computer_2.png') },
                { imgUrl: require('../../../assets/images/pic_computer_3.png') },
                { imgUrl: require('../../../assets/images/pic_computer_4.png') },
                { imgUrl: require('../../../assets/images/pic_computer_5.png') },
                { imgUrl: require('../../../assets/images/pic_computer_6.png') },
                { imgUrl: require('../../../assets/images/pic_computer_7.png') },
                { imgUrl: require('../../../assets/images/pic_computer_8.png') },
                { imgUrl: require('../../../assets/images/pic_computer_1.png') }
            ]
        }
    },
    mounted: function () {
        this.heightRevise()
    },
    methods: {
        heightRevise: function() {
            const appBar_Arr = document.getElementsByClassName('mu-paper-1')
            const appBar_height = appBar_Arr[0].offsetHeight                                            //只需要获取第一个对象的宽度即可
            // console.log(appBar_height)
            const service_content = document.getElementById("Service_Computer")
            service_content.style.marginTop = ( appBar_height + 16 ) + "px"
        }
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../../sass/main'

#index
    margin-bottom: 0

#Service_Computer
    .computer--info
        +REM(margin-top,16px)
        +REM(padding-bottom,16px)
        +bC($F)
        img
            width: 100%
            object-fit: cover
</style>
