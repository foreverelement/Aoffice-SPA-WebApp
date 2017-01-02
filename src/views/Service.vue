<!-- "服务"页面 -->
<template>
    <div id="service">
        <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="33" class="service-Box" v-for="item in service_info">
                <!-- 判断图片位置 -->
                <div v-if="item.imgLeftFloat" v-on:click="toUrl( item.hrefUrl )">
                    <img :src="item.imgUrl" />
                    <div class="service-Describe">
                        <div>
                            <h2> {{ item.title }} </h2>
                            <p> {{ item.subTitle }} </p>
                        </div>
                    </div>
                </div>

                <div v-else v-on:click="toUrl( item.hrefUrl )">
                    <div class="service-Describe">
                        <div>
                            <h2> {{ item.title }} </h2>
                            <p> {{ item.subTitle }} </p>
                        </div>
                    </div>
                    <img :src="item.imgUrl" />
                </div>
            </mu-col>
        </mu-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            service_info: [
                {
                    imgUrl: require('../assets/images/find.png'),
                    title: '委托找房',
                    subTitle: 'Find Properties',
                    imgLeftFloat: true,
                    hrefUrl: 'findProperties'
                },
                {
                    imgUrl: require('../assets/images/putIn.png'),
                    title: '投放房源',
                    subTitle: 'Put in Properties',
                    imgLeftFloat: false,
                    hrefUrl: 'putInProperties'
                },
                {
                    imgUrl: require('../assets/images/pic_furnichure.png'),
                    title: '办公家具',
                    subTitle: 'Office Furniture',
                    imgLeftFloat: true,
                    hrefUrl: 'furnichure'
                },
                {
                    imgUrl: require('../assets/images/pic_decoration.png'),
                    title: '办公装修',
                    subTitle: 'Office Decoration',
                    imgLeftFloat: false,
                    hrefUrl: 'decoration'
                },
                {
                    imgUrl: require('../assets/images/pic_research.png'),
                    title: '外出考察',
                    subTitle: 'Marketing Research',
                    imgLeftFloat: true,
                    hrefUrl: 'research'
                },
                {
                    imgUrl: require('../assets/images/pic_training.png'),
                    title: '员工培训',
                    subTitle: 'Staff Training ',
                    imgLeftFloat: false,
                    hrefUrl: 'training'
                },
                {
                    imgUrl: require('../assets/images/pic_computer.png'),
                    title: '办公电脑',
                    subTitle: 'Office Computer',
                    imgLeftFloat: true,
                    hrefUrl: 'computer'
                }
            ]
        }
    },
    mounted: function () {
        this.heightRevise()
    },
    methods: {
        // 目的: 通过读取图片的宽度，将service-Box盒子的高度设为相同高度.保持比例为 1:1
        heightRevise: function(){
            // 不能立刻执行,因为ajax内的数据还没有塞入,所以会是空值
            setTimeout(() => {
                const img_Arr = document.getElementsByTagName('img')
                const img_width = img_Arr[0].offsetWidth                //只需要获取第一个对象的宽度即可
                // console.log(img_width)
                for (var i = 0; i < img_Arr.length; i++){
                    img_Arr[i].style.height = img_width + 'px'
                }
            }, 100)
        },
        // 目的: 执行跳转
        toUrl: function (message) {
            location.href='#/service/' + message
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../sass/main'

#service
    +REM(margin-bottom,80px)
    .service-Box >div
        @extend %flexWrap
        +bC($F)
        img,.service-Describe
            @extend %flexCenter
            width: 50%
            text-align: center
        h2
            +REM(font-size,$title-size)
            @extend %bold
            color: $EnterpriseService-color
            +REM(line-height,22px)
        p
            +REM(font-size,$badge-size)
            color: $badgeFont-color
</style>
