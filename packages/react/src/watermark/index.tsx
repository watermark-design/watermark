import React, { useState, useMemo, useEffect } from 'react';
import {
  convertImage,
  generateBackgroundSize,
  initialOptions,
  renderLayout,
  WatermarkCanvas,
} from '@watermark-design/core';
import type { WatermarkOptions } from '@watermark-design/core';
import { useMount, useDebounceFn } from 'ahooks';

type OmittedWatermarkOptions = Partial<
  Omit<WatermarkOptions, 'parent' | 'mutationObserve' | 'appendToBody'>
>;

export type WatermarkProps = OmittedWatermarkOptions & {
  children?: React.ReactNode;
};

const Watermark: React.FC<WatermarkProps> = (props) => {
  const {
    width = initialOptions.width,
    height = initialOptions.height,
    layout = initialOptions.layout,
    gridLayoutOptions = initialOptions.gridLayoutOptions,
    zIndex = initialOptions.zIndex,
    movable = initialOptions.movable,
    backgroundPosition = initialOptions.backgroundPosition,
    backgroundRepeat = initialOptions.backgroundRepeat,
  } = props;

  let watermarkCanvas: WatermarkCanvas;

  const [watermarkImage, setWatermarkImage] = useState<string>();

  const options: WatermarkOptions = useMemo(() => {
    return {
      ...initialOptions,
      ...props,
    };
  }, [props]);

  const watermarkWrapperStyle: React.CSSProperties = useMemo(() => {
    // const important = mutationObserve ? '!important' : '';
    const important = '';
    return {
      // ...(this.mutationObserve && {
      //   'z-index': `${this.zIndex}${important}`,
      //   display: `block${important}`,
      //   visibility: `visible${important}`,
      //   transform: `none${important}`,
      //   scale: `none${important}`,
      // }),
      position: `relative${important}`,
    };
  }, []);

  const watermarkStyle: React.CSSProperties = useMemo(() => {
    // const important = mutationObserve ? '!important' : '';
    const important = '';
    const backgroundSize = generateBackgroundSize({
      layout,
      width,
      height,
      gridLayoutOptions,
    } as WatermarkOptions);
    const appendToBody = false;
    return {
      // ...(mutationObserve && {
      //   visibility: `visible${important}`,
      //   transform: `none${important}`,
      //   scale: `none${important}`,
      // }),
      zIndex: `${zIndex}${important}`,
      display: `block${important}`,
      width: `100%${important}`,
      height: `100%${important}`,
      pointerEvents: `none${important}`,
      left: `0${important}`,
      right: `0${important}`,
      top: `0${important}`,
      bottom: `0${important}`,
      position: `${appendToBody ? 'fixed' : 'absolute'}${important}`,
      backgroundImage: `url(${watermarkImage})${important}`,
      backgroundRepeat: `${backgroundRepeat}${important}`,
      backgroundSize: `${backgroundSize[0]}px ${backgroundSize[1]}px${important}`,
      backgroundPosition: `${backgroundPosition}${important}`,
      ...(movable && {
        animation: `200s ease 0s infinite normal none running watermark ${important}`,
      }),
    };
  }, [
    layout,
    width,
    height,
    gridLayoutOptions,
    zIndex,
    watermarkImage,
    backgroundRepeat,
    backgroundPosition,
    movable,
  ]);

  const create = async () => {
    watermarkCanvas = new WatermarkCanvas(props, { ...options });
    remove();
    await handleDebounceDraw();
  };

  const remove = () => {};

  const draw = async () => {
    await watermarkCanvas?.draw();
    const layoutCanvas = renderLayout(options, watermarkCanvas.getCanvas());
    setWatermarkImage(convertImage(layoutCanvas));
    watermarkCanvas.clear();
  };

  const { run: handleDebounceDraw } = useDebounceFn(draw, {
    wait: 10,
  });

  useMount(() => {
    create();
  });

  useEffect(() => {
    create();
  }, [options]);

  return (
    <div style={watermarkWrapperStyle} className="watermark-wrapper">
      {props.children}
      <div style={watermarkStyle} className="watermark"></div>
    </div>
  );
};

export default Watermark;
