import React from 'react';

import { AppContainer } from './App.Styled.js';
import Home from './components/home/home.js';
import ImagesSearchContainer from './components/ImagesSearch/ImagesSearchContainer.js';
import VideoSearch from './components/videoSearch/VideoSearch.js';

export default function App() {
	return (
		<AppContainer>
			<Home />
			<ImagesSearchContainer />
			<VideoSearch />
		</AppContainer>
	);
}
