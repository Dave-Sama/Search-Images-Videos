import React from 'react';

import styledComponents from 'styled-components';
import tw from 'twin.macro';

import './App.css';
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
export default function App() {
	return (
		<AppContainer>
			<TopContainer>
				{' '}
				<TitleContainer>
					<Input placeholder='Type here1' />
					<Input placeholder='Type here2' />
				</TitleContainer>
			</TopContainer>
			<BottomContainer>
				{/* <TitleContainer>World</TitleContainer> */}
			</BottomContainer>
		</AppContainer>
	);
}
