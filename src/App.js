import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWidth } from './redux/screen';

import { AppContainer } from './App.Styled.js';
import Home from './components/home/home.js';
import ImagesSearchContainer from './components/ImagesSearch/ImagesSearchContainer.js';
import VideoSearch from './components/videoSearch/VideoSearch.js';

export default function App() {
	const { width } = useSelector((state) => state.screen);
	const dispatch = useDispatch();
	// console.log(`width: ${width}`);
	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	const updateDimensions = () => {
		dispatch(setWidth(window.innerWidth));
	};

	return (
		<AppContainer>
			<Home />
			<ImagesSearchContainer />
			<VideoSearch />
		</AppContainer>
	);
}
