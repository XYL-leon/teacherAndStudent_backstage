var baseUrl = '/api'

var login = baseUrl + '/login'
var FindTeacher = baseUrl + '/findTeacher'  // 查询老师
var AddTeacher = baseUrl + '/addTeacher '    // 添加老师
// var UpdateTeacher = baseUrl + '/updateTeacher'  // 更新老师
var DelTeacher = baseUrl + '/delTeacher'

var FindStudent = baseUrl + '/findStudent'
var AddStudent = baseUrl + '/addStudent'
var DelStudent = baseUrl + '/delStudent'

var FindWork = baseUrl + '/findWork'
var AddWork = baseUrl + '/addWork'
var DelWork = baseUrl + '/delWork'

var AddResult = baseUrl + '/addResult'
var FindResult = baseUrl + '/findResult'
var DelResult = baseUrl +'/delResult'
var UpdateResult = baseUrl + '/updateResult'
// 退出
var Exit = baseUrl + '/exit'
export default {
    login,
    FindTeacher,
    AddTeacher,
    DelTeacher,

    FindStudent,
    AddStudent,
    DelStudent,

    FindWork,
    AddWork,
    DelWork,

    AddResult,
    FindResult,
    DelResult,
    UpdateResult,

    Exit
    // UpdateTeacher
}