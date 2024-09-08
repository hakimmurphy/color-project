import React, { useState } from 'react';
import PaletteMetaForm from './PaletteMetaForm';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Dialog } from '@mui/material';
import PaletteFormNavStyles from './styles/PaletteFormNavStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const { Root, AppBar, NavBtns } = PaletteFormNavStyles;

function PaletteFormNav( { open, palettes, colors, currentColor, handleSubmit, handleDrawerOpen }) {

    const [formShowing, setFormShowing] = useState(false);

    const showForm = () => {
        setFormShowing(true)
    };

    const hideForm = () => {
        setFormShowing(false);
    };

    return(
        <Root>
            <CssBaseline />
            <AppBar position="fixed" color='default' open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Create A Palette
                    </Typography>
                </Toolbar>
                <NavBtns>
                    <Link to='/'>
                            <Button 
                                variant='contained'
                                color='error'
                                className='button'
                            >
                                Go Back 
                            </Button>
                    </Link>
                    <Button variant="contained" onClick={showForm} className='button'>
                        Save
                    </Button>
                </NavBtns>
            </AppBar>
            <Dialog open={formShowing} onClose={hideForm}>
                <PaletteMetaForm
                    open={formShowing}
                    palettes={palettes}
                    colors={colors}
                    currentColor={currentColor} 
                    handleSubmit={handleSubmit} 
                    onClose={hideForm}
                />
            </Dialog>
        </Root>
    )
};

export default PaletteFormNav