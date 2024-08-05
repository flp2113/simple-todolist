import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import MainTheme from '../theme/MainTheme';
import Item from './Item';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ListContainerStyle } from './styles/ListStyles';
import AddTaskButton from './AddTaskButton';

const BASE_URL = 'http://localhost:3000/api/task';
const date = new Date();

function List({ filterValue }) {

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
    }, [filterValue]);

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

    const handleClickAddTask = (newTask) => {
        try{
            axios.post(BASE_URL, {
                task: newTask
            });
        } catch(error) {
            console.log('ERROR WHILE ADDING NEW TASK');
            console.log(error);
        }
    };

    const filteredTasks = tasks.filter(t => {
        if (filterValue === 'all') return true;
        if (filterValue === 'done') return t.isDone;
        if (filterValue === 'not-done') return !t.isDone;
        return true;
    });

    return (
        <ThemeProvider theme={MainTheme}>
            <Container sx={ListContainerStyle}>
                {filteredTasks.map(t => {
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
                <AddTaskButton handleClickAddTask={handleClickAddTask} />
            </Container>
        </ThemeProvider>
    );
}

export default List;