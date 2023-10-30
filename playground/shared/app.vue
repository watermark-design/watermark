<template>
  <div>
    <h1>Watermark Design Shared Playground</h1>
    rows：<input type="text" v-model="rowsInputValue" />
    columns: <input type="text" v-model="columnsInputValue" />
    value: <input type="text" v-model="valueInputValue" />
    <div>result: {{ result }}</div>
  </div>
</template>
<script setup>
  import { ref, computed } from 'vue-demi';
  import { generateMatrix } from '../../packages/shared/src/main';
  const rowsInputValue = ref(2);
  const columnsInputValue = ref(2);
  const valueInputValue = ref('value');
  const result = computed(() => {
    return generateMatrix(
      parseInt(rowsInputValue.value),
      parseInt(columnsInputValue.value),
      valueInputValue.value
    );
  });
</script>
