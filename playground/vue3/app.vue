<template>
  <div>
    <h1>Watermark Design Vue3 Playground</h1>
    <Watermark
      v-model="form.visible"
      layout="grid"
      :content="form.content"
      :width="form.width"
      :height="form.height"
      :appendToBody="form.appendToBody"
      :gridLayoutOptions="gridLayoutOptions"
      :advancedStyle="advancedStyle"
    >
      <div style="height: 500px">
        <el-form :model="form" label-width="80px">
          <el-form-item label="Content">
            <el-input v-model="form.content" />
          </el-form-item>
          <el-form-item label="Visible">
            <el-switch v-model="form.visible" />
          </el-form-item>
          <el-form-item label="appendToBody">
            <el-switch v-model="form.appendToBody" />
          </el-form-item>
        </el-form>
      </div>
    </Watermark>
  </div>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue-demi';
  import type { GridLayoutOptions, AdvancedStyleType } from '../../packages/core';
  const form = reactive({
    visible: true,
    appendToBody: false,
    content: 'hello watermark',
    width: 200,
    height: 200,
  });
  const gridLayoutOptions: GridLayoutOptions = {
    rows: 2,
    cols: 2,
    gap: [20, 20],
    matrix: [
      [1, 0],
      [0, 1],
    ],
  };

  const advancedStyle: AdvancedStyleType = {
    type: 'linear',
    colorStops: [
      {
        offset: 0,
        color: 'red',
      },
      {
        offset: 1,
        color: 'blue',
      },
    ],
  };
</script>
