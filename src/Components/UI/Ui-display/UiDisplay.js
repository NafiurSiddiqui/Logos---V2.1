import { useState } from 'react';
import NeonSwitch from './NeonSwitch';
import Canvas from './UiCanvas';
import UserTextAndBars from './UserTextAndBars';

function UiDisplay(props) {
	//Toggle switch for Neon
	const [toggleNeon, setToggleNeon] = useState(true);

	const neonSwitchHandler = (switchState) => {
		setToggleNeon(switchState);
	};

	return (
		<article className="ui-display">
			<NeonSwitch
				setNeonSwitch={neonSwitchHandler}
				neonSwitchState={toggleNeon}
			/>
			<div className="ui-display-userText-container">
				<UserTextAndBars neonSwitchState={toggleNeon} />
				<Canvas />
			</div>
		</article>
	);
}
export default UiDisplay;
