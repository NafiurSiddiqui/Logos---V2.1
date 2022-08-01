import { useContext, useEffect, useState } from 'react';
import textCtx from '../../../store/txtCtx';
import PriceCard from './PriceCard';

const init = {
	small: 0,
	mid:0,
	large:0
}


function PriceCards(props) {

	const [pricing, setPricing] = useState(init);
	const [letterWidth, setletterWidth] = useState(init);
	const [height, setHeight] = useState(init);
	
	const ctx = useContext(textCtx);
	
	
	let userText;
	let storageText = '---';

	const letterHeight = ctx.dimension.height;
	let width = null;
	let storageStatus = ctx.textInput.storageStatus;
	
	const debounceStat = ctx.debouncer.debounceStatus;;

	



	ctx.textInput.uTxt === undefined ? userText = '---' : userText = ctx.textInput.uTxt;
	

	
	if (ctx.textInput.uTxt !== undefined){
		width = ctx.textInput.uTxt.length;
		
	}


	
	if (storageStatus !== false && ctx.textInput.storageText){
		storageText = ctx.textInput.storageText;
		width = storageText.length;
	
	}
	
	
	
	
	const storageTextStatus = storageText === '---'; 

	//Debounce true? calculate this.
	useEffect(() => {

		
	if (debounceStat){

		const price = {
			small:storageTextStatus? `${userText.length * 80}`:`${storageText.length * 80}`,
			mid: storageTextStatus? `${userText.length * 95}`:`${storageText.length* 95}`,
			large: storageTextStatus? `${userText.length * 105}`:`${storageText.length* 105}`
		}
		//WIDTH
		const length = {
			small: ` ${width} Cm`,
			mid: ` ${width * 2} Cm`,
			large: ` ${width * 3} Cm`

		}
		//HEIGHT
		const height ={
			small: ` ${letterHeight} Cm`,
			mid: ` ${Math.floor(letterHeight * 1.1)} Cm`,
			large: ` ${Math.floor(letterHeight * 1.3)} Cm`

		}

		setPricing(price);
		setletterWidth(length);
		setHeight(height);
	}	
	
	if (userText.length === 0){
		
		setPricing(init);
		setletterWidth(init);
		setHeight(init);
	}

		
	}, [debounceStat,letterHeight, storageTextStatus,userText,storageText,width])
	

	return (
		<div className="ui-price-card__container">
			<ul className="ui-price-cards">
				<PriceCard size="small" price={pricing.small} length={letterWidth.small} height={height.small} />
				<PriceCard size="medium" price={pricing.mid} length={letterWidth.mid} height={height.mid} />
				<PriceCard size="large" price={pricing.large} length={letterWidth.large} height={height.large} />
			</ul>
		</div>
	);
}
export default PriceCards;
