import { Box } from "@mui/material";

function TaskInfo({ task, creationDate, isDone }){
    const taskStyle = {
        fontWeight: 500,
        textDecoration: isDone? 'line-through' : 'none',
        color: isDone? 'grey' : 'black',
        opacity: isDone? 0.8 : 1,
        transition: '0.5s all'
    };

    return (
        <Box sx={{color: 'black'}}>
            <p style={taskStyle}>{task}</p>
            <p style={{ fontSize: '12px' }}>{creationDate}</p>
        </Box>
    );
}

export default TaskInfo;