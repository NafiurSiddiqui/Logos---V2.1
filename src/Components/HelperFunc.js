
//FOR CANVAS
export function clearCanvas(ctx, canvasWidth, canvasHeight) {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

export function writeOnCanvas(ctx, userText) {
	ctx.fillText(userText, 0, 50);
}

export function writeOnCanvasWithFont(ctx, userText, font) {
	ctx.font = `4rem ${font}`;
	ctx.fillStyle = 'White';
	ctx.fillText(userText, 0, 50);
}

