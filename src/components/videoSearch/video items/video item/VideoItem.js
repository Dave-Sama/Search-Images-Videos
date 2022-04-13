// React:
import React from 'react';

// Style:
import { Video } from '../../../../style/video search/VideoItem.Styled';

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<Video
			onClick={() => {
				onVideoSelect(video);
			}}
			className='video-item item'
		>
			<img
				className='ui image'
				alt={video.snippet.title}
				src={video.snippet.thumbnails.medium.url}
			/>
			<div className=''>
				<div className='text-bold'>{video.snippet.title}</div>
			</div>
		</Video>
	);
};

export default VideoItem;
