import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';

interface MaskCursorProps {}

export const MaskCursor: React.FC<MaskCursorProps> = () => {
	const [isHovered, setIsHovered] = useState(false);

	const { x, y } = useMousePosition();

	const cursorSize = isHovered ? 400 : 40;

	useEffect(() => {
		document.body.style.backgroundColor = 'hsl(0, 0%, 6%)';
		document.body.style.margin = '0px';

		return () => {
			document.body.style.background = '';
		};
	}, []);

	return (
		<Main>
			<Mask
				animate={{
					WebkitMaskPosition: `${x - cursorSize / 2}px ${y - cursorSize / 2}px`,
					WebkitMaskSize: `${cursorSize}px`,
				}}
				transition={{ type: 'tween', ease: 'backOut', duration: 0.3 }}
			>
				<p
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					A <span>product designer</span> that strives not to be replaced by A.I
				</p>
			</Mask>
			<Body>
				<p>
					A <span>creative prototyper</span> that strives not to be replaced by
					A.I
				</p>
			</Body>
		</Main>
	);
};

const Main = styled.main`
	height: 100vh;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 600;
	color: #fff;
`;

const Mask = styled(motion.div)`
	position: absolute;
	mask-image: url('/assets/StarSVG.svg');
	background-color: #0081fb;
	mask-repeat: no-repeat;
	mask-size: 40px;
	color: '#fff';

	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 64px;
	line-height: 66px;
	cursor: default;

	p {
		width: 1000px;
	}

	span {
		color: #111;
	}
`;

const Body = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 64px;
	line-height: 66px;
	cursor: default;

	p {
		width: 1000px;
	}

	span {
		color: #0081fb;
	}
`;
