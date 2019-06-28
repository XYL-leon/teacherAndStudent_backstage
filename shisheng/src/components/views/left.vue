<template>
  <div class="left_wrapper">
    <img class="test01" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561637200927&di=9751f8504c43aa2488a132ac1707f8e9&imgtype=0&src=http%3A%2F%2Fwww.86ps.com%2FUpLoadFiles%2Fjpg%2F2011-10%2F2011101309580250612.jpg" alt="">
    <ul class="left_ul">
      <router-link to="/index/home" class="left_li page" v-if="isAdmin=='0'">
        <span class="iconfont">
          <i class="el-icon-s-home"></i>
        </span>
        <p class="left_mes">系统首页</p>
      </router-link>
      <!-- 管理员权限视图 -->
      <router-link to="/index/teacher" active-class="select" class="left_li" v-if="isAdmin=='0'">
        <span class="iconfont icon-laoshiguanli"></span>
        <p class="left_mes">教职工管理</p>
      </router-link>
      <router-link to="/index/student" active-class="select" class="left_li" v-if="isAdmin=='0'">
        <span class="iconfont icon-xueshengguanli"></span>
        <p class="left_mes">学生管理</p>
      </router-link>
      <!-- 教师权限视图 -->
      <router-link to="/index/PublishJob" active-class="select" class="left_li" v-if="isAdmin=='1'">
        <span class="iconfont icon-zuoye"></span>
        <p class="left_mes">发布作业</p>
      </router-link>
      <router-link to="/index/jobLibrary" active-class="select" class="left_li" v-if="isAdmin=='1'">
        <span class="iconfont icon-zuoyezhongxin"></span>
        <p class="left_mes">作业库</p>
      </router-link>
      <router-link
        to="/index/checkHomeWork"
        active-class="select"
        class="left_li"
        v-if="isAdmin!='0'"
      >
        <span class="iconfont icon-chakan"></span>
        <p class="left_mes">查看作业</p>
      </router-link>
      <!-- 学生权限视图 -->
      <router-link to="/index/homework" active-class="select" class="left_li" v-if="isAdmin=='2'">
        <span class="iconfont icon-xiezuoye"></span>
        <p class="left_mes">做作业</p>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: {},
  data() {
    return {
      isAdmin: ""
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {
    // 0-超管
    // 1-老师
    // 2-学生
    this.isAdmin = localStorage.getItem("isAdmin");
  }
};
</script>
<style lang='stylus' scoped>
@import '../../assets/iconfont/iconfont.css';
@import '../../common/stylus/index.styl';

.left_wrapper 
  position relative
  z-index 1
  .test01
    position absolute
    left 0
    top 0
    z-index -1
    width 180px
    height 589px
    opacity .7
    box-shadow 0 3px 15px 0 #000
.page {
  background: #FF4500 !important;
}

.left_ul {
  min-width: 170px;
}

.left_li {
  // background: blue;
  background: $bgColor02;
  opacity .9
  height: 45px;
  display: flex;
  margin-bottom: 5px;
  border-radius: 3px;
  overflow: hidden;

  &:hover {
    background: $bgHover;
    cursor: pointer;
  }

  .iconfont {
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: white;
    font-size: 18px;
    // background: red;
  }

  .left_mes {
    flex: 1;
    line-height: 45px;
    padding-left: 3px;
    color: white;
    font-size: 15px;
  }
}

.select {
  background: $bgHover;
  // background: red;
  cursor: pointer;
}
</style>
