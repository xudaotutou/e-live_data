<template>
  <div class="user-center">
    <div class="personal-info">
      <div class="avatar">
        <el-avatar src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F3a263009012x249942079b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667743477&t=51ea3bdf5888d89a47f4016f1ce01700" :size="90"></el-avatar>
        <el-icon><Camera /></el-icon>
      </div>
      <div class="info">
          <el-row :gutter="20">
            <el-col :span="12"><span>用户名：{{userInfo.userName}}</span></el-col>
            <el-col :span="12">实名认证：<span :class="{'verified':userInfo.authentication}">{{userInfo.authentication? '已认证' : '您尚未实名认证'}}</span>&nbsp;&nbsp;
              <a v-if="userInfo.authentication" href="javascript:;">修改</a><a v-else href="javascript:;">设置</a>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><span>账号id：{{userInfo.userId}}</span></el-col>
            <el-col :span="12"><span>手机号码：{{userInfo.phoneNumber ? userInfo.phoneNumber: '您尚未绑定手机'}}</span>&nbsp;&nbsp;
              <a v-if="userInfo.phoneNumber" href="javascript:;">修改</a><a v-else href="javascript:;">设置</a>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><span>注册时间：{{userInfo.createTime}}</span></el-col>
          </el-row>
      </div>
    </div>
    <el-tabs v-model="activeName" class="tabs">
      <el-tab-pane label="基础信息" name="basic-info">basic-info</el-tab-pane>
      <el-tab-pane label="安全设置" name="security-settings">
        <el-form>
          <el-form-item label="登录密码">
            <span v-if="userInfo.password">已设置。密码至少6位字符，支持数字、字母和除空格外的特殊字符，且必须同时包含数字和大小写字母。</span>
            <span v-else class="empty">您暂未设置登录密码，密码至少6位字符，支持数字、字母和除空格外的特殊字符，且必须同时包含数字和大小写字母。</span>
            <div class="operation">
              <a v-if="userInfo.password" href="javascript:;">修改</a><a v-else href="javascript:;">设置</a>
            </div>
          </el-form-item>
          <el-form-item label="密保问题">
            <span v-if="userInfo.question">已设置。密保问题可有效保护账号安全。</span>
            <span v-else class="empty">您暂未设置密保问题，密保问题可有效保护账号安全。</span>
            <div class="operation">
              <a v-if="userInfo.question" href="javascript:;">修改</a><a v-else href="javascript:;">设置</a>
            </div>
          </el-form-item>
          <el-form-item label="安全手机">
            <span v-if="userInfo.secureNumber">已绑定：{{userInfo.secureNumber}}</span>
            <span v-else class="empty">您暂未设置密保问题，密保问题可有效保护账号安全。</span>
            <div class="operation">
              <a v-if="userInfo.secureNumber" href="javascript:;">修改</a><a v-else href="javascript:;">设置</a>
            </div>
          </el-form-item>
          <el-form-item label="安全邮箱">
            <span v-if="userInfo.email">已设置:{{userInfo.email}}</span>
            <span v-else class="empty">您暂未设置邮箱，绑定邮箱可以用来找回密码，接收通知等。</span>
            <div class="operation">
              <a v-if="userInfo.email" href="javascript:;">修改</a><a v-else href="javascript:;">设置</a>
            </div>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="实名认证" name="identify-verification">identify-verification</el-tab-pane>
    </el-tabs>
  </div>
</template>
 
<script setup>
import { getUserData } from '@/utils/api/userCenter.js'
let userInfo = ref({})
getUserData().then(res=>{
userInfo.value = res.data
})

const activeName = ref('security-settings')

</script>
 
<style>
.personal-info {
  display: flex;
}
.avatar {
  width: 100px;
  margin: 30px;
  position: relative;
}
.avatar .el-icon {
  position: absolute;
  top: 66px;
  right: 6px;
  color: #ff9000;
  background-color: #FCEACF;
  padding: 6px;
  border-radius: 20px;
  cursor: pointer;
}
.info {
  flex:1;
  text-align: left;
  margin: 30px 0;
}
.empty {
  color: #aaa;
}
.verified{
  font-size: 13px;
  padding: 4px;
  color: #ff9000;
  border-radius: 2px;
  background-color: #FCEACF;
}
.user-center a {
  color: #ff9000;
  font-size: 13px;
  white-space: nowrap;
}
.tabs {
  margin: 15px;
}
.tabs .el-form-item {
  display: flex;
}
.tabs .el-form-item__content {
   border-bottom: 1px solid #ccc;
}
.tabs .operation {
  flex: 1;
}
.tabs .operation a {
    float: right;
  }

.tabs .el-tabs__active-bar {
  background-color: #ff9000;
}
.tabs .is-top:hover{
  color: #ff9000;
}
.tabs .is-active {
  color: #ff9000;
  border-color: white
}
</style>