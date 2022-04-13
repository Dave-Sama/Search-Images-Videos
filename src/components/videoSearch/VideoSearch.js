// React:
import React, { useEffect, useState } from 'react';

// Components:
import Arrow from '../resusable/Arrow';
import Youtube from './API/Youtube';
import VideoSearchInput from './video search/VideoSearchInput';
import VideoList from './video items/VideoList';
import VideoDisplay from './video display/VideoDisplay';

// Style:
import {
	VideoDisplayContainer,
	VideoSearchContainer,
} from '../../style/video search/VideoSearch.Styled';

import styledComponents from 'styled-components';
import tw from 'twin.macro';

function VideoSearch() {
	const [videos, SetVideos] = useState([]);
	const [selectedVideo, SetSelectedVideo] = useState(null);

	useEffect(() => {
		onChangeInput('One Piece');
	}, []);

	const onChangeInput = async (value) => {
		const response = await Youtube.get('/search', {
			params: {
				q: value,
			},
		});
		SetVideos(response.data.items);
		SetSelectedVideo(response.data.items[0]);
	};

	const onVideoSelect = (video) => {
		SetSelectedVideo(video);
	};

	return (
		<>
			<VideoSearchContainer name='Videos'>
				<Arrow up={true} who={'Videos'} />
				<VideoSearchInput onChangeInput={onChangeInput} />
				<VideoDisplayContainer>
					<VideoDisplay video={selectedVideo} />
					<VideoList videos={videos} onVideoSelect={onVideoSelect} />
				</VideoDisplayContainer>
			</VideoSearchContainer>
		</>
	);
}

export default VideoSearch;
