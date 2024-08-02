import Button from '@mui/material/Button';
import { useState } from 'react';

function AddTaskButton({ handleClickAddTask }) {
    const [open, setOpen] = useState(false);
    const [newTask, setNewTask] = useState("");

    const handleOnClick = () => setOpen(o => !o);

    const handleInputChange = (event) => setNewTask(event.target.value);

    return (
        <>
            <Button onClick={handleOnClick} variant="contained" color="success">New Task</Button>
            <form style={{ display: open? 'block' : 'none' }}>
                <input onChange={handleInputChange} placeholder='Task' type="text" />
                <Button onClick={() => handleClickAddTask(newTask)} variant='contained' type='submit'>Submit</Button>
            </form>
        </>
    );
}

export default AddTaskButton;