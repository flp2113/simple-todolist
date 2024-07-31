import * as React from 'react';

import Title from "./components/Title/Title";
import List from "./components/List/List";

function App() {
	return (
		<React.Fragment>
			<Title text="TODO LIST" />
			<List />
		</React.Fragment>
	);
}

export default App;
