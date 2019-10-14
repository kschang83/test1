import React, {useState, useEffect, useCallback} from 'react';
import ColorBoxItem from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBoxItem />
      </div>
    </ColorProvider>
  )
}

export default App;