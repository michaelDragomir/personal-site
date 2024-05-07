import NavBar from './NavBar';
import MainPage from './Main';
import './index.css';

function App() {
	return (
		<main className='bg-slate-900'>
			<div className='sticky top-0 flex justify-center'>
				<NavBar />
			</div>
			<div className=''>
				<MainPage />
			</div>
		</main>
	);
}

export default App;
