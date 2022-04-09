import React from 'react';
import styledComponents from 'styled-components';
import tw from 'twin.macro';
import { Input, TitleContainer } from '../../../style/ImagesSearchStyle/Input.Styled';

function Inputs({ onChangeAnimalSearch }) {
	return (
		<TitleContainer>
			<Input
				placeholder='Search Animals'
				onChange={(e) => {
					e.preventDefault();
					onChangeAnimalSearch(e.target.value);
				}}
			/>
			<Input placeholder='Type here2' />
		</TitleContainer>
	);
}

export default Inputs;
