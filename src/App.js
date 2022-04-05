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
	
	flex-grow: 1;

	${tw`
	flex
	max-h-screen
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

const TitleContainer = styledComponents.h1`
  ${tw`
    font-size[30px]
    m-auto
  `}
`;
export default function App() {
	return (
		<AppContainer>
			<TopContainer>
				{' '}
				<TitleContainer>Hello</TitleContainer>
			</TopContainer>
			<BottomContainer>
				<TitleContainer>World</TitleContainer>
			</BottomContainer>
		</AppContainer>
	);
}
