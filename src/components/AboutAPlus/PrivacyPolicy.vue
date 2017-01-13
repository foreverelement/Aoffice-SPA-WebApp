<!-- 隐私政策 -->
<template>
    <div id="privacyPolicy">
        <p class="describe--text"> {{ describe.title }} </p>
        <AutoTemplate :aboutAPlus_auto_Arr = privacyPolicy_Arr />
        <!-- 原则3下的条款 -->
        <p class="principle3" v-for = "item in principle3_Arr"> {{ item.textContent }} </p>
        <!-- 免责条款 -->
        <div class="privacyPolicy--box disclaimer">
            <h3> {{ disclaimer.title }} </h3>
            <p> {{ disclaimer.textContent }} </p>
            <!-- 免责条款 具体条款 -->
            <p class="disclaimer--Arr" v-for = "item in disclaimer_Arr">
                {{ item.textContent }}
            </p>
        </div>
        <!-- 法律条款 -->
        <div class="privacyPolicy--box terms">
            <h3> {{ terms.title }} </h3>
            <p class="terms--Arr" v-for = "item in terms.terms_Arr">
                {{ item.textContent }}
            </p>
            <p class="termsInfo--Arr" v-for = "item in terms.termsInfo_Arr">
                {{ item.textContent }}
            </p>
        </div>
    </div>
</template>
<script>
import AutoTemplate         from    './AboutAPlus_autoTemplate.vue'         // 通用渲染数组模板
const components = { AutoTemplate }
export default {
    data() {
        return {
            describe: {
                title:              `隐私权是您的重要权利。向我们提供您的个人信息是基于对我们的信任，相信我们会以负责的态度对待您的个人信息。我们
                                    认为您提供的信息只能用于帮助我们为您提供更好的服务。因此，我们制定了艾迦办公个人信息保密制度以保护您的个人信息。
                                    艾迦办公的个人信息保密制度摘要如下：`
            },
            privacyPolicy_Arr: [
                {
                    title:         `保密：`,
                    textContent:   `通常，您能在匿名的状态下访问我们的应用并获取信息。在我们请求您提供有关信息之前，我们会解释这些信息的用途。在通常
                                    情况下，这类服务要求您提供一个手机号码、真实姓名以及地址等基本信息，有时我们也会请您提供更多的信息。我们这样做是
                                    为了使我们更好的了解您的需求，以便向您提供更有效的服务。我们收集的信息包括姓名、地址、电话号码、需求相关等。您有
                                    权随时决定不接受来自我们的任何资料。我们将采取合理的措施尽最大可能保护您的个人资料。每当您提供给我们信息时，我们
                                    将采取合理的措施保护您的个人资料，我们也将采取合理的安全手段保护已存储的个人资料。除非根据法律或政策的强制性规定
                                    ，在未得到您的许可之前，我们不会把您的任何个人资料提供给无关的第三方。但是，如果您要求我们提供特定客户服务，我们
                                    则需要把您的姓名和相关信息提供给第三者。`
                },
                {
                    title:         `隐私权原则：`,
                    textContent:   `每个用户都要对其在艾迦办公网络平台中的所有活动和事件负全责。由于您的隐私权对我们而言是相当重要的，因此，公布这份
                                    隐私权声明的艾迦办公会根据下列五项原则管理涉及隐私的信息。`
                },
                {
                    title:         `原则一：`,
                    textContent:   `每当艾迦办公需要识别您的身份或与您联络时，会明确的询问所需的资料，即个人资料。一般而言，当您通过网站要求提供特别
                                    服务，或是如参加积分奖励等，便会被询问到这项资料。可能的话，艾迦办公会利用一些方法，确认您的个人资料的正确性与
                                    时效性。`
                },
                {
                    title:         `原则二：`,
                    textContent:   `如果想要将个人资料用在其他用途上，艾迦办公会提供您如何拒绝这项服务的说明。您可以依照艾迦办公的说明，拒绝这项服务。`
                },
                {
                    title:         `原则三：`,
                    textContent:   `艾迦办公也许会因法律要求公开个人资料，或者因善意确信这样的作法对于下列各项有其必要性：`
                }
            ],
            principle3_Arr: [
                {
                    textContent:    `(1) 符合法律公告或遵守适用于艾迦办公站点的合法程序；`
                },
                {
                    textContent:    `(2) 保护艾迦办公的用户权利或财产；`
                },
                {
                    textContent:    `(3) 在紧急的情况下，为了保护艾迦办公及他们的用户或会员之个人或公众安全。`
                }
            ],
            disclaimer: {
                title:              `免责条款：`,
                textContent:        `有下列情况之一的，艾迦办公不承担任何法律责任：`
            },
            disclaimer_Arr: [
                {
                    textContent:    `(1) 由于您将用户专属信息告知他人或与他人共享帐户，而导致的任何个人资料泄露；`
                },
                {
                    textContent:    `(2) 任何由于计算机问题、黑客攻击、计算机病毒侵入或发作、政府管制等造成的暂时性关闭，使网络无法正常运行而造成的个人资料
                                    泄露、丢失、被盗用或被窜改；`
                },
                {
                    textContent:    `(3) 由于与本网站链接的其他网站所造成的个人资料泄露及由此而导致的任何法律争议和后果；`
                },
                {
                    textContent:    `(4) 因不可抗力而引起的任何后果。`
                }
            ],
            // 条款
            terms: {
                title:              `根据《中华人民共和国宪法》和相关法律法规规定，在保护公民合法言论自由的同时，禁止利用互联网、通讯工具、媒体以及其他方式从事以下行为：`,
                terms_Arr: [
                    {
                        textContent: `(1) 组织、煽动抗拒、破坏宪法和法律、法规实施的。`
                    },
                    {
                        textContent: `(2) 捏造或者歪曲事实，散布谣言，妨害社会管理秩序的。`
                    },
                    {
                        textContent: `(3) 组织、煽动非法集会、游行、示威、扰乱公共场所秩序的。`
                    },
                    {
                        textContent: `(4) 从事其他侵犯国家、社会、集体利益和公民合法权益的。`
                    }
                ],
                termsInfo_Arr: [
                    {
                        textContent: `管理部门将依法严加监管上述行为并予以处理；对构成犯罪的，司法机关将追究刑事责任。`
                    },
                    {
                        textContent: `如何更新您已经提供给艾迦办公的个人信息，如果您的电话或地址发生变化，您可以按官网公布的联系方式通知艾迦办公，以帮助我们保持您的资料的准确性。`
                    },
                    {
                        textContent: `艾迦办公欢迎您对这项保密制度给予评论并提出质疑。我们将致力于保护您的个人信息，尽全力保证这些信息的安全。由于网上技术的发展突飞猛进，
                                     我们会随时更新我们的信息保密制度。所有的修订将在此站点公布。`
                    }
                ]
            }
        }
    },
    components: components
}
</script>
<style lang="sass">
@import '../../sass/main.sass'

#privacyPolicy
    +auto--contentBox($autoMargin,$title-color,$title-size,$badgeFont-color,$text-size)
    +bC($F)
    .describe--text
        +REM(margin-bottom,$autoMargin)
    .privacyPolicy--box
        +REM(margin-top,$autoMargin)
</style>
