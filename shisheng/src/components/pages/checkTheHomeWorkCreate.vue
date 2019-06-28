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
        <el-button type="primary" @click="onSubmit(1)" v-if="isAdmin!='2'">批阅</el-button>
        <!-- <el-button type="primary" @click="onSubmit" v-if="id!=0">编辑</el-button> -->
        <el-button @click="reset()" v-if="isAdmin!='2'">暂不批阅</el-button>
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
      isAdmin: "",
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
      this.UpdateResult(s);
      // this.form.status = s;
      // this.$message({
      //   message: "请答题后再发布",
      //   type: "warning"
      // });
      // if (this.form.qs == undefined) {
      //   this.form.qs = "无";
      // }
      // this.form.name = localStorage.getItem("username");
      // ajax.ajax(this, API.AddResult, "get", this.form, d => {
      //   this.$message({
      //     message: d.data.info,
      //     type: "success"
      //   });
      //   this.$router.push("/index/homework");
      // });
    },
    reset() {
      this.$router.push("/index/checkHomeWork");
    },
    FindResult() {
      ajax.ajax(this, API.FindResult, "get", { id: this.id }, d => {
        this.form = d.data.data[0];
      });
    },
    UpdateResult(sss) {
      ajax.ajax(
        this,
        API.UpdateResult,
        "get",
        { id: this.id, status: sss },
        d => {
          if (d.data.isok) {
            this.$message({
              message: "已批阅",
              type: "success"
            });
            this.$router.push("/index/checkHomeWork");
          } else {
            this.$message({
              message: "批阅失败",
              type: "success"
            });
          }
        }
      );
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    if (this.id != 0) {
      this.FindResult();
    }
    this.isAdmin = localStorage.getItem("isAdmin");
  }

  // beforeDestroy() {
  //   // console.log(this.form.status);
  //   this.form.status = 1;
  //   ajax.ajax(
  //     this,
  //     API.UpdateResult,
  //     "get",
  //     { id: this.id, status: this.form.status },
  //     d => {}
  //   );
  // }
};
</script>
<style lang='stylus' scoped>
.teacher_M_C_wrapper {
  margin-top: 15px;
  padding-right: 20px;
}
</style>

