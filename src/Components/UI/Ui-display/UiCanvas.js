import { useEffect, useRef } from 'react';
import { clearCanvas } from '../../HelperFunc';

function Canvas(props) {
	
	let userText = props.capturedUserText;
	const storageText = props.capturedStorageText;
	const storageStatus = props.storageStatus;
	let delTxtState = props.delTxtState;
	const fontState = props.fontState;
	const fontFamily = props.setFontFamily;

	const ctxRef = useRef();

	useEffect(() => {
		const ctx = ctxRef.current.getContext('2d');
		const metrics = ctx.measureText(userText);

		props.captureletterHeight(
			Math.floor(metrics.actualBoundingBoxAscent) +
				Math.floor(metrics.actualBoundingBoxDescent)
		);

		const canvasWidth = ctxRef.current.width;
		const canvasHeight = ctxRef.current.height;

		
		//WRITE and CLEAR canvas 
		if (delTxtState === true) {
			clearCanvas(ctx, canvasWidth, canvasHeight);
		}

		fontState === true
			? (ctx.font = `4rem ${fontFamily}`)
			: (ctx.font = '4rem Tangerine');

		ctx.fillStyle = 'White';


		if (storageStatus === false) {
			ctx.fillText(userText, 0, 50);
		}

		if (userText.length === 0) {
			clearCanvas(ctx, canvasWidth, canvasHeight);
		}

		
		if (storageText !== null) {
			clearCanvas(ctx, canvasWidth, canvasHeight);
			ctx.fillText(storageText, 0, 50);
		}
	}, [
		userText,
		delTxtState,
		props,
		storageText,
		storageStatus,
		fontFamily,
		fontState,
	]);

	return <canvas id="displayText" ref={ctxRef}></canvas>;
}
export default Canvas;

/**
 * @useRef -  I did not know how to have access to other HTML element living in another component. using useRef i have access to the HTML object of that node.
 */
