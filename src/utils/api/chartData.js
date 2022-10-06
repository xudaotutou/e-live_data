import request from '@/utils/request'

export function getNowRoom() {
    return request({
        url: '/api/historylive',
    })
}
export function getConsumer() {
  return request({
    url:'/api/liveAnalysis'
  })
}