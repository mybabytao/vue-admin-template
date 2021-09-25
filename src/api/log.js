import request from '@/utils/request'

export function getLogListPage(query) {
    return request({
      url: `/log/list`,
      method: 'post',
      data: query
    })
  }
<<<<<<< HEAD

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
=======
  
>>>>>>> 5f6de5345b95434899c04b12c64b534bba864e27
