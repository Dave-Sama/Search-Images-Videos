import styledComponents from 'styled-components';
import tw from 'twin.macro';

export const TopCon = styledComponents.div`

	flex-basis: 80px;
	flex-grow: 1;

	${tw`
	h-screen
	flex
	flex-row
	lg:flex-col
 
  	`}
`;
