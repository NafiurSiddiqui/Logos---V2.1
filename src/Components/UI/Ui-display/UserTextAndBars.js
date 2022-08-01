import { useContext, useEffect, useState } from 'react';
import textCtx from '../../store/txtCtx';

const windowWidth = window.innerWidth;



function UserTextAndBars(props) {
	const [showBars, setShowBars] = useState(false);
	const [displayText, setDisplayText] = useState('Your Text');
	//STYLING STATE
	const [largeFont, setLargeFont] = useState();

	const ctx = useContext(textCtx);


	let letterHeight = ctx.dimension.height;
	let txtState = ctx.textInput.txtState;
	let userText = ctx.textInput.uTxt;
	let storeText = ctx.textInput.storageText;
	const storageStatus = ctx.textInput.storageStatus;
	//color states
	const neonState = props.neonSwitchState;
	const colorActive = ctx.colorInput.colorActive;


	
	useEffect(() => {
		if (
		
			ctx.fontInput.fontFamily === 'RasterSlice' ||
			ctx.fontInput.fontFamily === 'Amsterdam' ||
			ctx.fontInput.fontFamily === 'Orbitron'
		) {
			setLargeFont(true);
		} else {
			setLargeFont(false);
		}
		
		let timerHandler = setTimeout(() => {
			
			if (txtState === true || storeText !== null) {
				
				setShowBars(true);
	
				ctx.dimension.setWidth(`${storeText.length * 2}CM`)

				setDisplayText(storeText);
			}

			if (ctx.textInput.uTxt.length > 0) {
	
				ctx.debouncer.setDebounceState(true);
				setDisplayText(userText);
			}

			if (ctx.textInput.uTxt.length === 0) {
			
				setDisplayText('Your Text');
		
				ctx.dimension.setWidth(``)
				setShowBars(false);
			}

			if (storageStatus === false && txtState === true) {
			
				ctx.dimension.setWidth(`${ctx.textInput.uTxt.length * 2} CM`)
			}	
		}, 300);

		return () => {
			clearTimeout(timerHandler);
			
	
			ctx.debouncer.setDebounceState(false);
		};
	}, [txtState, ctx, storeText, userText, storageStatus]);
	

	

	const neonShadow = ` rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,
		${colorActive} 0px 0px 20px, ${colorActive} 0px 0px 30px,
		${colorActive} 0px 0px 40px, ${colorActive} 0px 0px 55px,
		${colorActive} 0px 0px 75px`;

	//FONTS
	const fontForLargeDevice = windowWidth > 2200? '7em': '5em';
	const deviceWidth = windowWidth <= 600 ? '55px': fontForLargeDevice;

	
	

	
	return (
		<>
			<div className="ui-display-userText-wrapper">
				<section
					className={`ui-display-userText-and-bar ${
						showBars ? 'widthActive ' : ''
					}`}
				>
					<p
						className="ui-display-userText-text neonOn"
						style={{
							fontFamily: ctx.fontInput.fontFamily,
							fontSize: largeFont ? '3em' : deviceWidth,
							textShadow: !neonState ? 'none' : neonShadow,
						}}
					>
						{storageStatus && displayText}
						{!storageStatus && userText}
					</p>
				</section>

				{showBars && (
					<div className="measurementBar-height-wrapper">
						<span
							className="measurementBar-height"
							style={{ height: `${letterHeight}px` }}
						></span>
						<span className="measurementBar-height-length">
							{`${Math.floor(letterHeight)}Cm`}
						</span>
					</div>
				)}
			</div>

			<span className="measurementBar-width-length">
				{showBars && ctx.dimension.width}
			</span>
		</>
	);
}
export default UserTextAndBars;
