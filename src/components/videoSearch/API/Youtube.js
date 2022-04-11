import axios from 'axios';

const KEY = 'AIzaSyC_L0DLfZtZHou3Ll_Un8SKjvgwocNuB2E';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 25,
		q: 'surfing',
		key: KEY,
	},
});