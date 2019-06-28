<template>
  <div class="teacher_M_C_wrapper">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="学号">
        <el-input type="number" v-model="form.name" :disabled="id!=0" placeholder="请输入6位数字学号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="form.pass"
          :disabled="id!=0"
          placeholder="请输入6-12位英文数字组合的密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" v-if="id==0">立即创建</el-button>
        <el-button type="primary" @click="onSubmit" v-if="id!=0" :disabled="id!=0">编辑</el-button>
        <el-button @click="reset()" :disabled="id!=0">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
import ajax from "../../common/js/ajax";
import reg from "../../common/js/reg";
export default {
  components: {},
  props: {},
  data() {
    return {
      id: "",
      form: {
        name: "",
        pass: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit() {
      //   console.log("submit!");
      if (this.form.name == "" || this.form.pass == "") {
        this.$message({
          message: "账号或密码不能为空",
          type: "warning"
        });
        return;
      }
      if (!reg.checkNum(this.form.name)) {
        this.$message({
          message: "请输入6位学号",
          type: "warning"
        });
        return;
      }
      if (!reg.checkPass(this.form.pass)) {
        this.$message({
          message: "请输入6-12位字母、数字组合的密码",
          type: "warning"
        });
        return;
      }
      ajax.ajax(this, API.AddStudent, "post", this.form, d => {
        this.$message({
          message: d.data.info,
          type: "success"
        });
        this.$router.replace("/index/student");
      });
    },
    reset() {
      this.form.name = "";
      this.form.pass = "";
    },
    FindStudent() {
      ajax.ajax(this, API.FindStudent, "post", {}, d => {
        this.form = d.data.data[0];
      });
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    if (this.id != 0) {
      this.FindStudent();
    }
  }
};
</script>
<style lang='stylus' scoped>
.teacher_M_C_wrapper {
  margin-top: 15px;
  padding-right: 20px;
}
</style>

