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
	

	const onDelTxtStateHandler = (delTxtState) => {
		//capture the text here
		props.captureDelTxtState(delTxtState);
	};

	const onAddedUserTextHandler = (userText) => {
		//capture the text here
		props.captureUserText(userText);
	};

	

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
					<UiText				
						onAddedUserText={onAddedUserTextHandler}
						captureStorageText={props.captureStorageText}
						onDelTxtState={onDelTxtStateHandler}
						txtState={props.txtState}
						navState={navState.txtState}
						setStorageStatus={props.setStorageStatus}
						storageStatus={props.storageStatus}
					/>
					<UiFonts
						navState={navState.fontState}
						getFontFamily={props.getFontFamily}
						getFontState={props.getFontState}
					/>
					<UiColors navState={navState.colorState} getActiveColor={props.getActiveColor} activeColor={props.activeColor}/>
				</div>
			</div>
			<PriceCards letterHeight={props.letterHeight} userText={props.userText} storageText={props.storageText} debounceStatus={props.debounceStatus} />
		</article>
	);
}
export default UserInput;
