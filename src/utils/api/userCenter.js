import request from '@/utils/request'

export function getUserData() {
    return request({
        url: '/api/personalCenter',
    })
}