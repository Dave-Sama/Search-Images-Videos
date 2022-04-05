import React from 'react';

import styledComponents from 'styled-components';
import tw from 'twin.macro';
import { useMediaQuery } from 'react-responsive';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import bg1 from './app/images/bg.jpg';
import bg2 from './app/images/bg2.jpg';
import bg3 from './app/images/bg3.jpg';

import './App.css';
import { deviceSize } from './components/Responsive';
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
	${tw`bg-blue-200 
  flex
  sm:flex-grow[2]
  h-screen
  `}
  
	flex-grow: 5;
	flex-shrink: 1;
	flex-basis: auto;
	align-self: auto;
	order: 0;
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
				<TitleContainer>
					<Input placeholder='Type here1' />
					<Input placeholder='Type here2' />
				</TitleContainer>
				{!isMobile && (
					<Carousel dynamicHeight={false}>
						{Array(7)
							.fill(0)
							.map((el, index) => (
								<Image>
									<img src={bg1} key={index} alt='bla' />
									<Description>Hello</Description>
								</Image>
							))}
					</Carousel>
				)}
			</TopContainer>
			<BottomContainer>
				{/* <TitleContainer>World</TitleContainer> */}
			</BottomContainer>
		</AppContainer>
	);
}
