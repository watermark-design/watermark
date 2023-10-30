<template>
  <div>
    <h1>Watermark Design Vue2.6 Playground</h1>
    <Watermark :content="text" :width="200" :height="200" :appendToBody="true">
      <div style="height: 500px;">
        <div>hello world</div>
      </div>
    </Watermark>
    <input type="text" v-model="text">
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        text: 'ssssss'
      };
    },
  };
</script>
