<template>
  <div class="ld-card">
      <el-row :gutter="12">
        <el-col v-for="item in cardItems" v-bind="colLayout">
          <el-card>
            <span>{{ item.title }} </span>
            <div class="content">
              <strong>{{ item.quantity }}</strong>&nbsp;
              <span>{{ item.unit }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  props: {
    cardItems: Array,
    colLayout: Object
  }
}
</script>

<script setup>
</script>

<style scoped>
.ld-card {
  margin: 20px 10px;
}
.content strong {
  font-size: 20px
}
</style>