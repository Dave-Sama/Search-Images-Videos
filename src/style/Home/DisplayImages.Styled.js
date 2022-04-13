// Style
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

export const Image = styledComponents.img`
    animation: 5s ${(props) => {
			if (props.myWidth <= 1020) {
				if (props.bool === 'even') {
					return bounceInLeftAnimation;
				} else {
					return bounceInRightAnimation;
				}
			} else if (props.myWidth >= 1021) {
				// console.log(props.myWidth);
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
