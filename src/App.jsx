import { useRef } from 'react';
import NavBar from './NavBar';
import MainPage from './Main';
import './index.css';

function App() {
	const experienceRef = useRef(null);
	const developmentRef = useRef(null);
	const contactRef = useRef(null);
	const aboutRef = useRef(null);

	const sectionRefs = [aboutRef, experienceRef, developmentRef, contactRef];

	const handleScroll = (section) => {
		section.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
	};

	return (
		<div className='max-w-[1700px] relative'>
			<div className='sticky top-0 flex justify-center'>
				<NavBar
					onClickHandlers={sectionRefs.map(
						(section) => () => handleScroll(section)
					)}
				/>
			</div>
			<MainPage
				aboutRef={aboutRef}
				experienceRef={experienceRef}
				developmentRef={developmentRef}
				contactRef={contactRef}
			/>
		</div>
	);
}

export default App;
