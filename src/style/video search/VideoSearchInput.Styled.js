import styledComponents from 'styled-components';
import tw from 'twin.macro';

export const Input = styledComponents.input`	
    ${tw`
        text-align[center]
		block
		m-auto
		w-2/4
		height[4%]
		mb-2
		rounded
		transition[0.5s all ease-in]
		focus:outline-none
		bg-gray-200
		focus:bg-white
    `}
`;
