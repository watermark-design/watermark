<template>
  <div>
    <h1>Watermark Design Vue2.7 Playground</h1>
    <Watermark
      ref="watermarkDom"
      v-model="visible"
      :options="form"
      :is-body="false"
      @draw="handleDraw"
      @destroy="handleDestroy"
    >
      <input type="text" v-model="form.content" />
      <div style="height: 500px">hello world</div>
    </Watermark>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        visible: false,
        form: {
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
        }
      };
    },
    methods: {
      handleDraw() {
        console.log('draw')
      },
      handleDestroy () {
        console.log('destroy')
      }
    }
  };
</script>
