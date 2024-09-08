import { styled } from '@mui/material/styles'; 
import sizes from './sizes';

const NavbarStyle = styled('nav')(({}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh'
}));

const Logo = styled('div')(({}) => ({
    marginRight: '15px',
    padding: '0px 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    /* font-family: 'Roboto' */
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
        textDecoration: 'none',
        color: 'black'
    },
    [sizes.down('xs')]: {
        display: 'none'
    }
}));

const SliderStyle = styled('div')(({}) => ({
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-rail': {
        height: '8px'
    },
    '& .rc-slider-track': {
        background: 'transparent'
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': 
        {
        backgroundColor: 'green',
        outline: 'none',
        border: '2px solid green',
        boxShadow: 'none',
        width: '13px',
        height: '13px',
        marginLeft: '-7px',
        marginTop: '-3px'
    },
    [sizes.down('sm')]: {
        width: '150px'
    }
}));

const SelectContainer = styled('div')(({}) => ({
    marginLeft: 'auto',
    marginRight: '1rem'
}));

const NavbarStyles = {
    NavbarStyle,
    Logo,
    SliderStyle,
    SelectContainer
};

export default NavbarStyles

