import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MainTheme from '../../theme/MainTheme';
import TaskInfo from '../TaskInfo/TaskInfo';
import axios from 'axios';

const buttonStyles = {
    color: 'main.yinmn_blue',
    '&.Mui-checked': {
        color: 'main.yinmn_blue',
    },
    '& .MuiSvgIcon-root': { 
        fontSize: 30 
    }
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'main.yinmn_blue',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

function EditTaskButton({ open, handleEditClick }) {
    return (
        <ThemeProvider theme={MainTheme}>
            <IconButton onClick={handleEditClick} sx={buttonStyles} aria-label="edit">
                <ModeEditIcon />
            </IconButton>
            <Modal open={open} onClose={handleEditClick} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </ThemeProvider>
    );
}  

export default EditTaskButton;