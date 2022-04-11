import styledComponents, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const TitleContainer = styledComponents.div`
	animation: 2s ${fadeInAnimation};
  ${tw`
    font-size[20px]
    m-auto
	max-h-full
	lg:h-1/6
	bg-purple-200/20
	flex
	flex-row
	lg:flex-col
	w-full
	lg:m-0
  `}
`;

export const Input = styledComponents.input`
	${tw`
		placeholder:text-center
		w-10/12
		h-10
		rounded-xl
		shadow-md
		lg:w-11/12
		bg-gray-200
		focus:bg-white
		focus:border-none
		m-auto
		focus:transition-all
		text-center

	`}
`;
