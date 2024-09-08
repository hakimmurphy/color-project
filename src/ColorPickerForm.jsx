import React, { useState, useEffect } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import ColorPickerFormStyles from './styles/ColorPickerFormStyle';

const { Picker, AddColor, ColorNameInput } = ColorPickerFormStyles

function ColorPickerForm( { paletteIsFull, colors, setColors }) {

    const [currentColor, setCurrentColor] = useState('teal');
    const [newColorName, setNewColorName] = useState('');

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', value => {
            return colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        })
        ValidatorForm.addValidationRule('isColorUnique', value => {
            return colors.every(
                ({ color }) => color.toLowerCase() !== currentColor
            )
        })
        return () => {
            ValidatorForm.removeValidationRule('isColorNameUnique');
            ValidatorForm.removeValidationRule('isColorUnique');
        }
    }, [colors, currentColor]);

    const updateCurrentColor = (newColor) => {
        setCurrentColor(newColor.hex)
    };

    const addNewColor = () => {
        const newColor = {
            color: currentColor,
            name: newColorName
        }
        setColors([...colors, newColor])
        setNewColorName('')
    };

    const handleChangeColorName = (evt) => {
        setNewColorName(evt.target.value);
      };

    return(
        <div>
            <Picker
                color={currentColor} 
                onChangeComplete={updateCurrentColor} 
            />
            <ValidatorForm onSubmit={addNewColor} instantValidate={false}>
                <ColorNameInput 
                    value={newColorName}
                    name='newColorName'
                    placeholder='Color Name'
                    variant='filled'
                    margin='normal' 
                    onChange={handleChangeColorName} 
                    validators={['required','isColorNameUnique', 'isColorUnique']}
                    errorMessages={[
                        'Enter a color name',
                        'Color name must be unique', 
                        'Color used already'
                    ]}
                />
                <AddColor
                    variant='contained' 
                    type='submit'
                    color='primary'
                    disabled={paletteIsFull} 
                    style={{backgroundColor: paletteIsFull ? 'grey' : currentColor}}
                >
                    {paletteIsFull ? 'Palette Full' : 'Add Color'}
                </AddColor>
            </ValidatorForm>
        </div>
    )
};

export default ColorPickerForm