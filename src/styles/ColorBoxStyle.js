import chroma from 'chroma-js';
import { styled } from '@mui/material/styles'; 
import sizes from './sizes';

const ColorBoxStyle = styled('div')(({ background, showingFullPalette }) => ({
    width: '20%',
    height: showingFullPalette ? '25%' : '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    background: background,
    '&:hover button': {
        opacity: 1
    },
    [sizes.down('lg')]: {
        width: '25%',
        height: showingFullPalette ? '20%' : '33.3333%',
    },
    [sizes.down('md')]: {
        width: '50%',
        height: showingFullPalette ? '10%' : '20%',
    },
    [sizes.down('xs')]: {
        width: '100%',
        height: showingFullPalette ? '5%' : '10%',
    }
}));

const BoxContent = styled('div')(({}) => ({
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
}))

const CopyText = styled('p')(({ background }) => ({
    color: chroma(background).luminance() >= 0.5 ? 'black' : 'white'
}));

const ColorName = styled('span')(({ background }) => ({
    color: chroma(background).luminance() <= 0.08 ? 'white' : 'black'
}));

const SeeMore = styled('span')(({ background }) => ({
    color: chroma(background).luminance() >= 0.5 ? 'rgba(0,0,0,0.5)' : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase'
}));

const CopyButton = styled('button')(({ background }) => ({
    color: chroma(background).luminance() >= 0.5 ? 'rgba(0,0,0,0.5)' : 'white',
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    textDecoration: 'none',
    opacity: '0'
}));

const CopyOverlay = styled('div')(({ copied, background }) => ({
    opacity: copied ? '1' : '0',
    zIndex: copied ? '10' : '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: copied ? 'scale(50)' : 'scale(0.1)',
    position: copied ? 'absolute' : 'relative',
    background: background
}));

const CopyMsg = styled('div')(({ copied }) => ({
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '4rem',
    transform: copied ? 'scale(1)' : 'scale(0.1)',
    opacity: copied ? '1' : '0',
    zIndex: copied ? '25' : '-1',
    transition: 'all 0.4s ease',
    transitionDelay: copied ? '0.3s' : '0s',
    textTransform: 'uppercase',
    color: 'white',
    '& h1': { 
        fontWeight: '400',
        textShadow: '1px 2px black',
        background: 'rgba(255, 255, 255, 0.3)',
        width: '100%',
        textAlign: 'center',
        marginBottom: '0',
        padding: '0',
        [sizes.down('xs')]: {
            fontSize: '5rem'
        }
    },
    '& p': { 
        fontSize: '2rem',
        fontWeight: '100',
    }
}));

const ColorBoxStyles = {
    ColorBoxStyle,
    BoxContent,
    CopyText,
    ColorName,
    SeeMore,
    CopyButton,
    CopyOverlay,
    CopyMsg
};

export default ColorBoxStyles