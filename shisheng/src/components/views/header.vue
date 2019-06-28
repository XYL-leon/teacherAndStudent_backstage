<template>
  <div class="wrapper01 clearfix">
    <p class="left">欢迎使用师生管理系统</p>
    <div class="right">
      <div class="right_mes">
        <img
          class="pic"
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4100987808,2324741924&fm=27&gp=0.jpg"
          alt
        >
        <p class="name">欢迎：{{username}}</p>
        <div class="right_mes_hover">
          <div to="/index/student" active-class="select" class="left_li01">
            <i class="iconfont el-icon-switch-button"></i>
            <!-- <span class="iconfont icon-xueshengguanli"></span> -->
            <p @click="tuichu()" class="left_mes">退出登录</p>
          </div>
        </div>
      </div>
      <div class="right_bi">
        <i class="el-icon-edit"></i>
      </div>
      <div class="right_shezhi">
        <i class="el-icon-s-tools"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
export default {
  components: {},
  props: {},
  data() {
    return {
      username: "",
      s: [
        { name: "iphone6", num: 3, price: 100 },
        { name: "iphone7", num: 6, price: 200 },
        { name: "iphone8", num: 1, price: 150 }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    tuichu() {
      this.$http({
        url: API.Exit
      }).then(d => {
        this.$message({
          message: d.data.info,
          type: "success"
        });
        this.$router.replace("/login");
      });
    }
  },
  mounted() {
    this.username = localStorage.getItem("username");

    for (var i=0;i<10;i++ ) {
      setTimeout(function(){
        console.log(i)
      })
    }



  } 
};
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/index.styl';

.left {
  float: left;
  // background red
  height: $headerHeight;
  line-height: $headerHeight;
  padding: 0 $padding02;
  font-size: 20px;
  color: white;
}

.right {
  float: right;
  height: $headerHeight;
  padding: 0 $padding02;
  display: flex;
  color: white;

  .right_mes {
    position: relative;
    min-width: 120px;

    p {
      display: inline-block;
      line-height: $headerHeight;
    }
  }

  .right_bi {
    width: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: white;
    font-size: 18px;
  }

  .right_shezhi {
    width: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: white;
    font-size: 18px;
  }
}

.pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
}

.right_mes {
  &:hover {
    .right_mes_hover {
      display: block;
    }
  }
}

.right_mes_hover {
  display: none;
  cursor: pointer;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 50px;
  width: 100%;
  min-width: 100px;
  // height: 100px;
  // background: red;
}

.left_li01 {
  // background: blue;
  background: $bgColor02;
  height: 45px;
  display: flex;
  margin-bottom: 5px;
  border-radius: 3px;
  overflow: hidden;
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
</style>
