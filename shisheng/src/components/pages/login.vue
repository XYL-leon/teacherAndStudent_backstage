<template>
  <div class="login_wrapper">
    <img class="img" :src="src" alt>
    <div class="login_box">
      <el-form class="login_form" ref="form" :model="form" label-width="80px">
        <el-form-item label="选择身份">
          <el-select v-model="form.type" placeholder="请选择身份">
            <el-option label="管理员" value="0"></el-option>
            <el-option label="老师" value="1"></el-option>
            <el-option label="学生" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="form.name" placeholder="请输入账户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.pass" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
import ajax from "../../common/js/ajax";
export default {
  components: {},
  props: {},
  data() {
    return {
      src:"http://b-ssl.duitang.com/uploads/item/201510/15/20151015214223_RrHVX.jpeg",
      form: {
        name: "",
        pass: "",
        type: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit() {
      if (this.form.pass == "") {
        this.$message({
          message: "密码不能为空",
          type: "warning"
        });
        return;
      }
      ajax.ajax(this, API.login, "post", this.form, d => {
        if (d.data.isok) {
          // console.log(d)
          localStorage.setItem("username", this.form.name);
          localStorage.setItem("isAdmin", d.data.isAdmin);
          this.$router.replace("/index");
        } else {
          this.$message({
            message: d.data.info,
            type: "warning"
          });
        }
      });
    }
  },
  mounted() {}
};
</script>
<style lang='stylus' scoped>
.img {
  width: 100%;
  height: 100%;
  position: fixed;
  // z-index: -1;
}

.login_wrapper {
  width: 100vw;
  height: 100vh;
  background: #c3c3c3;

  .login_box {
    width: 500px;
    height: 300px;
    background: rgba(0, 0, 0, 0.4);
    // background: #f4f4f4;
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    // box-shadow: 0 0 1px 1px #ccc;
    box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.4);
  }
}
.login_wrapper >>> .el-form-item__label {
  color:white !important;
}
.login_form {
  width: 80%;
  margin: 30px auto 0;
}
</style>
