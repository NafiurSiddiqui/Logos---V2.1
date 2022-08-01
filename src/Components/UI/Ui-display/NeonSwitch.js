
function NeonSwitch(props) {


	// console.log(props.neonSwitchState);
	
	const switchHandler =()=>{
		
		props.setNeonSwitch(prevState =>{

			return !prevState
		})
	 };
	
	return (
		<label className="switch">
			<input type="checkbox" id="neonSwitch" onClick={switchHandler} defaultChecked={props.neonSwitchState} />
			<span className="slider round" role='switch' aria-checked={props.neonSwitchState? 'true':'false'}>
				<span aria-hidden="true" >On</span>
				<span aria-hidden="true" >Off</span>
			</span>
		</label>
	);
}
export default NeonSwitch;
