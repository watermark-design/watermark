import React, { useState, ChangeEvent } from 'react';
import { BlindWatermark } from '../../packages/react/src/main';

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('hello watermark');

  const handleInputChange = (event: ChangeEvent) => {
    setInputValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <BlindWatermark width={200} height={200} content={inputValue}>
        <div style={{ height: 400 }}></div>
      </BlindWatermark>
    </div>
  );
}

export default App;
