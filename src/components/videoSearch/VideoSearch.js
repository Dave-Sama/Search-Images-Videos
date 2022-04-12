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

const Test1 = styledComponents.div`
${tw`
	bg-red-300/20
	grid-column[1/span 4]
	grid-row[1/span 2]
	md:grid-row[1/span 3]
	md:grid-column[1/span 3]
	`}
	`;
const Test2 = styledComponents.div`
	${tw`
	bg-purple-300/20
	grid-column[1/span 4]
	md:grid-row[4]
	md:grid-column[1/span 3]
`}
`;
const Test3 = styledComponents.div`
${tw`
	bg-green-300/20
	grid-column[1/span 4]
	md:grid-column[4]
	md:grid-row[1/span 4]
`}
`;

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
					{/* <Test1 />
					<Test2 />
					<Test3 /> */}
					<VideoDisplay video={selectedVideo} />
					<VideoList videos={videos} onVideoSelect={onVideoSelect} />
				</VideoDisplayContainer>
			</VideoSearchContainer>
		</>
	);
}

export default VideoSearch;
