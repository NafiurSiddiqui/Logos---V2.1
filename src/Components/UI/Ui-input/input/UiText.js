import { useContext, useEffect, useState } from 'react';
import textCtx from '../../../store/txtCtx';

function UiText(props) {

	const [userText, setUserText] = useState('');
	const [deletedText, setdeletedText] = useState('');
	const [delTxtState, setDelTxtState] = useState(false);
	const [isTouched, setIsTouched] = useState(false);
	const [storeText, setStoreText] = useState();

	const uTxt = useContext(textCtx);
	// console.log(uTxt.userText);
	const userTextChangeHandler = (e) => {
		if (e.nativeEvent.inputType === 'deleteContentBackward') {
			setdeletedText(e.target.value);
			setDelTxtState(true);
		}
		props.txtState(true);
		setIsTouched(true);
		setUserText(e.target.value);
		uTxt.setUTxt(e.target.value)
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
			props.setStorageStatus(true);
			
			if (userText.length > 0) {
				setStoreText(localStorage.setItem('storeText', userText));
				props.captureStorageText(localStorage.setItem('storeText', userText))
			}
			
			setStoreText(localStorage.getItem('storeText'));
			
			props.captureStorageText(storeText);
			
			//local storgae clearance
			if (isTouched && userText.length === 0){
			
				localStorage.clear();
				props.txtState(false);
			}

		} catch (e) {
			props.setStorageStatus(false);
			
		}
		
		props.onDelTxtState(delTxtState);
		props.onAddedUserText(userText);
	}, [props, userText, deletedText, delTxtState, storeText, isTouched]);
	
	
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
