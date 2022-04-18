import axios from 'axios';


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 25,
		q: 'surfing',
		key: process.env.REACT_APP_YOUTUBE_VIDEO_KEY,
	},
});
