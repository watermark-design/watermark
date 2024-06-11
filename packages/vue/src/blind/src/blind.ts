import {
  PropType,
  h,
  shallowRef,
  defineComponent,
  onMounted,
  onBeforeUnmount,
  watch,
} from 'vue-demi';
import { BlindWatermark as DomBlindWatermark } from '@watermark-design/dom';
import type { WatermarkOptions } from '@watermark-design/core';

export const BlindWatermark = defineComponent({
  name: 'BlindWatermark',
  props: {
    options: {
      type: Object as PropType<WatermarkOptions>,
      default: () => ({}),
    },
    modelValue: {
      type: Boolean,
      default: true,
    },
    isBody: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['draw', 'destroy'],
  setup(props, { emit }) {
    const assign = Object.assign;
    const root = shallowRef<HTMLElement>();
    const watermark = shallowRef<DomBlindWatermark>();

    watch(props.options, () => {
      watermark.value?.changeOptions(
        assign({}, props.options, {
          parent: props.isBody ? 'body' : root.value,
        }),
        'overwrite',
        props.modelValue
      );
      if (props.modelValue) {
        emit('draw');
      }
    });

    watch(
      () => props.modelValue,
      (visible) => {
        if (visible) {
          watermark.value?.create();
          emit('draw');
        } else {
          watermark.value?.destroy();
          emit('destroy');
        }
      }
    );

    onMounted(() => {
      watermark.value = new DomBlindWatermark(
        assign({}, props.options, {
          parent: props.isBody ? 'body' : root.value,
        })
      );
      if (props.modelValue) {
        watermark.value?.create();
        emit('draw');
      }
    });

    onBeforeUnmount(() => {
      watermark.value?.destroy();
      emit('destroy');
    });

    return {
      root,
      watermark,
    };
  },
  render() {
    const { isBody } = this.$props;
    // https://v3-migration.vuejs.org/breaking-changes/slots-unification.html
    const slots =
      typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;

    return h(
      'div',
      {
        ref: 'root',
        ...(!isBody && {
          style: {
            position: 'relative',
          },
        }),
      },
      slots
    );
  },
});
