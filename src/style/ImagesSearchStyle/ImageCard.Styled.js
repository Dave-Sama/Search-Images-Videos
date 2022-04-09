// apis:
import tw from 'twin.macro';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const ImageContainer = styled.div`
	animation: 5s ${fadeInAnimation};

	${tw`
    max-w-sm
    overflow-hidden 
    shadow-lg 
    rounded-2xl
    `}
	background: rgb(255,255,255);
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0.6615021008403361) 0%,
		rgba(255, 225, 105, 1) 100%
	);
`;

export const Image = tw.img`
    w-full
`;

export const InformationSection = tw.div`
    px-6 
    py-4
`;
export const Name = tw.div`
    text-center  
    font-bold 
    text-purple-500 
    text-xl 
    mb-2
`;

export const Rating = tw.li`
    flex 
    items-center
`;
export const TagsContainer = tw.div`
    text-center 
    px-6 
    py-4
`;

export const Tags = tw.span`
    inline-block 
    bg-gray-200 
    rounded-full 
    px-3 
    py-1 
    my-1 
    text-sm 
    font-semibold 
    text-gray-700 
    mr-2
`;
