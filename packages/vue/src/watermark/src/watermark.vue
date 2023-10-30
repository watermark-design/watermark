<template>
  <Teleport to="body" :disabled="!appendToBody" :key="key" v-if="key">
    <div :style="watermarkWrapperStyle" ref="watermarkWrapperRef">
      <slot name="default"></slot>
      <div :style="watermarkStyle" v-if="modelValue"></div>
    </div>
  </Teleport>
</template>

<script lang="ts">
  import { defineComponent, isVue2 } from 'vue-demi';
  import Teleport from '../../teleport';
  import watermarkMixin from '../../mixins/watermark.mixin';

  export default defineComponent({
    name: 'Watermark',
    directives: {},
    mixins: [watermarkMixin],
    ...(isVue2
      ? {
          components: {
            Teleport,
          },
          model: {
            prop: 'modelValue',
            event: 'modelChange',
          },
        }
      : null),
    props: {
      modelValue: {
        type: Boolean,
        default: true,
      },
    },
    emits: [isVue2 ? 'modelChange' : 'update:modelValue'],
    data() {
      return {};
    },
    computed: {},
    watch: {
      modelValue(value) {
        if (value) {
          this.handleObserver();
        } else {
          this.removeObserver();
        }
      },
    },
    created() {},
    mounted() {},
    methods: {},
  });
</script>
