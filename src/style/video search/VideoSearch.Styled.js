// Apis:
import styledComponents from 'styled-components';
import tw from 'twin.macro';

export const VideoSearchContainer = styledComponents.div`
	${tw`
		w-full
		h-screen	
        bg-red-400/50		
	`}
`;

export const VideoDisplayContainer = styledComponents.div`
	${tw`
		bg-blue-300/40
		width[80%]
		height[85%]
		my-5
		rounded
		mx-auto
		grid
		grid-template-columns[auto auto auto auto]
		gap-2.5
	`}
`;
