import { useEffect, useState } from 'react';
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
	

	let userText;
	let storageText = '---';
	const letterHeight = props.letterHeight;
	let width = null;
	let storageValue = localStorage.getItem('storeText');
	const debounceStat = props.debounceStatus;

	


	props.userText === undefined ? userText = '---': userText= props.userText;
	
	
	
	if (props.userText !== undefined){
		width = props.userText.length;
		
	}

	if (storageValue !== null){
		width = storageValue.length;
		storageText = storageValue;
	
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
