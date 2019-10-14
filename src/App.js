import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColorsss from './components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColorsss />
        <ColorBox />
      </div>
    </ColorProvider>
  )
}

export default App;