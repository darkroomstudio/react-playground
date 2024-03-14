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
		<>
			<Pixelator
				backgroundImageUrl={backgroundImageUrl}
				data-original="/assets/pixelated-loading/fox.png"
			/>
		</>
	);
};

const Pixelator = styled.div<PixelatorProps>`
	/* height: 100vh; */
	width: 500px;
	height: 500px;
	background-size: cover;
	background-position: center;
	background-image: url(${(props) => props.backgroundImageUrl});
`;
