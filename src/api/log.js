import request from '@/utils/request'

export function getLogListPage(query) {
    return request({
      url: `/log/list`,
      method: 'post',
      data: query
    })
  }
  