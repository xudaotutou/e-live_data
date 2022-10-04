// import { defineStore } from 'pinia'
// import { getUserData } from '@/utils/api/userCenter'

// export const userCenterStore = defineStore('userCenter', {
//     state: () => {
//         return {
//             counter: 600,
//             userInfo
//         }
//     },
//     actions: {
//         //actions既支持异步操作
//         async loadUserInfo() {
//             await getUserData().then((res => {
//                 this.userInfo = res.data
//             }))
//         },
//     }

// })