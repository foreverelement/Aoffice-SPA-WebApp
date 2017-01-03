<!-- '服务'模块 - 员工培训 -->
<template>
    <div id="Service_Training">

    </div>
</template>

<script>
export default {
    data() {
        return {
            coreCourses: {
                title: '核心课程',
                textContent:    '以讲授中高层管理、人际行为风格和技巧性课程见长，高效会议管理，演示技巧，培训师培训，职业素养培训等。' +
                                '可提供对企业经理的国际最新训练模式——“教练式”服务，按照《美国领导管理研究中心》的流程，对参训人员进行为期' +
                                '二到四个月的针对性跟踪辅导，将参训人员训练为有国际水准的经理人。'
            },
            coursesImg: {
                imgUrl: require('../../../assets/images/coursesImg.png')
            },
            openCourses: {
                title: '公开课程',
                coursesArr: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ]
            }
        }
    },
    components: components
}
</script>

<style lang="sass" scoped>
@import '../../../sass/main'

#Service_Research
    .demo-infinite-container
        margin-bottom: 1px
</style>
