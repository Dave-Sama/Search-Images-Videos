import styledComponents, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const BottomContainer = styledComponents.div`
    animation: 2s ${fadeInAnimation};
	${tw`
		bg-blue-200/20
		flex
		h-screen
		lg:flex-grow[2]
  	`}

	flex-grow: 5;
`;

export const InnerPanel = styledComponents.div`
    ${tw`
        m-auto
        bg-pink-400/20
        w-11/12
        height[90%]
        rounded-2xl
        overflow-auto
        box-shadow[1px 1px 20px salmon]
    `}
    ::-webkit-scrollbar {
		display: none;
	}

`;

export const Cards = styledComponents.div`
    display: ${(props) => props.loading && 'flex'}
    ${tw`
        bg-yellow-500/10
        m-auto
        height[95%]
        width[95%]
        rounded-2xl
        flex
    `}
    `;

export const CardsOn = styledComponents.div`
    ${tw`
        overflow-hidden
        bg-yellow-500/20
        md:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4
        grid 
        gap-4 
        m-4
    `}
`;
