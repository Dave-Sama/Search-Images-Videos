import tw from 'twin.macro';
import styled, { keyframes } from 'styled-components';
import { fadeInDown, fadeInRight } from 'react-animations';

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const NavContainer = styled.div`
	animation: 1s ${fadeInDownAnimation};
	width: 90%;
	${tw`
	flex
        h-20
        pl-6
        pr-6
        pt-4
        border-b-2
        border-gray-200
        border-opacity-50
        items-center
        self-center
    `};
`;
export const NavItems = styled.ul`
	animation: 3s ${fadeInRightAnimation};
	${tw`
    list-none
    w-full
    h-auto
    lg:w-auto
    lg:h-full
    flex
    lg:ml-20
    justify-center
    items-center
    `}
`;
export const NavItem = styled.li`
	${tw`
	lg:mr-8
    flex
    items-center
    justify-center
    min-h-full
    text-white
    cursor-pointer
    font-medium
    text-lg
    lg:text-base
    transition-colors
    transition-duration[300ms]
    hover:text-gray-200
    box-content
    mb-2
    lg:mb-0
    `}
`;

export const menuStyles = {
	bmBurgerButton: {
		position: 'absolute',
		width: '20px',
		height: '20px',
		right: '35px',
		top: '25px',
	},
	bmBurgerBars: {
		background: '#fff',
	},
	bmBurgerBarsHover: {
		background: '#a90000',
	},
	bmCrossButton: {
		height: '24px',
		width: '24px',
	},
	bmCross: {
		background: '#bdc3c7',
	},
	bmMenuWrap: {
		position: 'fixed',
		width: '60%',
		height: '100%',
		top: '0px',
	},
	bmMenu: {
		backgroundImage:
			'linear-gradient(to right, #d657d1, #c845d6, #b633dc, #a022e3, #8312eb)',
		padding: '2.5em 1.5em 0',
		fontSize: '1.15em',
	},
	bmMorphShape: {
		fill: '#373a47',
	},
	bmItemList: {
		color: '#b8b7ad',
		padding: '0.8em',
	},
	bmItem: {
		display: 'inline-block',
	},
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)',
	},
};
