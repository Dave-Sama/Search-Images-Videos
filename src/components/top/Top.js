import React, { useState } from 'react';

import styledComponents from 'styled-components';
import tw from 'twin.macro';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../ResponsiveSize';
import ResponsiveCarousel from './ResponsiveCarousel';
import { applyMiddleware } from 'redux';

const TopContainer = styledComponents.div`
	
	flex-basis: 80px;
	flex-grow: 1;
	
	${tw`
	h-screen
	flex
	flex-row
	sm:width[90%]
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

function Top() {
	const isMobile = useMediaQuery({ maxWidth: deviceSize.laptop });
	const [animal, setAnimal] = useState('');
	const [isAnimalLoading, setIsAnimalLoading] = useState(true);

	const onChangeAnimal = (e) => {
		e.preventDefault();
		setAnimal(e.target.value);
		animal.length > 0 ? setIsAnimalLoading(false) : setIsAnimalLoading(true);

		console.log(animal);
	};
	return (
		<TopContainer>
			<TitleContainer>
				<Input placeholder='Search Animal' onChange={onChangeAnimal} />
				<Input placeholder='Type here2' />
			</TitleContainer>
			{!isMobile && <ResponsiveCarousel />}
			<BottomContainer>
				<TitleContainer>World sdfadfaDF ASDFSDAF ASDFSDAFSADF</TitleContainer>
			</BottomContainer>
		</TopContainer>
	);
}

export default Top;
