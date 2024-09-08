import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'rc-slider';
import NavbarStyles from './styles/NavbarStyle';
import 'rc-slider/assets/index.css';

const { NavbarStyle, Logo, SliderStyle, SelectContainer} = NavbarStyles;

function Navbar( { level, changeLevel, handleChange, showingAllColors}) {

    const [format, setFormat] = useState('hex');
    const [open, setOpen] = useState(false)

    const handleFormatChange = (e) => {
        setFormat(e.target.value)
        setOpen(true)
        handleChange(e.target.value)
    };

    const closeSnackBar = () => {
        setOpen(false)
    };

    return (
        <NavbarStyle>
            <Logo>
                <Link to='/'>reactcolorpicker</Link>
            </Logo>
            {showingAllColors && (<div>
                <span>Level: {level}</span>
                <SliderStyle>
                    <Slider 
                        defaultValue={level} 
                        min={100} 
                        max={900}
                        step={100} 
                        onChangeComplete={changeLevel}/>
                </SliderStyle>
            </div>
            )}
            <SelectContainer>
                <Select value={format} onChange={handleFormatChange}>
                    <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgb(255,255,255,1.0)</MenuItem>
                </Select>
            </SelectContainer>
            <Snackbar 
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
                open={open}
                autoHideDuration={3000}
                message={<span id='message-id'>Format Changed To {format.toLocaleUpperCase()}</span>}
                ContentProps={{
                    'aria-describedby': 'message-id'
                }}
                onClose={closeSnackBar}
                action={[
                    <IconButton 
                        onClick={closeSnackBar} 
                        color='inherit' 
                        key='close' 
                        aria-label='close'
                    >
                        <CloseIcon />
                    </IconButton>
                ]}
            />       
        </NavbarStyle>
    )
};

export default Navbar;