<template>
  <div>
    <h1>Watermark Design Vue3 Playground</h1>
    <Watermark
      ref="watermarkDom"
      v-model="visible"
      :options="form"
      :is-body="false"
      @draw="handleDraw"
      @destroy="handleDestroy"
    >
      <div style="height: 500px">
        <el-form :model="form" label-width="80px">
          <el-form-item label="Content">
            <el-input v-model="form.content" />
          </el-form-item>
          <el-form-item label="Visible">
            <el-switch v-model="visible" />
          </el-form-item>
        </el-form>
      </div>
    </Watermark>
  </div>
</template>
<script lang="ts" setup>
  import { reactive, ref } from 'vue-demi';
  const visible = ref(true)
  const watermarkDom = ref()
  const form = reactive({
    content: 'hello watermark',
    width: 200,
    height: 200,
    gridLayoutOptions: {
      rows: 2,
      cols: 2,
      gap: [20, 20],
      matrix: [
        [1, 0],
        [0, 1],
      ],
    },
    advancedStyle: {
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
    }
  });

  // const handleChange = () => {
  //   console.log('change')
  // }

  const handleDraw = () => {
    console.log('draw')
  }

  const handleDestroy = () => {
    console.log('destroy')
  }
</script>
