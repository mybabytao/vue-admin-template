import request from '@/utils/request'

export function getLogListPage(query) {
    return request({
      url: `/log/list`,
      method: 'post',
      data: query
    })
  }

export function getPacketByPath(filePath) {
    return request({
      url: `/log/getPacket`,
      method: 'post',
      data: filePath
    })
  }

  export function getXmlPacket(filePath) {
      return request({
        url: `/log/getXml`,
        method: 'post',
        data: filePath
      })
     
  }
