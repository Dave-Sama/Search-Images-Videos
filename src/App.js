import React from 'react';

import styledComponents from 'styled-components';
import tw from 'twin.macro';
import { useMediaQuery } from 'react-responsive';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import bg1 from './app/images/bg.jpg';
// import bg2 from './app/images/bg2.jpg';
// import bg3 from './app/images/bg3.jpg';

import './App.css';
import Top from './components/top/Top';
import { deviceSize } from './components/ResponsiveSize';
import Bottom from './components/bottom/Bottom';
import ResponsiveCarousel from './components/top/ResponsiveCarousel';
import Inputs from './components/top/Inputs';

const AppContainer = styledComponents.div`
  ${tw`lg:flex-row`}
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: stretch;
	align-content: stretch;
	`;

const TopContainer = styledComponents.div`

	flex-basis: 80px;
	flex-grow: 1;

	${tw`
	h-screen
	flex
	flex-row
	lg:flex-col
    bg-red-200
  	`}
`;

const BottomContainer = styledComponents.div`
	${tw`
		bg-blue-200
		flex
		h-screen
		// lg:flex-grow[2]
  	`}

	flex-grow: 5;
`;

const Input = styledComponents.input`
	${tw`
		placeholder:text-center
		w-5/12
		h-10
		rounded-xl
		shadow-md
		lg:w-11/12
		bg-green-200
		focus:bg-red-400
		m-auto
		focus:transition-all
		text-center

	`}
`;

const TitleContainer = styledComponents.div`
  ${tw`
    font-size[20px]
    m-auto
	max-h-full
	lg:h-1/6
	bg-purple-200
	flex
	flex-row
	lg:flex-col
	w-full
	lg:m-0
  `}
`;
const Image = tw.div`
	flex
	flex-col
	self-center
    // w-11/12
	m-10
    max-w-max

`;

export const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2

    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;
export default function App() {
	const isMobile = useMediaQuery({ maxWidth: deviceSize.laptop });
	return (
		<AppContainer>
			<TopContainer>
				<Inputs />
				{!isMobile && <ResponsiveCarousel />}
			</TopContainer>
			<BottomContainer>
				{/* <h1
					className='m-auto
    bg-pink-400
    w-full
    h-screen'
				>
					hello
				</h1> */}
				<Bottom />
			</BottomContainer>
		</AppContainer>
	);
}
