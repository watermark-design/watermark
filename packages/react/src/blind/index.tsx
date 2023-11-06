import React from 'react';
import Watermark, { WatermarkProps } from '../watermark';

const BlindWatermark: React.FC<WatermarkProps> = (props) => {
  return <Watermark {...props} globalAlpha={0.005} mode={'blind'}></Watermark>;
};

export default BlindWatermark;
