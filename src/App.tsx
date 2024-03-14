import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Home from './Home';
import * as pg from './playground';
import { Global, css } from '@emotion/react';

const globalStyles = css`
	html,
	body {
		margin: 0;
		padding: 0;
		min-height: 100%;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
	}
`;

export default function App() {
	return (
		<>
			<Global styles={globalStyles} />
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route index element={<Home />}></Route>
						<Route path="/mask-cursor" element={<pg.MaskCursor />} />
						<Route path="/scroll-trigger" element={<pg.ScrollTriggerPage />} />
					</Routes>
				</Suspense>
			</Router>
		</>
	);
}
