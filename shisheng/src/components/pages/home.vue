 <template>
  <div class="home_wrapper">
    <div class="home_top_mes">
      <div class="top_mes_one">
        <div class="mes_one_left">
          <i class="el-icon-s-custom icon"></i>
          <span class="person_mes">个人信息</span>
        </div>
        <div class="mes_one_right">
          <p class="user">
            <i class="el-icon-user-solid"></i>
            <span class="user_name">admin</span>
            <i class="el-icon-mobile-phone">&nbsp;</i>
            <i class="el-icon-message">&nbsp;</i>
            <i class="el-icon-postcard"></i>
          </p>
          <p class="type">账户类型：管理员</p>
          <p class="user_type">
            安全等级:
            <span class="dengji">中</span>
            <span class="yellow">&nbsp;继续努力</span>
          </p>
        </div>
      </div>
      <div class="top_mes_two">
        <div class="mes_one_left">
          <i class="el-icon-lock icon"></i>
          <span class="person_mes">系统权限</span>
        </div>
        <div class="mes_one_right">
          <p class="user">
            <i class="el-icon-warning"></i>
            享有该系统最高权限
          </p>
          <p class="type">
            <span class="iconfont icon-laoshiguanli"></span>
            创建删除教职工
          </p>
          <p class="user_type">
            <span class="iconfont icon-xueshengguanli"></span>
            创建删除学生
          </p>
        </div>
      </div>
      <div class="top_mes_three hover">
        <div class="mes_one_left share">
          <i class="el-icon-share icon"></i>
          <span class="person_mes">分享该系统</span>
        </div>
        <div class="mes_one_right">
          <p class="user">
            <i class="el-icon-setting"></i>
            操作简单、功能齐全
          </p>
          <p class="type">
            <i class="el-icon-time"></i>
            摆脱繁杂、轻松管理
          </p>
          <p class="user_type">
            <i class="el-icon-thumb"></i>
            方便老师、服务同学
          </p>
        </div>
      </div>
    </div>
    <div class="home_jieshao">
      <div class="home_jieshao_tit">&nbsp;更多功能</div>
      <div class="home_jiaoshao_box">
        <div class="jieshao_lbox lbox01">
          <p class="jieshao_p1">服务状态</p>
          <p class="jieshao_p2">获取更多服务状态，操作更方便</p>
        </div>
        <div class="jieshao_lbox lbox02">
          <p class="jieshao_p1">数据可视化</p>
          <p class="jieshao_p2">账户数据图表显示，更加直观</p>
        </div>
        <div class="jieshao_lbox lbox03">
          <p class="jieshao_p1">新增使用角色</p>
          <p class="jieshao_p2">除了教职工、学生等角色外还可添加其他角色管理</p>
        </div>
        <div class="jieshao_lbox lbox04">
          <p class="jieshao_p1">自定义功能</p>
          <p class="jieshao_p2">可根据需求添加相应功能</p>
        </div>
      </div>
    </div>
    <div class="hoem_down">
      <div class="home_down_box01">
        <div class="home_down_box_tit">&nbsp;&nbsp;管理日志</div>
        <div class="home_down_box_con">
          <p class="down_box_con_p1">
            <i class="el-icon-chat-line-square"></i>&nbsp;&nbsp;管理日志：0个
          </p>
          <p class="down_box_con_p2">我的日志</p>
        </div>
      </div>
      <div class="home_down_box02">
        <div class="home_down_box_tit">&nbsp;&nbsp;产品动态</div>
        <ul class="home_dow_box_ul">
          <li class="home_dow_box_li">使用指南</li>
          <li class="home_dow_box_li">如何创建、删除教职工账号？</li>
          <li class="home_dow_box_li">学生账号创建后为什么登陆不了？</li>
          <li class="home_dow_box_li">老师如何批阅作业？</li>
          <li class="home_dow_box_li">学生提交作业后怎么查看？</li>
        </ul>
      </div>
      <div class="home_down_box03">
        <div class="home_down_box_tit">&nbsp;&nbsp;联系我们</div>
        <ul class="home_dow_box_ul lianxi">
          <li class="home_dow_box_li">客服QQ：123456789</li>
          <li class="home_dow_box_li">QQ交流群：12345789</li>
          <li class="home_dow_box_li">服务热线：100-100-1100</li>
          <li class="home_dow_box_li">商务邮箱：215036604@qq.com</li>
          <li class="home_dow_box_li">微信公众号：shishengxitong</li>
        </ul>
      </div>
    </div>
    <div class="share_alert">
      <div class="share_middle_box">
        <p class="close">关闭</p>
        <div id="code"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {
    $(".share").on("click", function() {
      $(".share_alert").css("display", "block");
      // start
      $('#code').html("");
      $("#code").qrcode({
        width: 200,
        height: 200,
        correctLevel: 0,
        render: "table",
        text: "https://www.baidu.com"
      });
      // end
    });
    $(".close").on("click", function(event) {
      $(".share_alert").css("display", "none");
    });
  }
};
</script>
<style lang='stylus' scoped>
@import '../../assets/iconfont/iconfont.css';

#code {
  width: 200px;
  height: 200px;
  background: #1AAD19;
  margin: 0 auto;
  // overflow: hidden;
}

#code {
  table {
    margin: 0 auto;
  }
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 20px;
  line-height: 20px;
  background: red;
  border-radius: 3px;
  text-align: center;
  color: white;
}

.close:hover {
  cursor: pointer;
}

.share_alert {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
  left: 0;
  top: 0;

  .share_middle_box {
    width: 295px;
    height: 200px;
    padding: 20px 30px;
    background: white;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
  }
}

.hover:hover {
  cursor: pointer;
}

// 中间
.home_jieshao {
  width: 1100px;
  height: 150px;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px 20px 0;
  box-shadow: 0 5px 15px 0 #ccc;

  .home_jieshao_tit {
    width: 100%;
    height: 20px;
    line-height: 20px;
    background: #ccc;
  }

  .home_jiaoshao_box {
    width: 100%;
    height: 130px;
    padding: 20px 8px;
    background: white;

    .jieshao_lbox {
      display: inline-block;
      width: 260px;
      height: 60px;
      vertical-align: middle;
      padding: 20px 0;
      margin-right: 10px;
    }
  }
}

.jieshao_p1, .jieshao_p2 {
  width: 100%;
  text-align: center;
  color: white;
  font-size: 15px;
  margin: 10px 0;
}

.lbox01 {
  background: #FE5454;
}

.lbox02 {
  background: #67C2EF;
}

.lbox03 {
  background: #FBBB3D;
}

.lbox04 {
  background: #79C346;
}

.hoem_down {
  width: 1100px;
  height: 210px;
  border-radius: 5px;
  margin: 10px 20px 0;

  .home_down_box01, .home_down_box02, .home_down_box03 {
    width: 350px;
    height: 200px;
    border-radius: 5px;
    overflow: hidden;
    display: inline-block;
    background: white;
    box-shadow: 0 5px 15px 0 #ccc;

    .home_down_box_tit {
      width: 100%;
      height: 25px;
      line-height: 25px;
      background: #ccc;
    }

    .home_down_box_con {
      height: 130px;
      background: white;
      padding-top: 50px;

      .down_box_con_p1 {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 20px;
      }

      .down_box_con_p2 {
        width: 100px;
        height: 30px;
        background: #FF6634;
        margin: 20px auto 0;
        line-height: 30px;
        text-align: center;
        color: white;
        border-radius: 5px;
      }
    }
  }
}

.home_down_box01, .home_down_box02 {
  margin-right: 21px;
}

.home_dow_box_ul {
  list-style-type: disc !important;
  list-style-position: inside;
  padding: 0 10px;
}

.home_dow_box_li {
  cursor: pointer;
  color: #BAC5DC;
  height: 33px;
  line-height: 35px;
  border-bottom: 1px solid #F5F5F5;
}

.lianxi {
  list-style: none;
}

.home_wrapper {
  width: 1140px;

  .home_top_mes {
    height: 150px;
    padding: 40px 20px 0;

    .top_mes_one {
      display: inline-block;
      width: 355px;
      height: 150px;
      background: white;
      margin-right: 13px;
      box-shadow: 0 5px 15px 0 #ccc;
      border-radius: 5px;
      overflow: hidden;
    }

    .top_mes_two {
      display: inline-block;
      width: 355px;
      height: 150px;
      margin-right: 14px;
      box-shadow: 0 5px 15px 0 #ccc;
      border-radius: 5px;
      overflow: hidden;
    }

    .top_mes_three {
      display: inline-block;
      width: 355px;
      height: 150px;
      box-shadow: 0 5px 15px 0 #ccc;
      border-radius: 5px;
      overflow: hidden;
    }
  }
}

.mes_one_left {
  display: inline-block;
  width: 150px;
  height: 150px;
  background: #ccc;
  vertical-align: middle;
}

.mes_one_right {
  display: inline-block;
  width: 160px;
  height: 150px;
  vertical-align: middle;
  padding-left: 10px;
  font-size: 15px;
  color: #737373;
}

.icon {
  width: 150px;
  height: 100px;
  line-height: 150px;
  text-align: center;
  font-size: 50px;
  color: #999;
}

.person_mes {
  display: inline-block;
  font-size: 20px;
  width: 150px;
  text-align: center;
  color: #999;
}

.user {
  padding-top: 45px;
  width: 100%;
  height: 30px;
}

.type {
  width: 100%;
  height: 30px;
}

.user_type {
  width: 100%;
  height: 30px;
}

.dengji {
  display: inline-block;
  width: 30px;
  height: 15px;
  text-align: center;
  background: #FAB13E;
  color: white;
}

.yellow {
  font-size: 13px;
  color: #F3A048;
}

.el-icon-mobile-phone {
  color: #17B4E5;
}

.el-icon-message {
  color: #17B4E5;
}

.user_name {
  display: inline-block;
  max-width: 62px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
