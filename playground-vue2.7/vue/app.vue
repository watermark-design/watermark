<template>
  <div>
    <h1>Company UI Vue2.7 Playground</h1>
    <input type="text" v-model="text">
    <Watermark :content="text" :width="200" :height="200">
      <div style="height: 500px;">hello world</div>
    </Watermark>
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
