<template>
  <div class="teacher_M_C_wrapper">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="题目">
        <el-input v-model="form.title" disabled></el-input>
      </el-form-item>
      <el-form-item label="要求">
        <el-input v-model="form.request" disabled></el-input>
      </el-form-item>
      <el-form-item label="作答">
        <el-input type="textarea" v-model="form.result"></el-input>
      </el-form-item>
      <el-form-item label="反馈">
        <el-input type="textarea" v-model="form.qs"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(0)">发布</el-button>
        <!-- <el-button type="primary" @click="onSubmit" v-if="id!=0">编辑</el-button> -->
        <!-- <el-button @click="reset()">取消</el-button> -->
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
        name: "",
        title: "",
        request: "",
        result: "",
        qs: "",
        status: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit(s) {
      this.form.status = s;
      if (this.form.result == undefined) {
        this.$message({
          message: "请答题后再发布",
          type: "warning"
        });
        return;
      }
      if (this.form.qs == undefined) {
        this.form.qs = "无";
      }
      this.form.name = localStorage.getItem("username");
      ajax.ajax(this, API.AddResult, "get", this.form, d => {
        this.$message({
          message: d.data.info,
          type: "success"
        });
        this.$router.push("/index/homework");
      });
    },
    reset() {
      this.form.name = "";
      this.form.pass = "";
    },
    FindWork() {
      // console.log(this.$route.params.id);
      ajax.ajax(this, API.FindWork, "get", { id: this.$route.params.id }, d => {
        this.form = d.data.data[0];
      });
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    if (this.id != 0) {
      this.FindWork();
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

