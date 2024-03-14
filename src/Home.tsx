import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Home: React.FC = () => {
	return (
		<Container>
			<Header>React Playground</Header>
			<LinkGroup>
				<ProjectLink to="/pixelated-loading">
					Pixelated Loading Example
				</ProjectLink>
				<ProjectLink to="/scroll-trigger">
					GSAP Scroll Trigger Example
				</ProjectLink>
				<ProjectLink to="/mask-cursor">Mask Cursor Example</ProjectLink>
			</LinkGroup>
		</Container>
	);
};

export default Home;

const Container = styled.div`
	margin: 0;
	padding: 24px;
	background-color: #fff;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Header = styled.h2`
	margin: 0;
	font-size: 36px;
	font-weight: 600;
	color: #111;
`;
const LinkGroup = styled.div`
	margin-top: 24px;
	display: flex;
`;

const ProjectLink = styled(Link)`
	color: #222;
	font-weight: 300;
	text-decoration: none;
	padding: 8px 12px;
	background-color: rgba(0, 0, 0, 0.07);
	border-radius: 8px;
	margin-right: 16px;
	transition: 0.3s;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;
