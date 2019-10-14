import React, { createContext, useState } from 'react';

const ColorContext = createContext({
    state: { color: '1231', subcolor: '456' },
    actions: {
        setColor: () => { },
        setSubcolor: () => { }
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('1231');
    const [subcolor, setSubcolor] = useState('456');

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