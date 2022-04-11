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
import Arrow from '../resusable/Arrow';

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
			if (props.myWidth > 500) {
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
	lg:left-14
	lg:mt-20
	text-white
	md:mx-14
	font-size[50px]
	md:font-size[50px]
	lg:font-size[105px]
    lg:line-height[140px]
	2xl:font-size[140px]
    2xl:line-height[155px]
	`};
`;

const Images = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	const updateDimensions = () => {
		setWidth(window.innerWidth);
	};

	return (
		<>
			<Image even myWidth={width} src={bg1} />
			<Image odd myWidth={width} src={bg2} />
			<Image even myWidth={width} src={bg3} />
		</>
	);
};
function Home() {
	const [displayImages, setDisplayImages] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setDisplayImages(true);
		}, 1000);
	}, []);

	return (
		<HomeContainer name='Home'>
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
				{/* <Image even myWidth={width} src={bg1} />
				<Image odd myWidth={width} src={bg2} />
				<Image even myWidth={width} src={bg3} /> */}
				{displayImages && <Images />}
			</Content>
			<Arrow up={false} who={'Home'} />
		</HomeContainer>
	);
}

export default Home;
