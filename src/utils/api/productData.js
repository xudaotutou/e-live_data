import request from '@/utils/request'

export function getProductData() {
    return request({
        url: '/api/productData',
    })
}