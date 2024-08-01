import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const buttonStyles = {
    color: 'main.yinmn_blue',
    '&.Mui-checked': {
        color: 'main.yinmn_blue',
    },
    '& .MuiSvgIcon-root': { 
        fontSize: 30 
    }
};

function DeleteTaskButton({ id, handleClickDelete }) {
    return (
        <IconButton onClick={() => handleClickDelete(id)} sx={buttonStyles} aria-label="delete">
            <DeleteIcon />
        </IconButton>
    );
}

export default DeleteTaskButton;