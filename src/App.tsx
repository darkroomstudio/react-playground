import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import * as pg from './playground';
import './App.css';

export default function App() {
	return (
		<Router>
			Home
			<Link to="/scroll-trigger">GSAP Scroll Trigger Example</Link>
			<Routes>
				<Route path="/" element={<pg.ScrollTriggerPage />}></Route>
				<Route
					path="/scroll-trigger"
					element={<pg.ScrollTriggerPage />}
				></Route>
			</Routes>
		</Router>
	);
}
