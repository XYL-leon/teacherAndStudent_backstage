<template>
  <div class="student_wrapper">
    <el-button class="teacher" @click="toStudentCreate(0)" type="primary">添加学生</el-button>
    <template>
      <el-table class="teacher_mes" :data="tableData" style="width: 100%">
        <!-- 序号 -->
        <el-table-column label="序号" type="index"></el-table-column>
        <!-- 信息 -->
        <el-table-column label="学号" prop="name"></el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      tableData: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleEdit(index, row) {
      // console.log(index, row);
      this.$router.push("/index/student/studentManagementCreate/" + row.id);
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          ajax.ajax(this, API.DelStudent, "post", { id: row.id }, d => {
            this.$message({
              message: d.data.info,
              type: "success"
            });
            this.FindStudent();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    toStudentCreate(id) {
      // 跳到创建teacher
      this.$router.push("/index/student/studentManagementCreate/" + id);
    },
    FindStudent() {
      ajax.ajax(this, API.FindStudent, "post", {}, d => {
        this.tableData = d.data.data;
      });
    }
  },
  mounted() {
    this.FindStudent();
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
