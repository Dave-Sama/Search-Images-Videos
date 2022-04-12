import styledComponents, { keyframes } from 'styled-components';
import tw from 'twin.macro';

import {
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
} from 'react-animations';

const bounceInUpAnimation = keyframes`${fadeInUp}`;
const bounceInDownAnimation = keyframes`${fadeInDown}`;
const bounceInLeftAnimation = keyframes`${fadeInLeft}`;
const bounceInRightAnimation = keyframes`${fadeInRight}`;

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

export const Image = styledComponents.img`
    animation: 5s ${(props) => {
			if (props.myWidth > 380) {
				// console.log(props.myWidth);
				if (props.bool === 'even') {
					return bounceInLeftAnimation;
				} else {
					return bounceInRightAnimation;
				}
			} else {
				if (props.bool === 'even') {
					return bounceInUpAnimation;
				} else {
					return bounceInDownAnimation;
				}
			}
		}};
	object-position: ${({ position, myWidth }) => {
		if (myWidth > 400) {
			if (position === 'left') {
				return 'top left';
			} else if (position === 'middle') {
				return 'none';
			} else {
				return 'bottom right';
			}
		} else {
			if (position === 'left') {
				return 'top left';
			} else if (position === 'middle') {
				return 'bottom left';
			} else {
				return 'bottom right';
			}
		}
	}};
    ${tw`
    m-1
    h-1/5
    lg:height[99%]
    lg:width[15%]
    object-cover
    `}
	`;

export const FloatingText = styledComponents.h1`
	margin-top: ${({ width }) => {
		console.log(width);
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
