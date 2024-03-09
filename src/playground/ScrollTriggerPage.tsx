import { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Heart, AddressBook, Aperture, AppleLogo } from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggerProps {}

export const ScrollTriggerPage: React.FC<ScrollTriggerProps> = () => {
	const logo = useRef<HTMLDivElement | null>(null);
	const dashboard = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `;
		document.head.appendChild(style);

		document.body.style.background = 'rgb(215, 176, 138)';
		document.body.style.background =
			'linear-gradient(7deg,rgba(215, 176, 138, 1) 0%,rgba(37, 80, 156, 1) 100%)';

		return () => {
			document.head.removeChild(style);
			document.body.style.background = '';
		};
	}, []);

	useEffect(() => {
		gsap.to(logo.current, {
			y: '-85%',
			scale: 0.25,
			ease: 'none',
			scrollTrigger: {
				trigger: dashboard.current,
				start: 'top top',
				end: '100vh top',
				scrub: 1,
			},
		});

		gsap.to(dashboard.current, {
			y: '-25%',
			ease: 'none',
			scrollTrigger: {
				trigger: dashboard.current,
				start: 'top top',
				end: '200vh top',
				scrub: 1,
			},
		});

		gsap.to(['#dashboard-img', '#header'], {
			filter: 'blur(10px)',
			ease: 'none',
			scrollTrigger: {
				trigger: dashboard.current,
				start: '100vh top',
				end: '150vh top',
				scrub: 0.5,
			},
		});

		gsap.to('#window img', {
			opacity: 0,
			ease: 'none',
			scrollTrigger: {
				trigger: dashboard.current,
				start: '100vh top',
				end: '150vh top',
				scrub: 0.5,
			},
		});

		gsap.to(dashboard.current, {
			transformOrigin: 'center 85%',
			scale: 75,
			ease: 'none',
			scrollTrigger: {
				trigger: dashboard.current,
				start: '300vh top',
				end: '350vh top',
				scrub: 1,
			},
		});

		gsap.to(dashboard.current, {
			opacity: 0,
			display: 'none',
			ease: 'none',
			scrollTrigger: {
				trigger: dashboard.current,
				start: '450vh top',
				end: '500vh top',
				scrub: true,
			},
		});
	}, []);

	return (
		<Container>
			<Logo ref={logo}>
				<img src="/assets/logo.png" alt="" />
			</Logo>

			<Dashboard ref={dashboard}>
				<Header id="header">
					Bonjour!
					<br />
					<span>Scroll to trigger interaction</span>
				</Header>
				<img src="/assets/Dashboard.png" alt="" id="dashboard-img" />
				<Dock>
					<Icon>
						<Heart size={36} color="#718096" />
					</Icon>

					<Icon>
						<AddressBook size={36} color="#718096" />
					</Icon>

					<Icon id="window">
						<img src="/assets/temp.png"></img>
					</Icon>

					<Icon>
						<Aperture size={36} color="#718096" />
					</Icon>

					<Icon>
						<AppleLogo size={36} color="#718096" />
					</Icon>
				</Dock>
			</Dashboard>
			<WebContent>
				<WhiteSpace />
				<Copy>
					<h1>
						<span>Happy Wednesday!</span>
						<br />
						It's <span>⏰ 9:00 PM</span> and too <span> ❄️ cold</span> <br />
						in <span>California</span>.
					</h1>
					<h1>
						You got <span>📮 2 emails</span> and have
						<br />
						<span>2 meetings</span> today!
					</h1>
				</Copy>
			</WebContent>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100%;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const Logo = styled.div`
	position: fixed;
	width: 200px;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
`;

const Header = styled.h1`
	position: absolute;
	top: 33%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 3vw;
	font-weight: 600;
	line-height: 120%;
	text-align: center;
	color: rgba(19, 19, 19, 1);
	margin-bottom: 4em;

	span {
		opacity: 0.2;
		font-weight: 500;
	}
`;

const Dashboard = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 150vh;
	z-index: 1;
`;

const Dock = styled.div`
	position: absolute;
	width: 33%;
	left: 50%;
	transform: translate(-50%, -50%);
	bottom: 8.25%;
	height: 100px;
	border-radius: 10px;
	overflow: hidden;
	display: flex;
	padding: 4px;

	@media (max-width: 900px) {
		width: 75%;
	}
`;

const Icon = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #e8ebee;
	border: 16px solid #e8ebee;
	margin: -0.5px;
	&:nth-of-type(1) {
		border-radius: 24px 0 0 24px;
	}
	&:nth-of-type(5) {
		border-radius: 0 24px 24px 0;
	}
	&:nth-of-type(3) {
		background: transparent !important;
		border: 16px solid #e8ebee !important;
	}
`;

const WebContent = styled.div``;

const WhiteSpace = styled.div`
	width: 100%;
	height: 175vh;
`;

const Copy = styled.div`
	width: 70%;
	margin: 0 auto;

	h1 {
		font-size: 5vw;
		font-weight: 500;
		line-height: 120%;
		text-align: center;
		color: rgba(255, 255, 255, 0.5);
		margin-bottom: 4em;

		span {
			color: #fff;
		}
	}
`;
