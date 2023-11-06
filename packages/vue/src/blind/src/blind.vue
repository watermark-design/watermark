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
  import watermarkMixin, { WatermarkMixinType } from '../../mixins/watermark.mixin';

  export default defineComponent({
    name: 'BlindWatermark',
    directives: {},
    mixins: [watermarkMixin as WatermarkMixinType],
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
