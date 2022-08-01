import { useContext, useEffect, useRef } from 'react';
import { clearCanvas } from '../../HelperFunc';
import textCtx from '../../store/txtCtx';

function Canvas() {
	const ctx = useContext(textCtx);

	let storageText = ctx.textInput.storageText;
	const storageStatus = ctx.textInput.storageStatus;
	let delTxtState = ctx.textInput.delTxtState;
	const fontState = ctx.fontInput.fontState;
	const fontFamily = ctx.fontInput.setFontFamily;

	const ctxRef = useRef();

	useEffect(() => {
		let userText = ctx.textInput.uTxt;

		const canvaCtx = ctxRef.current.getContext('2d');
		const metrics = canvaCtx.measureText(userText);

		ctx.dimension.setHeight(
			Math.floor(metrics.actualBoundingBoxAscent) +
				Math.floor(metrics.actualBoundingBoxDescent)
		);

		const canvasWidth = ctxRef.current.width;
		const canvasHeight = ctxRef.current.height;

		//WRITE and CLEAR canvas
		if (delTxtState === true) {
			clearCanvas(canvaCtx, canvasWidth, canvasHeight);
		}

		fontState === true
			? (canvaCtx.font = `4rem ${fontFamily}`)
			: (canvaCtx.font = '4rem Tangerine');

		canvaCtx.fillStyle = 'White';

		if (storageStatus === false) {
			canvaCtx.fillText(userText, 0, 50);
		}

		if (storageText !== null) {
			clearCanvas(canvaCtx, canvasWidth, canvasHeight);
			canvaCtx.fillText(storageText, 0, 50);
		}
	}, [ctx, delTxtState, storageText, storageStatus, fontFamily, fontState]);

	return <canvas id="displayText" ref={ctxRef}></canvas>;
}
export default Canvas;
