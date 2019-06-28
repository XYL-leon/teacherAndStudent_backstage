<template>
  <div class="teacher_M_C_wrapper">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="作业题目">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="作业要求">
        <el-input type="textarea" v-model="form.request"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
        <!-- <el-button type="primary" @click="onSubmit">编辑</el-button> -->
        <el-button @click="reset()">取消</el-button>
      </el-form-item>
    </el-form>
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
      id: "",
      form: {
        title: "",
        request: "",
        teacer: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit() {
      if (this.form.title == "" || this.form.request == "") {
        this.$message({
          message: "内容不能为空",
          type: "warning"
        });
        return;
      } else {
        ajax.ajax(this, API.AddWork, "get", this.form, d => {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          this.reset()
          this.$router.replace("/index/jobLibrary");
        });
      }
    },
    reset() {
      this.form.title = "";
      this.form.request = "";
    },
  },
  mounted() {
    this.form.teacher = localStorage.getItem("username");
    this.id = this.$route.params.id;
  }
};
</script>
<style lang='stylus' scoped>
.teacher_M_C_wrapper {
  margin-top: 15px;
  padding-right: 20px;
}
</style>

