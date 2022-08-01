import { useState } from 'react';
import Header from '../Header';
import { TextCtxProvider } from '../store/txtCtx';
import UiDisplay from './Ui-display/UiDisplay';
import UserInput from './Ui-input/input/UserInput';

const defaultColor = '#20f020';

function Ui() {
	//UiText state
	const [captureUserText, setCaptureUserText] = useState('');
	const [capturedStorageText, setCapturedStorageText] = useState();
	const [storageStatus, setStorageStatus] = useState();
	const [capturedDelTxtState, setCapturedDelTxtState] = useState();
	const [txtState, setTxtState] = useState(false);

	//DIMENSION
	const [width, setWidth] = useState();
	const [capturedLetterHeight, setCapturedLetterHeight] = useState();
	//UiFont state
	const [fontFamily, setFontFamily] = useState();
	const [fontState, getFontState] = useState(false);
	//UiColor State
	const [colorActive, setColorActive] = useState(defaultColor);
	//Debounce state for priceCard
	const [debounceActive, setDebounceActive] = useState(false);

	

	const debounceHandler = (stat) => {
		setDebounceActive(stat);
	};

	const delTxtStateHandler = (delTxtState) => {
		setCapturedDelTxtState(delTxtState);
	};

	const txtStateHandler = (txtState) => {
		setTxtState(txtState);
	};

	const captureUserTextHandler = (userText) => {
		setCaptureUserText(userText);
	};

	const captureStorageTextHandler = (storageText) => {
		setCapturedStorageText(storageText);
	};

	const storageStatusHandler = (status) => {
		setStorageStatus(status);
	};

	const activeColorHandler = (color) => {
		setColorActive(color);
	};

	const widthHandler = (width) => {
		setWidth(width);
	};

	document.body.classList.add('ui-body');

	return (
		<>
			<Header className="ui-logo" />
			<TextCtxProvider>
			<main className="container">
				<section className="ui-container">
			
						<UserInput
							captureUserText={captureUserTextHandler}
							userText={captureUserText}
							letterHeight={capturedLetterHeight}
							captureStorageText={captureStorageTextHandler}
							storageText={capturedStorageText}
							captureDelTxtState={delTxtStateHandler}
							txtState={txtStateHandler}
							setStorageStatus={storageStatusHandler}
							storageStatus={storageStatus}
							getFontFamily={setFontFamily}
							getFontState={getFontState}
							getActiveColor={activeColorHandler}
							activeColor={colorActive}
							debounceStatus={debounceActive}
						/>
						<UiDisplay
							setDebounce={debounceHandler}
							capturedUserText={captureUserText}
							captureLetterHeight={setCapturedLetterHeight}
							letterHeight={capturedLetterHeight}
							setWidth={widthHandler}
							width={width}
							delTxtState={capturedDelTxtState}
							txtState={txtState}
							capturedStorageText={capturedStorageText}
							storageStatus={storageStatus}
							setFontFamily={fontFamily}
							fontState={fontState}
							activeColor={colorActive}
						/>
				
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
