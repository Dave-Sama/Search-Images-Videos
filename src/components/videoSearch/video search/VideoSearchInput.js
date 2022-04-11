// React:
import React from 'react';

// Style:
import { Input } from '../../../style/video search/VideoSearchInput.Styled';

function VideoSearchInput({ onChangeInput }) {
	return (
		<Input
			placeholder='Search'
			onKeyPress={(e) => {
				if (e.key === 'Enter') {
					e.preventDefault();
					onChangeInput(e.target.value);
				}
			}}
		/>
	);
}

export default VideoSearchInput;
