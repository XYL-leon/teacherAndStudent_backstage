<template>
  <div class="student_wrapper">
    <!-- <el-button class="teacher" @click="toStudentCreate(0)" type="primary">添加学生</el-button> -->
    <template>
      <el-table class="teacher_mes" :data="tableData" style="width: 100%">
        <!-- 序号 -->
        <el-table-column label="序号" type="index"></el-table-column>
        <!-- 信息 -->
        <el-table-column label="作业题目" prop="title"></el-table-column>
        <el-table-column label="老师" prop="teacher"></el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="toDoHomework(scope.$index, scope.row)"
              title="点击查看作业完成状态"
            >做作业</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
import ajax from "../../common/js/ajax";
// import "../../common/stylus/index.styl";
export default {
  components: {},
  props: {},
  data() {
    return {
      sss: "",
      status: "",
      tableData: [],
      test: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    toDoHomework(index, row) {
      this.$router.push("/index/homework/doHomeworkCreate/" + row.id);
    },
    FindWork() {
      ajax.ajax(this, API.FindWork, "get", {}, d => {
        this.tableData = d.data.data;
      });
    }
  },
  mounted() {
    this.FindWork();
    // ajax.ajax(this, API.FindResult, "get", {}, d => {
    //   this.test = d.data.data;
    // });
  }
};
</script>
<style lang='stylus' scoped>
// .student_wrapper {
// padding: 10px 10px 0;
// }
.teacher {
  font-size: 20px;
  color: white;
}
</style>

