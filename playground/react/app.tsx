import React, { useState, ChangeEvent } from 'react';
import { Watermark } from '../../packages/react/src/main';
import { AdvancedStyleType, GridLayoutOptions } from '../../packages/core/src/main';

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('hello watermark');

  const handleInputChange = (event: ChangeEvent) => {
    setInputValue((event.target as HTMLInputElement).value);
  };

  const gridLayoutOptions: GridLayoutOptions = {
    rows: 2,
    cols: 2,
    gap: [20, 20],
    matrix: [
      [1, 0],
      [0, 1],
    ],
  };

  const advancedStyle: AdvancedStyleType = {
    type: 'linear',
    colorStops: [
      {
        offset: 0,
        color: 'red',
      },
      {
        offset: 1,
        color: 'blue',
      },
    ],
  };

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <Watermark
        width={200}
        height={200}
        content={inputValue}
        layout={'grid'}
        gridLayoutOptions={gridLayoutOptions}
        advancedStyle={advancedStyle}
      >
        <div style={{ height: 400 }}></div>
      </Watermark>
    </div>
  );
}

export default App;
