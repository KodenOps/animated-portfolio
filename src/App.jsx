import './app.scss';
import Navbar from './components/navbar/Navbar';

const App = () => {
	return (
		<div>
			<section>
				<Navbar />
			</section>
			<section>Parallax</section>
			<section>Services</section>
			<section>Parallax</section>
		</div>
	);
};

export default App;
