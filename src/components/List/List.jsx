import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import MainTheme from '../../theme/MainTheme';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/task';

const constainerStyles = {
    mt: '25px',
    bgcolor: 'main.yinmn_blue',
    borderRadius: '10px',
    p: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
};

function List() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => async () => {
        try{
            const response = await axios.get(BASE_URL);
            const keys = Object.keys(response.data);
            const ts = keys.map(k => {
                return { ...response.data[k] };
            })
            console.log('DEBUG TASKS', ts); //DEBUG
            setTasks(ts);
        } catch(error){
            console.log('ERROR WHILE FETCHING TASKS');
            console.log(error);
        }
    }, []);

    return (
        <ThemeProvider theme={MainTheme}>
            <Container sx={constainerStyles}>
                {tasks.map(t => {
                    return (
                        <Item key={t.id} 
                            task={t.task} 
                            creationDate={t.creation_date} 
                            isDone={t.isDone} 
                            id={t.id}
                        />
                    );
                })}
            </Container>
        </ThemeProvider>
    );
}

export default List;