import { useState } from 'react';
import NeonSwitch from './NeonSwitch';
import Canvas from './UiCanvas';
import UserTextAndBars from './UserTextAndBars';

function UiDisplay(props) {

	//Toggle switch for Neon
	const [toggleNeon, setToggleNeon] = useState(true);

	const letterHeightHandler = (letterHeight) => {

		props.captureLetterHeight(letterHeight);
	};

	const neonSwitchHandler = (switchState) => {
		setToggleNeon(switchState);
	};

	return (
		<article className="ui-display">
			<NeonSwitch
				setNeonSwitch={neonSwitchHandler}
				neonSwitchState={toggleNeon}
			/>
			<div className="ui-display-userText-container">
				<UserTextAndBars
					setDebounce={props.setDebounce}
					capturedUserText={props.capturedUserText}
					letterHeight={props.letterHeight}
					txtState={props.txtState}
					capturedStorageText={props.capturedStorageText}
					storageStatus={props.storageStatus}
					setFontFamily={props.setFontFamily}
					neonSwitchState={toggleNeon}
					activeColor={props.activeColor}
					setWidth={props.setWidth}
					width={props.width}
				/>
				<Canvas
					capturedUserText={props.capturedUserText}
					delTxtState={props.delTxtState}
					captureletterHeight={letterHeightHandler}
					capturedStorageText={props.capturedStorageText}
					storageStatus={props.storageStatus}
					setFontFamily={props.setFontFamily}
					fontState={props.fontState}
				/>
			</div>
		</article>
	);
}
export default UiDisplay;
