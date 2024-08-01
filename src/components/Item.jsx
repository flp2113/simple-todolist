import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import MainTheme from '../theme/MainTheme';
import TaskInfo from './TaskInfo';
import axios from 'axios';
import DeleteTaskButton from './DeleteTaskButton.jsx/DeleteTaskButton';
import EditTaskButton from './EditTaskButton';

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

function Item({ task, creationDate, isDone, id, handleClickDelete, handleClickUpdate }) {
    const [checked, setChecked] = useState(isDone);
    const [open, setOpen] = useState(false);

    const handleStatusModal = () => setOpen(o => !o);

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
                    <EditTaskButton open={open} id={id} handleStatusModal={handleStatusModal} handleClickUpdate={handleClickUpdate} />
                    <DeleteTaskButton id={id} handleClickDelete={handleClickDelete} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Item;