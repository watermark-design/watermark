import { CSSProperties, PropType } from 'vue-demi';
import { nanoid } from 'nanoid';
import debounce from 'lodash.debounce';
import {
  convertImage,
  generateBackgroundSize,
  initialOptions,
  renderLayout,
  WatermarkCanvas,
} from '@watermark-design/core';
import type { WatermarkOptions } from '@watermark-design/core';

export default {
  props: {
    width: {
      type: Number as PropType<WatermarkOptions.width>,
      default: initialOptions.width,
    },
    height: {
      type: Number as PropType<WatermarkOptions.height>,
      default: initialOptions.height,
    },
    rotate: {
      type: Number as PropType<WatermarkOptions.rotate>,
      default: initialOptions.rotate,
    },
    layout: {
      type: String as PropType<WatermarkOptions.layout>,
      default: initialOptions.layout,
    },
    gridLayoutOptions: {
      type: Object as PropType<WatermarkOptions.gridLayoutOptions>,
      default: undefined,
    },
    auxiliaryLine: {
      type: Boolean as PropType<WatermarkOptions.auxiliaryLine>,
      default: initialOptions.auxiliaryLine,
    },
    globalAlpha: {
      type: Number as PropType<WatermarkOptions.globalAlpha>,
      default: initialOptions.globalAlpha,
    },
    zIndex: {
      type: Number as PropType<WatermarkOptions.zIndex>,
      default: 10,
    },
    // mutationObserve: {
    //   type: Boolean as PropType<WatermarkOptions.mutationObserve>,
    //   default: false,
    // },
    movable: {
      type: Boolean as PropType<WatermarkOptions.movable>,
      default: initialOptions.movable,
    },
    mode: {
      type: String as PropType<WatermarkOptions.mode>,
      default: initialOptions.mode,
    },
    backgroundPosition: {
      type: String as PropType<WatermarkOptions.backgroundPosition>,
      default: initialOptions.backgroundPosition,
    },
    backgroundRepeat: {
      type: String as PropType<WatermarkOptions.backgroundRepeat>,
      default: initialOptions.backgroundRepeat,
    },
    translatePlacement: {
      type: String as PropType<WatermarkOptions.translatePlacement>,
      default: undefined,
    },
    translateX: {
      type: Number as PropType<WatermarkOptions.translateX>,
      default: undefined,
    },
    translateY: {
      type: Number as PropType<WatermarkOptions.translateY>,
      default: undefined,
    },
    contentType: {
      type: String as PropType<WatermarkOptions.contentType>,
      default: initialOptions.contentType,
    },
    content: {
      type: String as PropType<WatermarkOptions.content>,
      default: initialOptions.content,
    },
    textType: {
      type: String as PropType<WatermarkOptions.textType>,
      default: initialOptions.textType,
    },
    lineHeight: {
      type: Number as PropType<WatermarkOptions.lineHeight>,
      default: initialOptions.lineHeight,
    },
    fontSize: {
      type: String as PropType<WatermarkOptions.fontSize>,
      default: initialOptions.fontSize,
    },
    fontFamily: {
      type: String as PropType<WatermarkOptions.fontFamily>,
      default: initialOptions.fontFamily,
    },
    fontStyle: {
      type: String as PropType<WatermarkOptions.fontStyle>,
      default: initialOptions.fontStyle,
    },
    fontVariant: {
      type: String as PropType<WatermarkOptions.fontVariant>,
      default: initialOptions.fontVariant,
    },
    fontColor: {
      type: String as PropType<WatermarkOptions.fontColor>,
      default: initialOptions.fontColor,
    },
    fontWeight: {
      type: String as PropType<WatermarkOptions.fontWeight>,
      default: initialOptions.fontWeight,
    },
    textAlign: {
      type: String as PropType<WatermarkOptions.textAlign>,
      default: undefined,
    },
    textBaseline: {
      type: String as PropType<WatermarkOptions.textBaseline>,
      default: undefined,
    },
    filter: {
      type: String as PropType<WatermarkOptions.filter>,
      default: initialOptions.filter,
    },
    textRowMaxWidth: {
      type: Number as PropType<WatermarkOptions.textRowMaxWidth>,
      default: undefined,
    },
    richTextWidth: {
      type: Number as PropType<WatermarkOptions.richTextWidth>,
      default: undefined,
    },
    richTextHeight: {
      type: Number as PropType<WatermarkOptions.richTextHeight>,
      default: undefined,
    },
    image: {
      type: String as PropType<WatermarkOptions.image>,
      default: undefined,
    },
    imageWidth: {
      type: Number as PropType<WatermarkOptions.imageWidth>,
      default: initialOptions.imageWidth,
    },
    imageHeight: {
      type: Number as PropType<WatermarkOptions.imageHeight>,
      default: initialOptions.imageHeight,
    },
    shadowStyle: {
      type: Object as PropType<WatermarkOptions.shadowStyle>,
      default: undefined,
    },
    advancedStyle: {
      type: Object as PropType<WatermarkOptions.shadowStyle>,
      default: undefined,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['success', 'error', 'beforeDestroy', 'destroyed', 'observeSuccess', 'observeError'],
  data() {
    return {
      key: null as string,
      watermarkCanvas: null as WatermarkCanvas,
      watermarkImage: null as string,
      observer: null as MutationObserver,
      parentObserve: null as MutationObserver,
      observing: false,
    };
  },
  computed: {
    options(): Partial<WatermarkOptions> {
      return {
        ...initialOptions,
        ...this.$props,
      };
    },
    watermarkWrapperStyle(): CSSProperties {
      const important = this.mutationObserve ? '!important' : '';
      return {
        ...(this.mutationObserve && {
          'z-index': `${this.zIndex}${important}`,
          display: `block${important}`,
          visibility: `visible${important}`,
          transform: `none${important}`,
          scale: `none${important}`,
        }),
        position: `relative${important}`,
      };
    },
    watermarkStyle(): CSSProperties {
      const important = this.mutationObserve ? '!important' : '';
      const backgroundSize = generateBackgroundSize({
        layout: this.layout,
        width: this.width,
        height: this.height,
        gridLayoutOptions: this.gridLayoutOptions,
      });
      return {
        ...(this.mutationObserve && {
          visibility: `visible${important}`,
          transform: `none${important}`,
          scale: `none${important}`,
        }),
        'z-index': `${this.zIndex}${important}`,
        display: `block${important}`,
        width: `100%${important}`,
        height: `100%${important}`,
        'pointer-events': `none${important}`,
        left: `0${important}`,
        right: `0${important}`,
        top: `0${important}`,
        bottom: `0${important}`,
        position: `${this.appendToBody ? 'fixed' : 'absolute'}${important}`,
        'background-image': `url(${this.watermarkImage})${important}`,
        'background-repeat': `${this.backgroundRepeat}${important}`,
        'background-size': `${backgroundSize[0]}px ${backgroundSize[1]}px${important}`,
        'background-position': `${this.backgroundPosition}${important}`,
        ...(this.movable && {
          animation: `200s ease 0s infinite normal none running watermark ${important}`,
        }),
      };
    },
  },
  watch: {
    options: {
      deep: true,
      handler: async function () {
        await this.create();
      },
    },
  },
  created() {},
  async mounted() {
    await this.create();
    this.$emit('success');
  },
  methods: {
    generateKey() {
      return this.mutationObserve ? nanoid(6) : 'watermark';
    },
    create: debounce(async function () {
      this.watermarkCanvas = new WatermarkCanvas(this.$props, this.options);
      this.remove();
      this.key = this.generateKey();
      try {
        await this.$nextTick(() => {
          this.draw();
        });
      } catch {
        this.$emit('error');
      }
    }, 10),
    update: debounce(async function () {
      this.remove();
      this.key = this.generateKey();
      try {
        await this.$nextTick(() => {
          this.draw();
        });
      } catch {
        this.$emit('error');
      }
    }, 10),
    async draw() {
      this.mutationObserve && (this.$refs.watermarkWrapperRef.id = `watermark-${this.key}`);
      await this.watermarkCanvas?.draw();
      const layoutCanvas = renderLayout(
        this.options,
        <HTMLCanvasElement>this.watermarkCanvas?.getCanvas()
      );
      this.watermarkImage = convertImage(layoutCanvas);
      this.watermarkCanvas?.clear();
      await this.$nextTick(() => {
        this.handleObserver();
      });
    },
    remove() {
      this.$emit('beforeDestroy');
      this.removeObserver();
      this.mutationObserve && document.querySelector(`#watermark-${this.key}`)?.remove();
      this.$emit('destroyed');
    },
    handleObserver() {
      if (!this.mutationObserve) {
        this.observing = false;
        return;
      }
      try {
        !this.observing && this.addObserver();
        this.observing = true;
        this.$emit('observeSuccess');
      } catch (e) {
        this.$emit('observeError');
        this.observing = false;
      }
    },
    addObserver() {
      const watermarkWrapperDom = this.$refs.watermarkWrapperRef;
      const parentElement = watermarkWrapperDom.parentElement;
      this.observer = new MutationObserver(async (mutationsList: MutationRecord[]) => {
        if (mutationsList.length > 0) {
          await this.update();
        }
      });
      this.observer.observe(watermarkWrapperDom, {
        attributes: true,
        childList: true,
        subtree: false,
        characterData: true,
      });
      this.parentObserve = new MutationObserver(async (mutationsList: MutationRecord[]) => {
        for (const item of mutationsList) {
          if (
            item?.target === watermarkWrapperDom ||
            item?.removedNodes?.[0] === watermarkWrapperDom ||
            (item.type === 'childList' &&
              item.target === parentElement &&
              item.target.lastChild !== watermarkWrapperDom)
          ) {
            await this.update();
          }
        }
      });
      this.parentObserve.observe(parentElement, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
      });
    },
    removeObserver() {
      this.observer?.disconnect();
      this.parentObserve?.disconnect();
      this.observing = false;
    },
  },
};
