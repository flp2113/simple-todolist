import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider } from '@emotion/react';
import MainTheme from '../theme/MainTheme';

function TaskFilter({ filterValue, handleFilter }) {
    return (
        <ThemeProvider theme={MainTheme}>
            <Box sx={{ mt: '15px' }}>
                <FormControl sx={{ width: 200 }}>
                    <InputLabel id='task-filter-label'>Filter</InputLabel>
                    <Select
                    labelId='task-filter-label'
                    id='task-filter'
                    label='Filter'
                    value={filterValue}
                    onChange={handleFilter}
                    >
                        <MenuItem value='all'>All</MenuItem>
                        <MenuItem value='done'>Done</MenuItem>
                        <MenuItem value='not-done'>Not Completed</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </ThemeProvider>
    );
}

export default TaskFilter;