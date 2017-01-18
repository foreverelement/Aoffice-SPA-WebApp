<!-- Service 选择字段组件 ( 应用于: '办公家具'组件 ) -->
<template>
    <div class="Service_dropDownMenu">
        <mu-dropDown-menu :value="kind" @change="kindChange">
            <mu-menu-item value="1" title="种类不限"/>
            <mu-menu-item value="2" title="办公椅"/>
            <mu-menu-item value="3" title="职员桌"/>
            <mu-menu-item value="4" title="会议桌"/>
            <mu-menu-item value="5" title="经理桌"/>
            <mu-menu-item value="6" title="文件柜"/>
        </mu-dropDown-menu>
        <mu-dropDown-menu :value="price" @change="priceChange">
            <mu-menu-item value="1" title="价格从低到高"/>
            <mu-menu-item value="2" title="价格从高到低"/>
        </mu-dropDown-menu>
    </div>
</template>

<script>
export default {
    data () {
        return {
            kind: '1',
            price: '1'
        }
    },
    methods: {
        kindChange (value) {
            this.kind = value
        },
        priceChange (value) {
            this.price = value
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../../sass/main'

.Service_dropDownMenu
    position: fixed
    z-index: 2
    @extend %flexWrap
    width: 100%
    border-bottom: 1px solid rgba($badgeFont-color,.3)
    >.mu-dropDown-menu
        flex: 1
        +bC($F)
        &:first-child
            border-right: 1px solid rgba($badgeFont-color,.3)
</style>
