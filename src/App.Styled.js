import styledComponents from 'styled-components';
import backgroundImage from './images/bg.jpg';

export const AppContainer = styledComponents.div`
	background-image: url(${backgroundImage}),
		linear-gradient(to bottom, #005b9c, #b1d1b148);
	background-size: cover;
	background-position: bottom 10% left;
	background-blend-mode: overlay;
	background-attachment: fixed;
	`;
