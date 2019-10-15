import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    console.log(state);

    return (
        <div>
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: state.color
                }}
                id='canvas_div2'
            />

            <div
                style={{
                    width: '32px',
                    height: '32px',
                    background: state.subcolor
                }}
                id='canvas_div3'
            />
        </div>
    )
}

export default ColorBox;