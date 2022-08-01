import Header from '../Header';
import Body from './Body';

function Home() {
	document.body.classList.remove('ui-body');

	return (
		<>
			<Header className="home-logo" />
			<Body />
		</>
	);
}

export default Home;
