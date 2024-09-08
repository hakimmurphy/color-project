import React from 'react';
import MiniPaletteStyles from './styles/MiniPaletteStyle';
import DeleteIcon from '@mui/icons-material/Delete';

const { Root, Colors, Title, Emoji, MiniColor } = MiniPaletteStyles
    
const MiniPalette = React.memo(( { paletteName, emoji, colors, openDialog, goToPalette, id })  => {

    const deletePalette = (e) => {
        e.stopPropagation()
        openDialog(id)
    };

    const handleClick = () => {
        goToPalette(id)
    };

    const miniColorsBoxes = colors.map(color => (
        <MiniColor 
        style={{backgroundColor: color.color}}
        key={color.name}
        />    
    ))

    return(
        <div>
        <Root onClick={handleClick}>
            <DeleteIcon sx={
                {
                    color: 'white',
                    backgroundColor: '#eb3d30',
                    width: '20px',
                    height: '20px',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    padding: '10px',
                    zIndex: 10,
                    opacity: 0,
                    transition: 'all 0.3s ease-in-out'
                }}
                onClick={deletePalette}
            />
            <Colors>
                {miniColorsBoxes}
            </Colors>
            <Title>{paletteName}<Emoji>{emoji}</Emoji></Title> 
        </Root>
        </div>
        
    )
});

export default MiniPalette;