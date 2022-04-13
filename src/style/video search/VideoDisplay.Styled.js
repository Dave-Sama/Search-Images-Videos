import styledComponents from 'styled-components';
import tw from 'twin.macro';

export const VideoContainer = styledComponents.div`
	${tw`
	grid-column[1/span 4]
	grid-row[1/span 2]
	md:grid-row[1/span 3]
	md:grid-column[1/span 3]
	`}
`;

export const DescriptionContainer = styledComponents.div`
	${tw`
	bg-purple-300/10
	grid-column[1/span 4]
	md:grid-row[4]
	md:grid-column[1/span 3]

	`}
`;

export const TitleContainer = styledComponents.div`
	${tw`
		text-left
		
		border-b-2 
        border-opacity-50 
		bg-red-300/50
	`}
`;

export const Title = styledComponents.h3`
	${tw`
		mx-4
	`}
`;
export const DescriptionTextContainer = styledComponents.div`
	${tw`
		bg-purple-300/50
		border
		rounded
		text-center
		grid-column[1/span 3]
		flex
		m-auto
		mt-4
		height[80%]
		md:height[60%]
		width[95%]
	`}
`;
export const Description = styledComponents.div`
	${tw`
		text-center
		grid-column[1/span 3]
		m-auto

	`}
`;
