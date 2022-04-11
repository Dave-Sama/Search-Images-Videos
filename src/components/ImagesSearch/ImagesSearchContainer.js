import React from 'react';
import styledComponents from 'styled-components';
import tw from 'twin.macro';
import Bottom from './bottom/BottomContainer';
import TopContainer from './top/TopContainer';
import { Element } from 'react-scroll';
import Arrow from '../resusable/Arrow';

const ImagesContainer = tw.div(Element)`
	flex
	flex-col
	lg:flex-row
	height[80%]
`;

function ImagesSearchContainer() {
	return (
		<>
			<ImagesContainer name='ImageSearch'>
				<TopContainer />
				<Bottom />
			</ImagesContainer>
		</>
	);
}

export default ImagesSearchContainer;
