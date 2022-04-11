import styledComponents from 'styled-components';
import tw from 'twin.macro';

export const VideoOptions = styledComponents.div`
		${tw`
		bg-blue-400
		grid-cols-1
		text-center		
		grid-column[1/4]
		md:grid-column[4]
		md:grid-row[1/ span 8]
	`}
`;
