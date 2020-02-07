import axios from "axios"
import qs from 'qs'
import requestUrl from "../config/url"
let FEBS_REQUEST = axios.create({
    baseURL: requestUrl,
    responseType: 'json',
    // validateStatus(status) {
    //     // 200 外的状态码都认定为失败
    //     return status === 200
    // }
})
// 拦截请求
FEBS_REQUEST.interceptors.request.use((config) => {
    // let expireTime = store.state.account.expireTime
    // let now = moment().format('YYYYMMDDHHmmss')
    // // 让token早10秒种过期，提升“请重新登录”弹窗体验
    // if (now - expireTime >= -10) {
    //     Modal.error({
    //         title: '登录已过期',
    //         content: '很抱歉，登录已过期，请重新登录',
    //         okText: '重新登录',
    //         mask: false,
    //         onOk: () => {
    //             return new Promise((resolve, reject) => {
    //                 db.clear()
    //                 location.reload()
    //             })
    //         }
    //     })
    // }
    // 有 token就带上
    // if (store.state.token) {
    //     config.headers.Authentication = store.state.token
    // }
    // return config
}, (error) => {
    return Promise.reject(error)
})

// 拦截响应
FEBS_REQUEST.interceptors.response.use((config) => {
    return config
}, (error) => {
    if (error.response) {
        let errorMessage = error.response.data === null ? '系统内部异常，请联系网站管理员' : error.response.data.message
        switch (error.response.status) {
            case 404:
                // Message({
                //     message: '很抱歉，资源未找到',
                //     type: "error"
                // })
                break
            case 403:
            case 401:
                // Message({
                //     message: '很抱歉，您无法访问该资源，可能是因为没有相应权限或者登录已失效',
                //     type: "error"
                // })
                location.href = "/"
                break
            default:
                // Message({
                //     message: errorMessage,
                //     type: "error"
                // })
                break
        }
    }
    return Promise.reject(error)
})

export default class Axios {
    static axios = axios;
    static baseUrl = process.env.NODE_ENV === 'production' ? prodBaseUrl : devBaseUrl;
    static get(url, params = {}) {
        return new Promise((resolve, reject) => {
            FEBS_REQUEST.get(url, { params }).then(res => {
                if (res.status == '200') {
                    resolve(res.data)
                } else {
                    reject(res.data)
                }
            }).catch(err => {
                reject(err)
            })
        })
    }
    static post(url, params = {}) {
        return new Promise((resolve, reject) => {
            FEBS_REQUEST.post(url, qs.stringify(params)).then(res => {
                if (res.status == '200') {
                    resolve(res.data)
                } else {
                    reject(res.data)
                }
            }).catch(err => {
                reject(err)
            })
        })
    }
    static postJson(url, params = {}) {
        return new Promise((resolve, reject) => {
            FEBS_REQUEST.post(url, params, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if (res.status == '200') {
                    resolve(res.data)
                } else {
                    reject(res.data)
                }
            }).catch(err => {
                reject(err)
            })
        })
    }

}
