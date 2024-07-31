import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider } from '@mui/material/styles';
import MainTheme from '../../theme/MainTheme';
import { useState } from 'react';
import TaskInfo from '../TaskInfo/TaskInfo';

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

function Item({ task, creationDate, isDone, id }) {
    const [checked, setChecked] = useState(false);

    const handleChangeCheckbox = (event) => {
        setChecked(event.target.checked);
    }

    return (
        <ThemeProvider theme={MainTheme}>
            <Container sx={constainerStyles}>
                <Box sx={taskInfoStyles}>
                    <Checkbox onChange={handleChangeCheckbox} checked={checked} sx={buttonStyles}/>
                    <TaskInfo task={task} date={creationDate} done={isDone} />
                </Box>

                <Box>
                    <IconButton sx={buttonStyles} aria-label="edit">
                        <ModeEditIcon />
                    </IconButton>
                    <IconButton sx={buttonStyles} aria-label="delete">
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