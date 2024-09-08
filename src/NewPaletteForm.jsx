import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import NewPaletteFormStyles from './styles/NewPaletteFormStyle';
import seedColors from './seedColors';

const { drawerWidth, Main, Container, DrawerHeader } = NewPaletteFormStyles;

function NewPaletteForm({ savePalette, palettes, maxColors = 20 }) {
  const [open, setOpen] = React.useState(false);
  const [currentColor] = useState('teal');
  const [colors, setColors] = useState(seedColors[0].colors);

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const clearColors = () => {
    setColors([])
  };

  const addRandomColor = () => {
    const allColors = palettes.map(p => p.colors).flat()
    let rand
    let randomColor
    let isDuplicateColor = true
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length)
      randomColor = allColors[rand]
      isDuplicateColor = colors.some(color => color.name === randomColor.name)
    }
    setColors([...colors, randomColor])
  };

  const handleSubmit = (newPalette) => {
    const { paletteName } = newPalette
    const newPaletteId = paletteName.toLowerCase().replace(/ /g, '-')
  
    const paletteToSave = {
      ...newPalette,
      id: newPaletteId,
      colors: colors
    }
    
    savePalette(paletteToSave)
    navigate('/')
  };

  const removeColor = (colorName) => {
    setColors(colors.filter(color => color.name !== colorName))
  };

  const onSortEnd = ({oldIndex, newIndex}) => {
    setColors((currentColor) => arrayMove(currentColor, oldIndex, newIndex))
  };

  const paletteIsFull = colors.length >= maxColors;

  return (
    <Box sx={{ display: 'flex' }}>
      <PaletteFormNav 
        open={open}
        setOpen={setOpen} 
        palettes={palettes} 
        colors={colors}
        currentColor={currentColor}
        savePalette={savePalette}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon /> 
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Container>
            <Typography variant='h4' gutterBottom>
                Design Your Palette
            </Typography>
            <div>
                <Button 
                    variant='contained' 
                    color='error' 
                    onClick={clearColors}
                >
                    Clear Palette
                </Button>
                <Button 
                    variant='contained' 
                    color='primary'
                    onClick={addRandomColor}
                    disabled={paletteIsFull}
                >
                    Random Color
                </Button>
                <ColorPickerForm 
                    paletteIsFull={paletteIsFull}
                    colors={colors}
                    setColors={setColors}
                />
            </div>
        </Container>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DraggableColorList 
            colors={colors} 
            removeColor={removeColor}
            axis='xy'
            onSortEnd={onSortEnd}
            distance={20}
        />
      </Main>
    </Box>
  );
}

export default NewPaletteForm