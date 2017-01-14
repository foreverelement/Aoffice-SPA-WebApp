<!-- 办公楼 ( 房源详情页 ) 模版页面 -->
<template>
    <div class="office-building_router">
        <h3> {{ title }} </h3>
        <p> 办公楼 </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: this.$router.params.id
        }
    }
}
</script>
<style lang="sass">
@import '../../sass/main'

.office-building_router
</style>
