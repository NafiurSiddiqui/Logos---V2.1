

function BtnFont(props) {
	return (
		<>
			<li className={props.className} onClick={props.onClick} key={props.keys}>
				<img
					className="ui-input-fontFamily-list__image"
					src={props.image}
					alt="Font family"
					id={props.id}
					onClick={props.onClick}
				/>
			</li>
		</>
	);
}
export default BtnFont;
