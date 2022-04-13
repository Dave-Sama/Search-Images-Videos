import styledComponents, { keyframes } from 'styled-components';
import tw from 'twin.macro';

export const HomeContainer = tw.div`
    h-screen
    w-full
    flex
    flex-col
    bg-red-300/20
	`;

export const Content = styledComponents.div`
    ${tw`
	rounded-l-2xl
     height[85%]
     width[90%]
     m-auto
     flex
     lg:flex-row
     flex-col
    `}
`;

export const Right = styledComponents.div`
		${tw`
		h-full	
		flex-grow		
		flex
		
		rounded-l-2xl
	`}
`;

export const Information = styledComponents.div`
	${tw`
		
		flex
		
		w-11/12
		h-5/6
		m-auto
	`}
`;

export const FloatingText = styledComponents.h1`
	margin-top: ${({ width }) => {
		// console.log(width);
		if (width < 1015) {
			return '5rem';
		} else {
			return 'none';
		}
	}};
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
	font-size[40px]
	md:font-size[55px]
	lg:font-size[60px]
    lg:line-height[140px]
	2xl:font-size[100px]
    2xl:line-height[155px]
	`};
`;
