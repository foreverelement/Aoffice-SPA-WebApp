<!-- '服务'模块 - 员工培训 -->
<template>
    <div id="Service_Training">
        <div class="training--info bC--while">                                                              <!-- 核心课程 -->
            <Title :title_info = coreCourses />
            <p> {{ coreCourses.textContent }} </p>
        </div>
        <div class="training--info bC--lucency">                                                            <!-- 课程图片 -->
            <img :src="coursesImg.imgUrl" />
        </div>
        <div class="training--info bC--while">                                                              <!-- 公开课程 -->
            <Title :title_info = openCourses />
            <div class="openCourses--box" v-for="item in openCourses.coursesArr">
                <h3> {{ item.title }} </h3>
                <p> {{ item.textContent }} </p>
            </div>
        </div>
        <div class="training--info bC--while">                                                              <!-- 海外交流 -->
            <Title :title_info = overseasExchange />
            <img :src="overseasExchange.imgUrl" />
            <div class="overseasExchange--box" v-for="item in overseasExchange.exchangeArr">
                <h3> {{ item.title }} </h3>
                <p> {{ item.textContent }} </p>
            </div>
        </div>
        <div class="training--info bC--while">                                                              <!-- 讲师介绍 -->
            <Title :title_info = teacherIntroduction />
            <div class="teacherIntroduction--box" v-for="item in teacherIntroduction.teacherArr">
                <img :src="item.imgUrl" />
                <div class="teacherInfo" v-for="item in item.teacherInfoArr">
                    <h3> {{ item.title }} </h3>
                    <p> {{ item.textContent }} </p>
                </div>
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
            coreCourses: {
                title: '核心课程',
                backgroundColor: '#FFF',
                textContent:    '以讲授中高层管理、人际行为风格和技巧性课程见长，高效会议管理，演示技巧，培训师培训，职业素养培训等。'
                            +   '可提供对企业经理的国际最新训练模式——“教练式”服务，按照《美国领导管理研究中心》的流程，对参训人员进行为期'
                            +   '二到四个月的针对性跟踪辅导，将参训人员训练为有国际水准的经理人。'
            },
            coursesImg: {
                imgUrl: require('../../../assets/images/coursesImg.png')
            },
            openCourses: {
                title: '公开课程',
                backgroundColor: '#FFF',
                coursesArr: [
                    {
                        title: '秘书/助理公开班课（13期）',
                        textContent:    '学员共来自近300个企业超过900名各大公司高级秘书/助理（如摩托罗拉、爱立信、佳能、松下、中纺、兆维科技、'
                                    +   '东软集团、ABB、通用、联想、长天科技、中国普天、诺华制药、拜耳、奇正藏药、爱尔康眼科医院、双鹤药业、葛'
                                    +   '兰素史克、可口可乐、艾科泰、马士基、DHL、UT斯达康、施耐德、阿克苏诺贝尔、万科、富士通天、华燊燃气、家'
                                    +   '世界集团、光大永明、平安保险、实达、液化空气、霍尼韦尔、天津日商、国信集团、弗兰德机电、北京肯德基、必'
                                    +   '胜客、三星、中国外运、SAP、恩布拉科、湘财证券、世纪证券、中关村证券等）'
                    },
                    {
                        title: '上海世联，厦门极速，上海谊威，河南中世商务公开课',
                        textContent:    '学员来自120多个企业近1500位学员（柯达、施乐、艾利中国、西门子、阿里巴巴、阿尔卡特、厦门建华集团、悦华国'
                                    +   '际会展中心等）'
                    },
                    {
                        title: '北京招聘面谈技巧公开课',
                        textContent:    '学员来自50多个企业（如ABB、摩托罗拉、拉法基、丰田、实达、施耐德、光大永明保险）等'
                    },
                    {
                        title: '中国人民大学人力资源经理研修班、部门经理班授课',
                        textContent:    '学员来自200多个企业'
                    },
                    {
                        title: '美国领导力中心在北京开设的“有效的个人生产力”公开课程',
                        textContent:    '学员为多家金融机构行长与企业总经理'
                    },
                    {
                        title: '北大在线/51E华点通及河南中世商务',
                        textContent:    '学员来自50多个企业（如ABB、摩托罗拉、拉法基、丰田、实达、施耐德、光大永明保险）等'
                    },
                    {
                        title: '企业内训',
                        textContent:    '佳能中国、中国农业银行、交通银行、建设银行、光大银行总行、中信银行总行、招商银行、厦门及泉州商业银行、'
                                    +   '北京商业银行、中国五矿集团、中海油集团、科麦奇石油、渤海石油、小护士实业有限公司、爱立信公司、TCL集团、'
                                    +   '中国网通、诺华制药、方正集团、联想电脑、神州数码、李宁公司，山东九阳、光大永明保险、SGS通标、LG集团、'
                                    +   '拉法基铝酸盐、明天控股集团、东方商旅网络、深圳长城电脑、亚信科技、中国平安保险、广州美的、京信通信、'
                                    +   '天津万科、顺驰集团、新大洲本田等。'
                    }
                ]
            },
            overseasExchange: {
                title: '海外交流',
                backgroundColor: '#FFF',
                imgUrl: require('../../../assets/images/picOverseas@2x.png'),
                exchangeArr: [
                    {
                        title: '2013年纽约名校金融实习项目特聘顾问讲师',
                        textContent:    '在美国华尔街福汇总部为来自哥伦比亚，纽约大学，清华大学等著名学府的50个优秀金融实习精英授课获得好评。'
                    },
                    {
                        title: '2014年英国名校金融实习项目特聘顾问讲师',
                        textContent:    '在英国伦敦为来自剑桥、牛津、曼彻斯特大学、美国卡内基美隆、清华、复旦、同济大学，中山大学等著名学府的40'
                                    +   '个优秀金融实习精英授课获得好评。'
                    }
                ]
            },
            teacherIntroduction: {
                title: '讲师介绍',
                backgroundColor: '#FFF',
                // 如果添加讲师 可以直接 向 'teacherArr' 数组添加对象
                teacherArr: [
                    {
                        imgUrl: require('../../../assets/images/pic_profile.png'),
                        // 如需自定义讲师的个人信息数量, 可向 'teacherInfoArr' 数组添加对象 —— 模版将会二次循环信息内容
                        teacherInfoArr: [
                            {
                                title: '工作经历',
                                textContent:    '   懿萌女士曾就职于美国JRC有限公司和日佳电讯器材有限公司，为来自六个国家和地区的总经理担任秘书工作；'
                                            +   '先后在美国可口可乐公司、美国铝业集团国际瓶盖系统有限公司两个世界百强跨国公司从事人力资源管理工作九年'
                                            +   '的时间，先后从事过HR的各个领域工作，直到成为中国区的人力资源经理；九九年进入企业培训与咨询领域，加入'
                                            +   '最早进入国内的顾问公司谊威（国际）管理顾问有限公司先后担任华北区客户销售经理，全国客户服务总监，副总'
                                            +   '经理及中国区总经理/高级顾问职务。2001年回北京创业任北京睿德晟企业管理顾问有限公司的总经理/高级顾问，'
                                            +   '总部在北京在天津有分公司。2005年又创立了北京九州汇泽管理顾问有限公司，至今担任董事长兼首席顾问。'
                                            +   '其在历时20多年的职业商务生涯中，对不同的企业文化及工作风格有实际经历和特别的研究。她的成功转型成为业界'
                                            +   '的佳话，其在培训界有很高的声誉，时任多家著名咨询培训机构的资深顾问及高级培训师，并被《中国青年报》评为'
                                            +   '2001年度中国十大最佳推荐培训师。成为中央二套大型人力资源节目《绝对挑战》特邀顾问，并作为杨澜主持的《天'
                                            +   '下女人》栏目的特邀嘉宾。'
                                            +
                                                '2004年懿萌又回到了企业，出任宝源投资控股有限公司和投资过亿元的润鼎科技发展有限公司的总经理，用实战经验'
                                            +   '来丰富自己，2009年出任睿森（上海）投资有限公司总经理，为更多的中外企业及金融机构等高层经理人提供更多的'
                                            +   '辅导，2012年参与投资实体企业新睿森（上海）复合材料有限公司进入高科技领域，2014年参与投资了德国大口袋转'
                                            +   '运项目。2016年底加入青岛钲世集团做独立董事兼顾问。'
                            },
                            {
                                title: '认证资格',
                                textContent:    '拥有新加坡国立大学人力资源专业研究生学历的她，也毕业于中国人民大学在职总裁EMBA班。曾作为美国可口可乐公司的'
                                            +   '人力资源主管，成为国内最早从事培训工作的专业人事。接受过众多海内外专业的训练，具有ISO9000的认证内审员资格。'
                                            +   '因为其深厚的人力资源及顾问公司的经历及授过专业的TTT培训，成为美国LIFO行为风格第一位在中国大陆的授证分析师和'
                                            +   '讲师，并与台湾和大陆的心理学专家一同进行本土化发展，现成为APEC人际行为风格目前唯一的大陆讲师。并拥有美国赫曼'
                                            +   '全脑优势系统(HBDI)的分析师及讲师资格；拥有中国人民大学工商管理研修中心的资格认证，特别值得一提的是，经过'
                                            +   '《美国领导管理研究中心LMI》的严格程序， 她成为拥有 “企业教练”专业认证资质的本土顾问，是目前国内为数不多的'
                                            +   '专业 “管理教练”。'
                            },
                            {
                                title: '咨询顾问专长',
                                textContent:    '参与为多家企业进行过人力资源及管理咨询服务，有专业的咨询经验，并担任几家公司的常年管理顾问。参与了几家'
                                            +   '注明公司的并购重组融资。咨询专长为：高层领导人的高效生产力辅导、人力资源系统辅导、职业生涯规划发展、员工关系'
                                            +   '、人才甄选、培训规划、企业文化及中国大陆人事管理问题研究等。'
                            }
                        ]
                    }
                ]
            }
        }
    },
    components: components
}
</script>

<style lang="sass" scoped>
@import '../../../sass/main'

#Service_Training
    .training--info                                                                                         // '培训'信息容器
        +auto--contentBox($autoMargin,$title-color-light,$title-size,$badgeFont-color,$text-size)
        +REM(margin-top,$autoMargin)
        img
            @extend %imgCover
        &:first-child
            margin: 0
        &:last-child
            +REM(margin-bottom,$autoMargin)
    .bC--while                                                                                              // 容器盒子 - 白色背景
        +bC($F)
        box-shadow: 0 .5px 1px rgba(0,0,0,0.12)
    .bC--lucency                                                                                            // 容器盒子 - 透明背景
        +bC(rgba($F,.1))
    .openCourses--box, .overseasExchange--box, .teacherInfo                                                 // 公开课程 / 海外交流 / 教师信息介绍  ——box通用样式
        +REM(margin-top,$autoMargin)
</style>
