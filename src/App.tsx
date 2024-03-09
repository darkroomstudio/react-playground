import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import * as pg from './playground';

export default function App() {
	return (
		<Router>
			Home
			<Link to="/scroll-trigger">GSAP Scroll Trigger Example</Link>
			<Link to="/mask-cursor">Mask Cursor Example</Link>
			<Routes>
				<Route path="/scroll-trigger" element={<pg.ScrollTriggerPage />} />
				<Route path="/mask-cursor" element={<pg.MaskCursor />} />
			</Routes>
		</Router>
	);
}
