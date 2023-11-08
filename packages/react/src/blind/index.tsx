import React from 'react';
import Watermark, { WatermarkProps } from '../watermark';

const BlindWatermark: React.FC<WatermarkProps> = (props) => {
  const { globalAlpha = 0.005, mode = 'blind' } = props;
  return <Watermark {...props} globalAlpha={globalAlpha} mode={mode}></Watermark>;
};

export default BlindWatermark;
