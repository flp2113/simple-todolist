import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MainTheme from '../theme/MainTheme';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useState } from 'react';

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
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};

function EditTaskButton({ open, id, handleStatusModal, handleClickUpdate }) {
    const [updatedTask, setUpdatedTask] = useState("");

    const handleInputChange = (event) => setUpdatedTask(event.target.value);

    const confirmUpdateTask = () => {
        handleClickUpdate(id, updatedTask);
        window.location.reload();
    } 

    return (
        <ThemeProvider theme={MainTheme}>
            <IconButton onClick={handleStatusModal} sx={buttonStyles} aria-label="edit">
                <ModeEditIcon />
            </IconButton>
            <Modal open={open} aria-labelledby="modal-title" aria-describedby="modal-form">
                <Box sx={modalStyle}>
                    <Typography sx={{ color: 'main.platinum' }} id="modal-title" variant="h4" component="h2">Editing task</Typography>
                    <Stack spacing={2}>
                        <FormControl>
                            <Input onChange={handleInputChange} sx={{ color: 'main.platinum' }} placeholder="Task" required />
                        </FormControl>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button onClick={confirmUpdateTask} variant="contained" color="success">Confirm</Button>
                            <Button variant="contained" color="error">Close</Button>
                        </Box>
                    </Stack>
                </Box>
            </Modal>
        </ThemeProvider>
    );
}  

export default EditTaskButton;