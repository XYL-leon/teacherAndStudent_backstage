import Vue from 'vue'
import Router from 'vue-router'

// 登录页
import Login from '../components/pages/login.vue'
// 首页
import Index from '../components/pages/index.vue'

// 二级views
import Teacher from '../components/views/teacher.vue'
import Student from '../components/views/student.vue'
import HomeWork from '../components/views/homeWork.vue'
import CheckHomeWork from '../components/views/checkHomeWork.vue'
// 二级
import TeacherManagement from '../components/pages/teacherManagement.vue'
import StudentManagement from '../components/pages/studentManagement.vue'

import PublishJob from '../components/pages/PublishJob.vue'
import CheckTheHomework from '../components/pages/checkTheHomework.vue'
import JobLibrary from '../components/pages/jobLibrary.vue'

import DoHomework from '../components/pages/doHomework.vue'

// home
import Home from '../components/pages/home.vue'
// 三级
import TeacherManagementCreate from '../components/pages/teacherManagementCreate.vue'
import StudentManagementCreate from '../components/pages/studentManagementCreate.vue'
import DoHomeworkCreate from '../components/pages/doHomeworkCreate.vue'
import CheckTheHomeWorkCreate from '../components/pages/checkTheHomeWorkCreate.vue'

// 欢迎
import Welcome from '../components/pages/welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index,
      children: [
        {
          path:'',
          component:Welcome
        },
        {
          path:'home',
          component:Home
        },
        {
          path: 'teacher',  // 二级
          component: Teacher,
          children: [
            {
              path: 'teacherManagementCreate/:id', // 三级
              component: TeacherManagementCreate
            },
            {
              path: '',
              component: TeacherManagement
            }
          ]
        },
        {
          path: 'student',
          component: Student,
          children: [
            {
              path: 'studentManagementCreate/:id',
              component: StudentManagementCreate
            },
            {
              path: '',
              component: StudentManagement
            }
          ]
        },
        {
          path: 'publishJob',
          component: PublishJob
        },
        {
          path: 'checkHomeWork',
          component: CheckHomeWork,
          children: [
            {
              path: 'checkTheHomeWorkCreate/:id',
              component: CheckTheHomeWorkCreate
            },
            {
              path: '',
              component: CheckTheHomework
            }
          ]
        },
        {
          path: 'jobLibrary',
          component: JobLibrary
        },
        {
          path: 'homeWork',
          component: HomeWork,
          children: [
            {
              path: 'doHomeworkCreate/:id',
              component: DoHomeworkCreate
            },
            {
              path: '',
              component: DoHomework
            },

          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
