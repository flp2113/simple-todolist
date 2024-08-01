import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckboxButtonStyle } from '../styles/GeneralStyles';

function DeleteTaskButton({ id, handleClickDelete }) {
    return (
        <IconButton onClick={() => handleClickDelete(id)} sx={CheckboxButtonStyle} aria-label="delete">
            <DeleteIcon />
        </IconButton>
    );
}

export default DeleteTaskButton;