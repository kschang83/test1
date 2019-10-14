import React, {useState, useEffect, useCallback} from 'react';
import ColorBoxItem from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColorsss from './components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColorsss />
        <ColorBoxItem />
      </div>
    </ColorProvider>
  )
}

export default App;