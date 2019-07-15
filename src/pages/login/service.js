/**
 * 请求管理
 */

/**
 * 登陆
 */
export const login = data => {
    data.psd = _md5(data.psd)
    return _fetch('logi', data, 'POST');
}