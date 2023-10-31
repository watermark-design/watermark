import React, { useState } from 'react';
import { Watermark } from '../../packages/react/src/main';

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('hello watermark');

  const handleInputChange = (event: ChangeEvent) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <Watermark
        width={200}
        height={200}
        content={inputValue}
      >
        <div style={{height: 400}}></div>
      </Watermark>
    </div>
  );
}

export default App;
