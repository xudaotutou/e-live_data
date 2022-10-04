<template>
  <div class="page-search">
    <h4>{{ title }}</h4>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
            >
            <template v-if="item.type === 'input'">
              <el-input :placeholder="item.placeholder" v-model="formData"></el-input>
            </template>
            <template v-if="item.type === 'select'">
              <el-select :placeholder="item.placeholder" v-model="formData">
                <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    :label="option.title"
                    >
                </el-option>
              </el-select>
            </template>              
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="btns">
      <el-button type="primary" @click="handleQueryClick"
        ><el-icon><search /></el-icon>查询</el-button
      >
      <el-button @click="handleResetClick"
        ><el-icon><refresh /></el-icon>重置</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    labelWidth: String,
    formItems: Array,
    colLayout: Object
  }
}
</script>

<script setup>
</script>

<style scoped>
h4{
  display: flex;
  padding-left: 12px
}
.btns {
  text-align: right;
  padding-right: 10px;
}
</style>