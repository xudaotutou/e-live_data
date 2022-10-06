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
              <el-input :placeholder="item.placeholder" v-model="formData[`${item.field}`]"></el-input>
            </template>
            <template v-if="item.type === 'date'">
              <el-date-picker type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="formData[`${item.field}`]"></el-date-picker>
            </template>
            <template v-if="item.type === 'select'">
              <el-select :placeholder="item.placeholder" v-model="formData[`${item.field}`]">
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
      <el-button type="primary"
        ><el-icon><search /></el-icon>查询</el-button
      >
      <el-button
        ><el-icon><refresh /></el-icon>重置</el-button
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    // modelValue: {},
    title: String,
    labelWidth: String,
    formItems: Array,
    colLayout: Object
})
const formItems = props.formItems ?? [];
const formOriginData = {};
for (const item of formItems) {
  formOriginData[item.field] = ''; //默认值空字符串
}
const formData = ref(formOriginData);
// const formData = ref({goodsId: '', name: '', category: '', price: '', link: '', status: ''});

// const emit = defineEmits(['update:modelValue'])
// const handleValueChange = (value, field) => { emit('update:modelValue', { ...props.modelValue, [field]: value });}
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