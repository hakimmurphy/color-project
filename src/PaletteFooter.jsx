import React from 'react';
import PaletteFooterStyles from './styles/PaletteFooterStyle';

const { PaletteFooterStyle, Emoji } = PaletteFooterStyles

function PaletteFooter(props) {
    const {paletteName, emoji} = props
    return(
        <PaletteFooterStyle>
            {paletteName}
            <Emoji>
                {emoji}
            </Emoji>
        </PaletteFooterStyle>
    )
};

export default PaletteFooter;