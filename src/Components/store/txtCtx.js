import React, { useState } from 'react';


//Create Context
// const textCtx = React.createContext({
// 	userText: '',
// 	setUTxt: () => {},
// });

//default neonColor on load
const defaultColor = '#20f020';

const textCtx = React.createContext({
	textInput: {
		uTxt: '',
		setUTxt: () => {},
		storageText: '',
		setStorageText: () => {},
		storageStatus: null,
		setStorageStatus: () => {},
		delTxtState: false,
		setDelTxtState: () => {},
		txtState: false,
		setTxtState: () => {},
	},
	fontInput: {
		fontFamily: null,
		setFontFamily: () => {},
		fontState: false,
		setFontState: () => {},
	},
	colorInput: {
		colorActive: defaultColor,
		setColorActive: () => {},
	},
	dimension: {
		width: 0,
		setWidth: () => {},
		height: 0,
		setHeight: () => {},
	},
	debouncer: {
		debounceStatus: false,
		setDebounceState: () => {},
	},
});



//provide context

export const TextCtxProvider = (props) => {
	//set uiInput state management here
	const [uTxt, setUTxt] = useState();
	const [storageText, setStorageText] = useState();
	const [storageStatus, setStorageStatus] = useState();
	const [delTxtState, setDelTxtState] = useState();
	const [txtState, setTxtState] = useState(false);
	//DIMENSION
	const [width, setWidth] = useState();
	const [letterHeight, setLetterHeight] = useState();
	//UiFont state
	const [fontFamily, setFontFamily] = useState();
	const [fontState, setFontState] = useState(false);
	//UiColor State
	const [colorActive, setColorActive] = useState(defaultColor);
	//Debounce state for priceCard
	const [debounceStatus, setDebounceActive] = useState(false);

	// console.log(`utxt: ${uTxt}, storageText: ${storageText}, storageStatus: ${storageStatus}` );

	

	const uTxthandler = (uTxt) => {
		setUTxt(uTxt);
	};

	const debounceHandler = (stat) => {
		setDebounceActive(stat);
	};

	const delTxtStateHandler = (delTxtState) => {
		setDelTxtState(delTxtState);
	};

	const txtStateHandler = (txtState) => {
		setTxtState(txtState);
	};

	const storageTextHandler = (storageText) => {
		setStorageText(storageText);
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

	const heightHandler=(height)=>{
		setLetterHeight(height);
	};

	const fontFamilyHandler = (fontFamily) => {
		setFontFamily(fontFamily);
	};

	const fontStateHandler = (fontState) => {
		setFontState(fontState);
	};


	//create all of them inside an object
	const textState = {
		textInput: {
			uTxt,
			setUTxt: uTxthandler,
			storageText,
			setStorageText: storageTextHandler,
			storageStatus,
			setStorageStatus: storageStatusHandler,
			delTxtState,
			setDelTxtState: delTxtStateHandler,
			txtState,
			setTxtState: txtStateHandler,
		},
		fontInput: {
			fontFamily,
			setFontFamily:fontFamilyHandler,
			fontState,
			setFontState: fontStateHandler,
		},
		colorInput: {
			colorActive,
			setColorActive: activeColorHandler,
		},
		dimension: {
			width,
			setWidth: widthHandler,
			height:letterHeight,
			setHeight: heightHandler,
		},
		debouncer: {
			debounceStatus,
			setDebounceState: debounceHandler,
		},
	};
	//return the provider
	return (
		<textCtx.Provider value={textState}>{props.children}</textCtx.Provider>
	);
};

export default textCtx;
