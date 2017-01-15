<!-- 联合办公 ( 房源详情页 ) 模版页面 -->
<template>
    <div class="co-working_router">
        <h3> {{ title }} </h3>
        <p> 联合办公 </p>
    </div>
</template>
<script>
import      { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            title: this.$route.params.id
        }
    }
    ,mounted: function() {
        this.setCoWorkingInfo()         // 获取store内 联合办公数据
    }
    ,methods:{
        // 目的: 通过ajax获取联合办公数据
        ...mapActions(['setCoWorkingInfo'])         // 执行异步
    }
    ,computed: mapGetters({ getCoWorkingInfo: 'getCoWorkingInfo' })
}
</script>
<style lang="sass">
@import '../../sass/main'

.co-working_router
</style>
