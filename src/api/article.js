import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/log/list',
    method: 'post',
    data: query
  })
}

export function getLogListPage(query) {
  return request({
    url: `/log/list`,
    method: 'post',
    data: query
  })
}
<<<<<<< HEAD
export function getPacketListPage(query) {
  return request({
    url: `/log/getPacketList`,
    method: 'post',
    data: query
  })
}
export function getXmlPacket(filePath) {
  return request({
    url: `/log/getXml`,
    method: 'post',
    data: filePath
  })
 
}

export function fetchArticle(id) {
  return request({
    url: '/vue-admin-template/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-admin-template/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-admin-template/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-admin-template/article/update',
    method: 'post',
    data
  })
}
