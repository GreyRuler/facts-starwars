import './App.css'
import './assets/css/google-icons.css'
import { FactInput } from './components/FactInput';
import { FactList } from './components/FactList';

function App() {
	return (
		<div className='app'>
			<FactInput />
			<FactList />
		</div>
	);
}

export default App;
