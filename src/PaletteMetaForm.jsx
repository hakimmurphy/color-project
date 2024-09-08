import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

function PaletteMetaForm( { palettes, colors, currentColor, handleSubmit, onClose }) {

    const [newPaletteName, setNewPaletteName] = useState('');
    const [stage, setStage] = useState('form')

    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            return palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        })
        return () => {
            ValidatorForm.removeValidationRule('isPaletteNameUnique');
        }
    }, [colors, currentColor]);

    const handleChangePaletteName = (evt) => {
        setNewPaletteName(evt.target.value);
    };

    const showEmojiPicker = () => {
        setStage('emoji')
    };

    const savePalette = (emoji) => {
        const newPalette = {
            paletteName: newPaletteName, 
            emoji: emoji.native
        }
        handleSubmit(newPalette);
        onClose();
    };

    return (
        <div>
            <Dialog open={stage === 'emoji'} onClose={onClose}>
            <DialogTitle>Choose an Emoji</DialogTitle>
                <Picker 
                    data={data} 
                    onEmojiSelect={savePalette} 
                />
            </Dialog>
            <Dialog
                open={stage === 'form'}
                onClose={onClose}
            >
                <DialogTitle>Choose a Palette Name</DialogTitle>
                <ValidatorForm onSubmit={showEmojiPicker}>
                        <TextValidator
                            label='Palette Name' 
                            value={newPaletteName}
                            name='newPaletteName'
                            onChange={handleChangePaletteName}
                            fullWidth
                            margin='normal'
                            validators={['required', 'isPaletteNameUnique']}
                            errorMessages={['Enter Palette Name', 'Name already used']}
                        ></TextValidator>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a name for your new beautiful palette. Make sure it's unique!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button 
                            variant='contained' 
                            color='primary' 
                            type='submit'
                        >
                            Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    );
    }

export default PaletteMetaForm