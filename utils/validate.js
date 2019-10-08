
/**
 * validate email
 * @param email
 * @returns {boolean}
 */

export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}
/**
 * @name: YangHQ
 * @msg: 手机号
 * @param {type} 
 * @return: {boolean}
 */
export function validatePhone(str) {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    return reg.test(str)
}

/**
 * @name: YangHQ
 * @msg: 验证用户名
 * @param {type} 
 * @return: {boolean}
 */
export function validateUserName(str) {
    const reg = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/
    return reg.test(str)
}