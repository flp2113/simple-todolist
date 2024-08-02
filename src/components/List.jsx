import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import MainTheme from '../theme/MainTheme';
import Item from './Item';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ListContainerStyle } from './styles/ListStyles';

const BASE_URL = 'http://localhost:3000/api/task';
const date = new Date();

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

    const handleClickDelete = async (id) => {
        try{
            setTasks(prevTasks => prevTasks.filter(t => t.id !== id));
            axios.delete(`${BASE_URL}/${id}`);
        } catch(error) {
            console.log('ERROR WHILE DELETING TASK');
            console.log(error);
        } 
    }

    const handleClickUpdate = async (id, isDone, taskUpdated) => {
        try{
            await axios.put(`${BASE_URL}/${id}`, {
                task: taskUpdated,
                creationDate: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
                isDone
            });
        } catch(error) {
            console.log('ERROR WHILE UPDATING TASK');
            console.log(error);
        }
    };

    return (
        <ThemeProvider theme={MainTheme}>
            <Container sx={ListContainerStyle}>
                {tasks.map(t => {
                    return (
                        <Item key={t.id} 
                            task={t.task} 
                            creationDate={t.creationDate} 
                            isDone={t.isDone} 
                            id={t.id}
                            handleClickDelete={handleClickDelete}
                            handleClickUpdate={handleClickUpdate}
                        />
                    );
                })}
            </Container>
        </ThemeProvider>
    );
}

export default List;