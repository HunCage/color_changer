import Content from './Content';
import InputColor from './InputColor';
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('');
  // const changeColor = (color) => {

  // }

  return (
    <div className="App">
      <Content
        colorValue={colorValue}
      />
      <InputColor
        colorValue={colorValue}
        setColorValue={setColorValue}
      />
    </div>

  );
}

export default App;
