import React from 'react';
import styledComponents from 'styled-components';
import tw from 'twin.macro';
import Bottom from './bottom/BottomContainer';
import TopContainer from './top/TopContainer';

const ImagesContainer = styledComponents.div`
display: flex;
flex-direction: column;
${tw`lg:flex-row`}
`;

function ImagesSearchContainer() {
	return (
		<ImagesContainer>
			<TopContainer />
			<Bottom />
		</ImagesContainer>
	);
}

export default ImagesSearchContainer;
