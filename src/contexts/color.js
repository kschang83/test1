import React, { createContext, useState } from 'react';

const ColorContext = createContext({
    state: { color: '111', subcolor: '22' },
    actions: {
        setColor: () => { },
        setSubcolor: () => { }
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('111');
    const [subcolor, setSubcolor] = useState('22');

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