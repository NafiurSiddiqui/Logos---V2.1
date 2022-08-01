import { Link } from 'react-router-dom';

function Body() {
	return (
		<>
			<main className="home-content__container">
				<section className="home-content">
					<h1 className="home-content-heading">
						Create your own neon induced text
					</h1>

					<h2 className="home-content-subheading">
						Crafted with the artistic insight for you
					</h2>

					<button className="home-content-btn" >
						<Link to="/Ui" className="home-content-btn__link-ui" >
							Create Text
						</Link>
					</button>
				</section>

				<section className="home-content__shapes" aria-hidden="true" >
					<div className="home-content__shapes-displayTab" aria-hidden="true" ></div>
					<div className="home-content__shapes-ball" aria-hidden="true" >
						<div className="home-content__shapes-ball-object"></div>
						<div className="home-content__shapes-ball-shadow"></div>
					</div>
				</section>
			</main>
		</>
	);
}
export default Body;
