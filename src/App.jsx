import NavBar from './NavBar';
import MainPage from './Main';
import './index.css';

function App() {
	return (
		<div className='max-w-[1700px] relative'>
			<div className='sticky top-0 flex justify-center'>
				<NavBar />
			</div>
			<MainPage />
		</div>
	);
}

export default App;
