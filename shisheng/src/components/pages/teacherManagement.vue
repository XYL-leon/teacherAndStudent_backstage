<template>
  <div class="teacher_wrapper">
    <el-button class="teacher" @click="toTeacherCreate(0)" type="primary">添加教职工</el-button>
    <template>
      <el-table class="teacher_mes" :data="tableData" style="width: 100%">
        <!-- 序号 -->
        <el-table-column label="序号" type="index"></el-table-column>
        <!-- 信息 -->
        <el-table-column label="工号" prop="name"></el-table-column>
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
export default {
  components: {},
  props: {},
  data() {
    return {
      form: {
        name: ""
      },
      tableData: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleEdit(index, row) {
      //编辑按钮
      // console.log(index, row);
      // console.log(row.id);
      this.$router.push("/index/teacher/teacherManagementCreate/" + row.id);
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          ajax.ajax(this, API.DelTeacher, "post", { id: row.id }, d => {
            this.$message({
              message: d.data.info,
              type: "success"
            });
            this.FindTeacher();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    toTeacherCreate(id) {
      // 调到创建teacher
      this.$router.push("/index/teacher/teacherManagementCreate/" + id);
    },
    FindTeacher() {
      ajax.ajax(this, API.FindTeacher, "post", {}, d => {
        this.tableData = d.data.data;
      });
    }
  },

  mounted() {
    this.FindTeacher();
  }
};
</script>
<style lang='stylus' scoped>
.teacher_wrapper {
  padding: 10px 10px 0;
}

.teacher {
  font-size: 20px;
  color: white;
}
</style>
