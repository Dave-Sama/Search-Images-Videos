import React, { useEffect, useState } from 'react';
import styledComponents, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import Navbar from './navbar/Navbar';
import {
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
} from 'react-animations';
// Images:
import bg1 from '../../images/bg.jpg';
import bg2 from '../../images/bg2.jpg';
import bg3 from '../../images/bg3.jpg';
import { isStyledComponent } from 'styled-components';

const bounceInUpAnimation = keyframes`${fadeInUp}`;
const bounceInDownAnimation = keyframes`${fadeInDown}`;
const bounceInLeftAnimation = keyframes`${fadeInLeft}`;
const bounceInRightAnimation = keyframes`${fadeInRight}`;

const HomeContainer = tw.div`
    h-screen
    w-full
    flex
    flex-col
    bg-red-300/20
	`;

const Content = styledComponents.div`
    ${tw`
	rounded-l-2xl
     height[85%]
     width[95%]
     m-auto
     flex
     lg:flex-row
     flex-col
    `}
`;

const Right = styledComponents.div`
		${tw`
		h-full	
		flex-grow		
		flex
		
		rounded-l-2xl
	`}
`;

const Information = styledComponents.div`
	${tw`
		
		flex
		
		w-11/12
		h-5/6
		m-auto
	`}
`;

const Image = styledComponents.img`
    animation: 5s ${(props) => {
			if (props.myWidth > 1000) {
				return props.even ? bounceInUpAnimation : bounceInDownAnimation;
			} else {
				return props.even ? bounceInLeftAnimation : bounceInRightAnimation;
			}
		}};
    ${tw`
    m-0.5
    h-1/5
    lg:height[99%]
    lg:w-1/6
    object-cover
    
    `}
	`;

const FloatingText = styledComponents.h1`
	${tw`
	font-family['Satisfy', cursive]
	absolute
	opacity-75
	stroke-2
	stroke-opacity[0.5]
	stroke-current
	left-14
	mt-20
	text-white
	md:mx-14
	md:font-size[50px]
	lg:font-size[105px]
    lg:line-height[140px]
	2xl:font-size[140px]
    2xl:line-height[155px]
	`};
`;
function Home() {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const updateDimensions = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};
	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	return (
		<HomeContainer>
			<Navbar />
			<Content>
				<Right>
					<Information>
						<FloatingText>
							ALL YOU <br /> NEED IN
							<br /> ONE PLACE
						</FloatingText>
					</Information>
				</Right>
				<Image even myWidth={width} src={bg1} />
				<Image odd myWidth={width} src={bg2} />
				<Image even myWidth={width} src={bg3} />
			</Content>
		</HomeContainer>
	);
}

export default Home;
