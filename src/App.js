import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

import Ui from './Components/UI/Ui';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="Ui" element={<Ui />} />
		</Routes>
	);
}

export default App;
