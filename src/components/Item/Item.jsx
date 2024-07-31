import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MainTheme from '../../theme/MainTheme';
import TaskInfo from '../TaskInfo/TaskInfo';
import axios from 'axios';

import EditTaskButton from '../EditTaskButton/EditTaskButton';

const BASE_URL = 'http://localhost:3000/api/task';

const constainerStyles = {
    bgcolor: 'main.platinum',
    borderRadius: '5px',
    p: '5px',
    display: 'flex',
    justifyContent: 'space-between'
};

const buttonStyles = {
    color: 'main.yinmn_blue',
    '&.Mui-checked': {
        color: 'main.yinmn_blue',
    },
    '& .MuiSvgIcon-root': { 
        fontSize: 30 
    }
};

const taskInfoStyles = {
    display: 'flex',
    alignItems: 'center'
};

function Item({ task, creationDate, isDone, id, handleClickDelete }) {
    const [checked, setChecked] = useState(isDone);
    const [open, setOpen] = useState(false);

    const handleEditClick = () => setOpen(o => !o);

    const handleChangeCheckbox = async () => {
        const previousChecked = checked;
        setChecked(c => !c);
        try{
            await axios.put(`${BASE_URL}/${id}`, {
                task,
                creationDate,
                isDone: !previousChecked
            });            
        } catch(error) {
            setChecked(previousChecked);
            console.log('ERROR WHILE CHECKING BOX');
            console.log(error);
        }
    }

    return (
        <ThemeProvider theme={MainTheme}>
            <Container sx={constainerStyles}>
                <Box sx={taskInfoStyles}>
                    <Checkbox onChange={handleChangeCheckbox} checked={checked} sx={buttonStyles}/>
                    <TaskInfo task={task} creationDate={creationDate} isDone={checked} />
                </Box>
                <Box>
                    <EditTaskButton open={open} handleEditClick={handleEditClick} />
                    <IconButton onClick={() => handleClickDelete(id)} sx={buttonStyles} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

/*
    Checkbox
    Task Content
    Button Delete
    Button Update
*/

export default Item;