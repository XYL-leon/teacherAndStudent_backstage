<template>
  <div class="wrapper">
      <v-header class="header"></v-header>
      <v-main class="main"></v-main>
  </div>
  <!-- 
    二级划分：

      教职工管理 teacher management
      学生管理 student management

      发布作业 Publish job
      作业库 job library 
      查看作业 Check the homework

      做作业 do homework
   -->
</template>

<script type="text/ecmascript-6">
import VHeader from "../views/header";
import VMain from "../views/main";
export default {
  components: {
    VHeader,
    VMain
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/index.styl'
.wrapper 
  height 100vh
  display flex
  flex-direction column
  // color red
  .header
    height $headerHeight
    background $bgColor01
  .main
    flex 1
    background $bgColor02
    padding $padding01 $padding02 $padding02;  // 6 10 10


</style>
