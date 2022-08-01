import Header from '../Header';
import { TextCtxProvider } from '../store/txtCtx';
import UiDisplay from './Ui-display/UiDisplay';
import UserInput from './Ui-input/input/UserInput';

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
