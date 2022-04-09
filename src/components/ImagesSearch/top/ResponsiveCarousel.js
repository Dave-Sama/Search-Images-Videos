import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
	Description,
	Image,
} from '../../../style/ImagesSearchStyle/Carousel.Styled';

function ResponsiveCarousel({ animals }) {
	return (
		<Carousel dynamicHeight={false}>
			{animals.slice(0, 7).map((image, index) => (
				<Image key={index}>
					<img src={image.webformatURL} />
					<Description>{image.user}</Description>
				</Image>
			))}
		</Carousel>
	);
}

export default ResponsiveCarousel;
