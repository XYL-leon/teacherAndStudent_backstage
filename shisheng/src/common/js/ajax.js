import axios from 'axios'
import qs from 'qs'

function errCallback(obj, d) {
    obj.$message({
        message: d.data.info,
        type: 'warning'
    })
    obj.$router.replace('/login')
    return;
}

function ajax(obj, url, method, params, callback) {
    var paramsName = 'params'
    if (method.toUpperCase() == 'POST') {
        params = qs.stringify(params)
        paramsName = 'data'
    }
    // console.log(url)
    // console.log(method)
    // console.log(paramsName)
    // console.log(params)
    axios({
        url: url,
        method: method,
        [paramsName]: params
    }).then(d => {
        // console.log('=============' + url + '==============')
        // console.log(d)
        if (d.data.code != 0) {
            errCallback(obj, d)
            return;
        }
        if (d.data.isok) {
            callback(d)
        } else {
            obj.$message({
                message: d.data.info,
                type: "warning"
            });
        }
    })
}

export default {
    errCallback,
    ajax
}