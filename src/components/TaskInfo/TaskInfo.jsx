import { Box } from "@mui/material";

function TaskInfo({ task, date, done }){
    return (
        <Box sx={{color: 'black'}}>
            <p style={{ fontWeight: 500 }}>{task}</p>
            <p style={{ fontSize: '12px' }}>{date}</p>
        </Box>
    );
}

export default TaskInfo;