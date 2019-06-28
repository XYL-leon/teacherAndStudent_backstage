function checkEmpty(obj) {
    var isok = true;
    for (var i in obj) {
        if (obj[i] == '') {
            isok = false;
            break;
        }
    }
    return isok;
}
function checkNum(num){ // 验证6位数字
    var reg = /^\d{6}$/;
    return reg.test(num)
}
function checkPass(pass) {  // 验证6-12位字母、数字组合的密码
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
    return reg.test(pass)
}

export default {
    checkEmpty,
    checkNum,
    checkPass
}