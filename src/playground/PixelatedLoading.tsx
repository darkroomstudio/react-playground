import { useEffect, useState, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface PixelatorProps extends HTMLAttributes<HTMLDivElement> {
	backgroundImageUrl: string;
}

export const PixelatedLoading: React.FC = () => {
	const [filename, setFilename] = useState('');
	const [backgroundImageUrl, setBackgroundImageUrl] = useState(
		'/assets/pixelated-loading/fox_pixelated_40.png'
	);

	useEffect(() => {
		const pixelator = document.querySelector('[data-original]');
		if (pixelator) {
			const originalSrc = pixelator.getAttribute('data-original');
			setFilename(originalSrc || '');
		}
	}, []);

	useEffect(() => {
		if (filename) {
			const image = new Image();
			image.src = filename;

			image.onload = () => {
				setTimeout(() => {
					setBackgroundImageUrl(filename);
				}, 1000);
			};
		}
	}, [filename]);
	return (
		<Container>
			<Flex>
				<Pixelator
					backgroundImageUrl={backgroundImageUrl}
					data-original="/assets/pixelated-loading/fox.png"
				/>
			</Flex>
			<Button onClick={() => window.location.reload()}>Reload</Button>
		</Container>
	);
};

const Container = styled.div`
	padding: 48px;
`;

const Flex = styled.div`
	display: flex;
`;

const Pixelator = styled.div<PixelatorProps>`
	width: 500px;
	height: 500px;
	background-size: cover;
	background-position: center;
	background-image: url(${(props) => props.backgroundImageUrl});
`;

const Button = styled.button`
	outline: 0;
	border: 0;
	border-radius: 8px;
	background: #111;
	color: #fff;
	font-size: 14px;
	font-weight: 600;
	padding: 8px 14px;
	margin-top: 18px;
	cursor: pointer;
`;
