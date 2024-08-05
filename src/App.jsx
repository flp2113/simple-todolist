import * as React from 'react';
import List from "./components/List";
import TaskFilter from './components/TaskFilter';
import { Container } from '@mui/material';

function App() {
	const [filter, setFilter] = React.useState('all');

	const handleFilter = (event) => setFilter(event.target.value);

	return (
		<React.Fragment>
			<Container>
				<TaskFilter filterValue={filter} handleFilter={handleFilter} />
				<List filterValue={filter} />
			</Container>
		</React.Fragment>
	);
}

export default App;
