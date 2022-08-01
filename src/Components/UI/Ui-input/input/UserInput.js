import { useState } from 'react';
import UiNav from '../nav/UiNav';
import PriceCards from '../priceCards/PriceCards';
import UiColors from './UiColors';
import UiFonts from './UiFonts';
import UiText from './UiText';

function UserInput(props) {
	//nav state here
	const [navTxtActive, setNavTxtActive] = useState(true);
	const [navFontActive, setNavFontActive] = useState(false);
	const [navColorActive, setNavColorActive] = useState(false);

	const navTxtStateHandler = (txtState) => {
		setNavTxtActive(txtState);
	};

	const navFontStateHandler = (fontState) => {
		setNavFontActive(fontState);
	};
	const navColorStateHandler = (colorState) => {
		setNavColorActive(colorState);
	};

	const navState = {
		txtState: navTxtActive,
		fontState: navFontActive,
		colorState: navColorActive,
	};

	return (
		<article className="ui-input">
			<div className="ui-input-container">
				<UiNav
					setNavTxtState={navTxtStateHandler}
					setNavFontState={navFontStateHandler}
					setNavColorState={navColorStateHandler}
					navState={navState}
				/>
				<div className="ui-input-form-container">
					<UiText navState={navState.txtState} />
					<UiFonts navState={navState.fontState} />
					<UiColors navState={navState.colorState} />
				</div>
			</div>
			<PriceCards />
		</article>
	);
}
export default UserInput;
