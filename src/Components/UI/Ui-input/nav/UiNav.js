const windowWidth = window.innerWidth;



function UiNav(props) {
	
	const navTxtActiveHandler = () => {
		//Activate TEXT
		props.setNavTxtState(true);
		//Deactivate the rests
		props.setNavFontState(false);
		props.setNavColorState(false);
	};

	const navFontActiveHandler = () => {
		//Activate TEXT
		props.setNavFontState(true);

		//Deactivate the rests
		props.setNavTxtState(false);
		props.setNavColorState(false);
	};

	const navColorActiveHandler = () => {
		//Activate TEXT
		props.setNavColorState(true);
		//Deactivate the rests
		props.setNavTxtState(false);
		props.setNavFontState(false);
	};

	if (props.navState.colorState){
		 document.body.style.overflowY = 'scroll';
		document.body.style.height = '140vh';

	}else if(!props.navState.colorState && windowWidth < 860){
		document.body.style.overflowY = 'scroll';
		document.body.style.height = '140vh';
	}
	else	
	{
			document.body.style.overflowY = 'hidden';
			document.body.style.height = '100vh';
	}
	

	return (
		<div className="ui-input-nav">
			<ul className="ui-input-nav-lists">
				<li
					className={`ui-input-nav-list ${
						props.navState.txtState ? 'nav-active' : ''
					}`}
					onClick={navTxtActiveHandler}
				>
					Text
				</li>

				<li
					className={`ui-input-nav-list ${
						props.navState.fontState ? 'nav-active' : ''
					}`}
					onClick={navFontActiveHandler}
				>
					Fonts
				</li>

				<li
					className={`ui-input-nav-list ${
						props.navState.colorState ? 'nav-active' : ''
					}`}
					onClick={navColorActiveHandler}
				>
					Color
				</li>
			</ul>
		</div>
	);
}

export default UiNav;
