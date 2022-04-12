// React:
import React from 'react';

// Style:
import {
	Description,
	DescriptionContainer,
	DescriptionTextContainer,
	Title,
	TitleContainer,
	VideoContainer,
} from '../../../style/video search/VideoDisplay.Styled';

const VideoDisplay = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<>
			<VideoContainer>
				{video ? (
					<iframe
						className='w-full h-full'
						title='video player'
						src={videoSrc}
					/>
				) : (
					''
				)}
			</VideoContainer>
			<DescriptionContainer>
				<TitleContainer>
					<Title>{video ? video.snippet.title : ''}</Title>
				</TitleContainer>
				<DescriptionTextContainer>
					<Description>{video ? video.snippet.description : ''}</Description>
				</DescriptionTextContainer>
			</DescriptionContainer>
		</>
	);
};

export default VideoDisplay;
