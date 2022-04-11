// React:
import React from 'react';

// Components:
import VideoItem from './video item/VideoItem';

// Styles:
import { VideoOptions } from '../../../style/video search/VideoList.Styled';

// function VideoList({ videos, onVideoSelect }) {
// 	// render the videos:
// 	const renderedList = videos.map((video) => {
// 		return (
// 			<VideoItem
// 				key={video.id.videoId}
// 				onVideoSelect={onVideoSelect}
// 				video={video}
// 			/>
// 		);
// 	});
// 	return <VideoOptions>{renderedList}</VideoOptions>;
// }
function VideoList() {
	// render the videos:
	// const renderedList = videos.map((video) => {
	// 	return (
	// 		<VideoItem
	// 			key={video.id.videoId}
	// 			onVideoSelect={onVideoSelect}
	// 			video={video}
	// 		/>
	// 	);
	// });
	return <VideoOptions>hi</VideoOptions>;
}

export default VideoList;
