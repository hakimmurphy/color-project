import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@mui/icons-material/Delete';
import DraggableColorBoxStyles from './styles/DraggableColorBoxStyle';

const { Root, BoxContent } = DraggableColorBoxStyles;

const DraggableColorBox = ({ color, name, handleClick }) => {
    
    return(
        <Root style={{backgroundColor: color}}>
            <BoxContent color={color}>
                <span>{name}</span>
                <DeleteIcon className='deleteIcon' onClick={handleClick} />
            </BoxContent>
        </Root>
    )
};

export default SortableElement(DraggableColorBox)