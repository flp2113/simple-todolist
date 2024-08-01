import * as React from 'react';

import Title from "./components/Title";
import List from "./components/List";

function App() {
	return (
		<React.Fragment>
			<Title text="TODO LIST" />
			<List />
		</React.Fragment>
	);
}

export default App;
