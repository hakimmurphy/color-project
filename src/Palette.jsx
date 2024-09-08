import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteStyles from './styles/PaletteStyle';
import PaletteFooter from './PaletteFooter';

const { PaletteStyle, PaletteColors } = PaletteStyles;

function Palette( { palette }) {

    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');

    const { colors, paletteName, emoji, id } = palette

    const changeLevel = (newLevel) => {
        setLevel(newLevel)
    };

    const changeFormat = (val) => {
        setFormat(val)
    };

    const colorBoxes = colors[level].map(color => (
        <ColorBox 
            background={color[format]} 
            name={color.name} 
            key={color.id}
            moreUrl={`/palette/${id}/${color.id}`}
            showingFullPalette
        />
    ));

    return (
        <PaletteStyle>
            <Navbar 
                level={level} 
                changeLevel={changeLevel}
                handleChange={changeFormat}
                showingAllColors
            />
            <PaletteColors>
                {colorBoxes}
            </PaletteColors>
            <PaletteFooter paletteName={paletteName} emoji={emoji}/>
        </PaletteStyle>
    )
}

export default Palette;