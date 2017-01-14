<!-- 联合办公 ( 房源详情页 ) 模版页面 -->
<template>
    <div class="co-working_router">
        <h3> {{ title }} </h3>
        <p> 联合办公 </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: this.$route.params.id
        }
    }
}
</script>
<style lang="sass">
@import '../../sass/main'

.co-working_router
</style>
