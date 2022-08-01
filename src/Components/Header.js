import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.svg';

function Header(props) {
	return (
		<header className={props.className}>
			<Link to="/">
				<img src={Logo} alt="Logo" className="img-logo" />
			</Link>
				
		</header>
	);
}
export default Header;
