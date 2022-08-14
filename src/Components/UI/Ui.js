import Header from '../Header';
import { TextCtxProvider } from '../store/txtCtx';
import UiDisplay from './Ui-display/UiDisplay';
import UserInput from './Ui-input/input/UserInput';


window.navigator.onLine === false && alert('This application requires Internet connection.Please, connect to the internet and try again.')

function Ui() {
	
	document.body.classList.add('ui-body');

	return (
		<>
			<Header className="ui-logo" />
			<TextCtxProvider>
				<main className="container">
					<section className="ui-container">
						<UserInput />
						<UiDisplay />
					</section>
				</main>
			</TextCtxProvider>
		</>
	);
}
export default Ui;

/**
 * Here i needed to provide the context since both of the components that needs access are here.
 */
