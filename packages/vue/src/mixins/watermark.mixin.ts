import { CSSProperties, PropType, ComponentOptions } from 'vue-demi';
import { nanoid } from 'nanoid';
import debounce from 'lodash.debounce';
import {
  convertImage,
  generateBackgroundSize,
  initialOptions,
  renderLayout,
  WatermarkCanvas,
} from '@watermark-design/core';
import type {
  WatermarkOptions,
  GridLayoutOptions,
  CanvasShadowStyles,
  AdvancedStyleType,
} from '@watermark-design/core';

type OmittedWatermarkOptions = Omit<
  WatermarkOptions,
  'parent' | 'mutationObserve' | 'appendToBody'
>;

export type WatermarkMixinType = ComponentOptions &
  OmittedWatermarkOptions & {
    key: string;
    watermarkCanvas: WatermarkCanvas;
    watermarkImage: string;
    observer: MutationObserver;
    parentObserve: MutationObserver;
    observing: boolean;
    options: Partial<WatermarkOptions>;
    watermarkWrapperStyle: CSSProperties;
    watermarkStyle: CSSProperties;
    generateKey: () => string;
    create: () => Promise<void>;
    update: () => Promise<void>;
    draw: () => Promise<void>;
    remove: () => void;
    handleObserver: () => void;
    addObserver: () => void;
    removeObserver: () => void;
  };

const WatermarkMixin: ComponentOptions = {
  props: {
    width: {
      type: Number,
      default: initialOptions.width,
    },
    height: {
      type: Number,
      default: initialOptions.height,
    },
    rotate: {
      type: Number,
      default: initialOptions.rotate,
    },
    layout: {
      type: String,
      default: initialOptions.layout,
    },
    gridLayoutOptions: {
      type: Object as PropType<GridLayoutOptions>,
      default: undefined,
    },
    auxiliaryLine: {
      type: Boolean,
      default: initialOptions.auxiliaryLine,
    },
    globalAlpha: {
      type: Number,
      default: initialOptions.globalAlpha,
    },
    zIndex: {
      type: Number,
      default: 10,
    },
    mutationObserve: {
      type: Boolean,
      default: false,
    },
    movable: {
      type: Boolean,
      default: initialOptions.movable,
    },
    mode: {
      type: String,
      default: initialOptions.mode,
    },
    backgroundPosition: {
      type: String,
      default: initialOptions.backgroundPosition,
    },
    backgroundRepeat: {
      type: String,
      default: initialOptions.backgroundRepeat,
    },
    translatePlacement: {
      type: String,
      default: undefined,
    },
    translateX: {
      type: Number,
      default: undefined,
    },
    translateY: {
      type: Number,
      default: undefined,
    },
    contentType: {
      type: String,
      default: initialOptions.contentType,
    },
    content: {
      type: String,
      default: initialOptions.content,
    },
    textType: {
      type: String,
      default: initialOptions.textType,
    },
    lineHeight: {
      type: Number,
      default: initialOptions.lineHeight,
    },
    fontSize: {
      type: String,
      default: initialOptions.fontSize,
    },
    fontFamily: {
      type: String,
      default: initialOptions.fontFamily,
    },
    fontStyle: {
      type: String,
      default: initialOptions.fontStyle,
    },
    fontVariant: {
      type: String,
      default: initialOptions.fontVariant,
    },
    fontColor: {
      type: String,
      default: initialOptions.fontColor,
    },
    fontWeight: {
      type: String,
      default: initialOptions.fontWeight,
    },
    textAlign: {
      type: String,
      default: undefined,
    },
    textBaseline: {
      type: String,
      default: undefined,
    },
    filter: {
      type: String,
      default: initialOptions.filter,
    },
    textRowMaxWidth: {
      type: Number,
      default: undefined,
    },
    richTextWidth: {
      type: Number,
      default: undefined,
    },
    richTextHeight: {
      type: Number,
      default: undefined,
    },
    image: {
      type: String,
      default: undefined,
    },
    imageWidth: {
      type: Number,
      default: initialOptions.imageWidth,
    },
    imageHeight: {
      type: Number,
      default: initialOptions.imageHeight,
    },
    shadowStyle: {
      type: Object as PropType<Partial<CanvasShadowStyles>>,
      default: undefined,
    },
    advancedStyle: {
      type: Object as PropType<AdvancedStyleType>,
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
      key: '' as string,
      watermarkCanvas: null as unknown as WatermarkCanvas,
      watermarkImage: '' as string,
      observer: null as unknown as MutationObserver,
      parentObserve: null as unknown as MutationObserver,
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
      } as WatermarkOptions);
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
    generateKey(): string {
      return this.mutationObserve ? nanoid(6) : 'watermark';
    },
    create: debounce(async function (this: any) {
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
    update: debounce(async function (this: any) {
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

export default WatermarkMixin;
