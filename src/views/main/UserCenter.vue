<template>
  <div class="user-center">
    <div class="personal-info">
      <div class="avatar">
        <el-avatar src='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png' />
      </div>
      <div class="info">
        <template v-for="item in userInfo" :key="item.id">
          <el-row :gutter="20">
            <el-col :span="12"><span>用户名：{{item.name}}</span></el-col>
            <el-col :span="12">
              <span>实名认证：已认证
                </span>
              </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><span>账号id：{{item.id}}</span></el-col>
            <el-col :span="12"><span>手机号码：{{item.cell_phone}}</span></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><span>注册时间：{{item.create_time}}</span></el-col>
          </el-row>
        </template>
      </div>
    </div>
    <el-tabs v-model="activeName" class="tabs" type="card">
      <el-tab-pane label="基础信息" name="basic-info">Config</el-tab-pane>
      <el-tab-pane label="安全设置" name="security-settings">
        <el-form>
          <el-form-item label="登录密码">
            <p >已设置。密码至少6位字符，支持数字、字母和除空格外的特殊字符，且必须同时包含数字和大小写字母。</p>
            <a>修改</a>
          </el-form-item>
          <el-form-item label="密保问题">
            <p v-if="false">已设置。密码至少6位字符，支持数字、字母和除空格外的特殊字符，且必须同时包含数字和大小写字母。</p>
            <p v-else class="empty">您暂未设置密保问题，密保问题可有效保护账号安全。</p>
            <a>修改</a>
          </el-form-item>
          <el-form-item label="安全手机">
            <p >已绑定：150******50</p>
            <a>修改</a>
          </el-form-item>
          <el-form-item label="登录密码">
            <p v-if="false">已设置。密码至少6位字符，支持数字、字母和除空格外的特殊字符，且必须同时包含数字和大小写字母。</p>
            <p v-else class="empty">您暂未设置邮箱，绑定邮箱可以用来找回密码，接收通知等。</p>
            <a>修改</a>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="实名认证" name="identify-verification">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>
 
<script setup>
const userInfo =[{name: '111', id: '2489372598', create_time: '2022-09-30', verification: true, cell_phone: '15824893725'}]
const activeName = ref('security-settings')
</script>
 
<style scoped>
.personal-info {
  display: flex;
  /* justify-content: space-between */
}
.avatar {
  width: 100px;
  margin: 30px;
}
.info {
  flex:1;
  text-align: left;
  margin: 30px 0;
}
.empty {
  color: #aaa;
}
</style>
