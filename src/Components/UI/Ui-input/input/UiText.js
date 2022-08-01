import { useContext, useEffect, useState } from 'react';
import textCtx from '../../../store/txtCtx';

function UiText(props) {

	const [userText, setUserText] = useState('');
	const [deletedText, setdeletedText] = useState('');
	const [delTxtState, setDelTxtState] = useState(false);
	const [isTouched, setIsTouched] = useState(false);
	const [storeText, setStoreText] = useState();

	const ctx = useContext(textCtx);
	
	const userTextChangeHandler = (e) => {
		if (e.nativeEvent.inputType === 'deleteContentBackward') {
			setdeletedText(e.target.value);
			setDelTxtState(true);
		}
		// props.txtState(true);
		ctx.textInput.setTxtState(true);
		setIsTouched(true);
		setUserText(e.target.value);
		
		ctx.textInput.setUTxt(e.target.value);
	};

	
	
	useEffect(() => {
		if (userText.length >= 20) {
			alert(
				`If you need more than 20 characters of text, Please contact us: 📞 +14-999-876-42`
			);
		}
	}, [userText]);

	useEffect(() => {
		const test = 'test';
		try {
			//storage availability
			localStorage.setItem(test, test);
			localStorage.removeItem(test);
			// props.setStorageStatus(true);
			ctx.textInput.setStorageStatus(true);

			if (userText.length > 0) {
				setStoreText(localStorage.setItem('storeText', userText));
				// props.captureStorageText(localStorage.setItem('storeText', userText));

				// ctx.textInput.setStorageText(localStorage.setItem('storeText', userText))
			}
			
			//? do you need this following two line

			setStoreText(localStorage.getItem('storeText'));			
			// props.captureStorageText(storeText);
			ctx.textInput.setStorageText(storeText);
			
			//local storgae clearance
			if (isTouched && userText.length === 0){
			
				localStorage.clear();
				// props.txtState(false);
				ctx.textInput.setTxtState(false);
			}

		} catch (e) {
			// props.setStorageStatus(false);
			ctx.textInput.setStorageStatus(false);
			
		}
		
		// props.onDelTxtState(delTxtState);
		ctx.textInput.setDelTxtState(delTxtState);
		// props.onAddedUserText(userText);
		ctx.textInput.setUTxt(userText)
	}, [props, userText, deletedText, delTxtState, storeText, isTouched,ctx]);
	
	
	return (
		<section
			className={`ui-input-form text  ${props.navState ? 'ui-active' : ''}`}
		>
			<input
				type="text"
				name="userText"
				id="userText"
				placeholder="Type your text here"
				spellCheck="false"
				onChange={userTextChangeHandler}
			/>
		</section>
	);
}
export default UiText;
