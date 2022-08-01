function PriceCard(props) {
	return (
		<li className="ui-price-card">
			<div className="ui-price-card__price-box">
				<span className="ui-price-card__text-size"> {props.size}</span>

				<span className="ui-price-card__small-price">
					
					{`$ ${props.price || '----'}`}
				</span>
			</div>

			<div className="ui-price-card__length-box">
				<div className="ui-price-card__length-container">
					Length:
					<span className="ui-price-card__small-length">
						{props.length || '----'}
					</span>
				</div>

				<div className="ui-price-card__height-container">
					Height:
					<span className="ui-price-card__small-height"> 
						{props.height || '----'}
					</span>
				</div>
			</div>
		</li>
	);
}
export default PriceCard;
