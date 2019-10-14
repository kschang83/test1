import React, { createContext, useState } from 'react';

const ColorContext = createContext({
    state: { color: 'fjfjkfjkfkfk', subcolor: '2' },
    actions: {
        setColor: () => { },
        setSubcolor: () => { }
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('3');
    const [subcolor, setSubcolor] = useState('4');

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