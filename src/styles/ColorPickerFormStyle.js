import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color';
import { TextValidator } from 'react-material-ui-form-validator';


const Picker = styled(ChromePicker)(({}) => ({
    width: '100% !important',
    marginTop: '2rem'
}));

const AddColor = styled(Button)(({}) => ({
    width: '100%',
    padding: '1rem',
    marginTop: '1rem',
    fontSize: '2rem'
}));

const ColorNameInput = styled(TextValidator)(({}) => ({
    width: '100%',
    height: '70px'
}));

const ColorPickerFormStyles = {
    Picker,
    AddColor,
    ColorNameInput
};

export default ColorPickerFormStyles