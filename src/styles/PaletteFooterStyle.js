import { styled } from '@mui/material/styles'; 

const PaletteFooterStyle = styled('footer')(({}) => ({
    backgroundColor: 'white',
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold'
}));

const Emoji = styled('span')(({}) => ({
    fontSize: '1.5rem',
    margin: '0 1rem'
}));

const PaletteFooterStyles = {
    PaletteFooterStyle,
    Emoji
};

export default PaletteFooterStyles