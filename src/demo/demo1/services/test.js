import xhr from 'XHR'

/**
 * apiDemo注释
 * @param {Object} requestDatas request数据
 * @return {Promise}
 */
export const apiDemo1 = (requestDatas) => {
  return xhr({
    url: '/test',
    params: requestDatas
  })
}

export const apiDemo2 = (requestDatas) => {
  return xhr({
    method: 'post',
    url: '',
    data: requestDatas
  })
}
