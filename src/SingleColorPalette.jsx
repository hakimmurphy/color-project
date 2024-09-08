import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import PaletteStyles from './styles/PaletteStyle';

const { GoBackBox, PaletteStyle, PaletteColors } = PaletteStyles;

function SingleColorPalette( { palette }) {
    const { paletteId, colorId} = useParams();

    const {paletteName, emoji} = palette;

    const [format, setFormat] = useState('hex');
    
    const gatherShades = (palette, colorToFilterBy) => {
        let shades = []
        let allColors = palette.colors
        
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1)
    };

    let _shades = gatherShades(palette, colorId);

    const changeFormat = (val) => {
        setFormat(val)
    };

    const colorBoxes = _shades.map(color => (
        <ColorBox 
            key={color.name} 
            name={color.name} 
            background={color[format]} 
            showingFullPalette={false}
        />
    ))
    
    return(
        <PaletteStyle>
            <Navbar handleChange={changeFormat} showingAllColors={false} />
            <PaletteColors>
                {colorBoxes}
                <GoBackBox>
                    <Link to={`/palette/${paletteId}`} className='back-button'>Go Back</Link>
                </GoBackBox>
            </PaletteColors>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </PaletteStyle>
    )
}

export default SingleColorPalette