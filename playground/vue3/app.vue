<template>
  <div>
    <h1>Watermark Design Vue3 Playground</h1>
    <Watermark
      v-model="form.visible"
      :content="form.content"
      :width="form.width"
      :height="form.height"
      :appendToBody="false"
    >
      <div style="height: 500px;">
        <el-form :model="form" label-width="80px">
          <el-form-item label="Content">
            <el-input v-model="form.content" />
          </el-form-item>
          <el-form-item label="Visible">
            <el-switch v-model="form.visible" />
          </el-form-item>
        </el-form>
      </div>
    </Watermark>
  </div>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue-demi';
  const form = reactive({
    visible: true,
    content: 'hello watermark',
    width: 200,
    height: 200,
  })
</script>
