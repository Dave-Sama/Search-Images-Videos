import styledComponents from 'styled-components';
import tw from 'twin.macro';

export const VideoOptions = styledComponents.div`
		${tw`
		bg-green-300/50
		grid-column[1/span 4]
		md:grid-column[4]
		md:grid-row[1/span 4]
		overflow-y-scroll
	`}
`;
