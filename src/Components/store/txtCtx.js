import React, { useState } from 'react';
//UI state management here.

//? should you create multiple context in one file or separte?
//? in such case, how would you provide each of them?

//Create Context
const textCtx = React.createContext({
	userText: '',
	setUTxt: () => {},
});

//provide context

export const TextCtxProvider = (props) => {
	//set uiInput state management here
	const [uTxt, setUTxt] = useState();

	const uTxthandler = (uTxt) => {
		setUTxt(uTxt);
	};

	//create all of them inside an object
	const textState = {
		userText: uTxt,
		setUTxt: uTxthandler,
	};
	//return the provider
	return (
		<textCtx.Provider value={textState}>{props.children}</textCtx.Provider>
	);
};

export default textCtx;
