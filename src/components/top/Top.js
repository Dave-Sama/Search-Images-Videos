import React from 'react';
import {
	BottomContainer,
	Input,
	TitleContainer,
	TopContainer,
} from '../../app/styles/FirstPage.Styled';

function Top() {
	return (
		<TopContainer>
			<TitleContainer>
				<Input placeholder='Type here1' />
				<Input placeholder='Type here3' />
			</TitleContainer>
			<BottomContainer></BottomContainer>
		</TopContainer>
	);
}

export default Top;
