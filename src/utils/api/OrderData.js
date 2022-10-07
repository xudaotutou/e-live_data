import request from '@/utils/request'

export function getOrderData() {
    return request({
        url: '/api/orderData',
    })
}