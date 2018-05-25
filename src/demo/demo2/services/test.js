import xhr from 'XHR'

/**
 * testApi注释
 * @param {Object} requestDatas request数据
 * @return {Promise}
 */
export const testApi = (requestDatas) => {
  return xhr({
    url: '/test',
    params: requestDatas
  })
}

export const postApi = (requestDatas) => {
  return xhr({
    method: 'post',
    url: '/testPost',
    data: requestDatas
  })
}
