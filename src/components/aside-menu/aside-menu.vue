<template>
  <div class="aside-menu">
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" active-text-color="#ff9000" router>
      <template v-for="item in menuList" :key="item.id">
        <template v-if="'children' in item && item.children.length > 0">
          <el-sub-menu :index="item.id">
            <template #title>
              <el-icon>
                <component :is="item.icon" />
              </el-icon>{{item.name}}
            </template>
            <el-menu-item :index="child.id" v-for="(child) in item.children" :route="{path:child.path}">
              <el-icon>
                <component :is="child.icon" />
              </el-icon>{{child.name}}
            </el-menu-item>

          </el-sub-menu>

        </template>
        <template v-else>
          <el-menu-item :index="item.id" :route="{path:item.path}">
            <el-icon>
              <component :is="item.icon" />
            </el-icon>{{item.name}}
          </el-menu-item>
        </template>


      </template>
      <!-- <el-menu-item index="1"><el-icon><Monitor /></el-icon>直播数据</el-menu-item>
        <el-menu-item index="2"><el-icon><DataLine /></el-icon>用户分析</el-menu-item>
        <el-menu-item index="3"><el-icon><Goods /></el-icon>商品数据</el-menu-item>
        <el-menu-item index="4"><el-icon><Document /></el-icon>订单数据</el-menu-item>
        <el-menu-item index="5"><el-icon><User /></el-icon>个人中心</el-menu-item> -->
    </el-menu>
  </div>
</template>

<script setup>

const menuList = [{
  name: '直播数据',
  id: '1',
  path: '',
  icon: 'Monitor',
  children: [
    {
      name: '直播间',
      id: '1-1',
      path: '/main/liveData/room',
      icon: 'Monitor',
      children: []
    }, {
      name: '直播用户',
      id: '1-2',
      path: '/main/liveData/consumer',
      icon: 'Monitor',
      children: []
    }
  ]
}, {
  name: '用户数据分析',
  id: '2',
  path: '/main/userAnaysis',
  icon: 'User',
  children: []
}, {
  name: '个人中心',
  id: '5',
  path: '/main/UserCenter',
  icon: 'User',
  children: []
},]
const activeIndex = ref('/main/UserCenter')
</script>

<style scoped>

</style>