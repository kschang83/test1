import React, { createContext, useState } from 'react';

const ColorContext = createContext({
    state: { color: '000999', subcolor: '888777' },
    actions: {
        setColor: () => { },
        setSubcolor: () => { }
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('green');
    const [subcolor, setSubcolor] = useState('blue');

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor }
    }

    return (
        <ColorContext.Provider value={value}>
            {children}
        </ColorContext.Provider>
    )
}

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext