<template>
  <Watermark v-bind="$attrs" :globalAlpha="globalAlpha" :mode="mode">
    <slot name="default"></slot>
  </Watermark>
</template>

<script lang="ts">
  import { defineComponent } from 'vue-demi';
  import watermark from '../../watermark';

  export default defineComponent({
    name: 'BlindWatermark',
    components: {
      watermark,
    },
    directives: {},
    props: {
      globalAlpha: {
        type: Number,
        default: 0.005,
      },
      mode: {
        type: String,
        default: 'blind',
      },
      modelValue: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {};
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {},
  });
</script>
