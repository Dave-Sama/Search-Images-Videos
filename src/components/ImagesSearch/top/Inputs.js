import React from 'react';
import styledComponents from 'styled-components';
import tw from 'twin.macro';
import {
	Input,
	TitleContainer,
} from '../../../style/ImagesSearchStyle/Input.Styled';
import Arrow from '../../resusable/Arrow';

function Inputs({ onChangeAnimalSearch }) {
	return (
		<TitleContainer>
			<Arrow up={true} who={'ImageSearch'} />
			<Input
				placeholder='Search'
				onChange={(e) => {
					e.preventDefault();
					onChangeAnimalSearch(e.target.value);
				}}
			/>
		</TitleContainer>
	);
}

export default Inputs;
