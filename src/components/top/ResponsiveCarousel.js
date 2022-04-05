import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import tw from 'twin.macro';
import bg1 from '../../app/images/bg.jpg';

const Image = tw.div`
	flex
	flex-col
	self-center
    // w-11/12
	m-10
    max-w-max
	
`;

export const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;
function ResponsiveCarousel() {
	return (
		<Carousel dynamicHeight={false}>
			{Array(7)
				.fill(0)
				.map((el, index) => (
					<Image>
						<img src={bg1} key={index} alt='bla' />
						<Description>Hello</Description>
					</Image>
				))}
		</Carousel>
	);
}

export default ResponsiveCarousel;
