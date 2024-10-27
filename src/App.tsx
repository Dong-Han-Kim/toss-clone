import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './component/nav';

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export default App;
