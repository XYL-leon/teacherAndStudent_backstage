<template>
 <div class="main_wrapper">
     <v-left class="main_left"></v-left>
     <v-right class="main_right"></v-right>
 </div>
</template>

<script type="text/ecmascript-6">
import vLeft from './left'
import vRight from './right'

export default {
 components: {
     vLeft,
     vRight
 },
 props: {},
 data () {
 return {
 };
 },
 watch: {},
 computed: {},
 methods: {},
 mounted () {}
};
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/index.styl'
    .main_wrapper
        display flex
        .main_left
            width 170px
            background $bgColor01
            border-radius 3px
            padding 5px
        .main_right
            flex 1
            background $bgColor03
            border 5px solid $bgColor01 
            border-radius 3px
            margin-left 10px
</style>
