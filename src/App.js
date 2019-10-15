import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';
import SaveImg from './components/SaveImg';

const App = () => {
  return (
    <ColorProvider>
      <div id="canvas_div">
        <SelectColors />
        <ColorBox />
        <SaveImg />
      </div>
    </ColorProvider>
  )
}

export default App;