import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import Arrow from '../resusable/Arrow';

import {
	Content,
	FloatingText,
	HomeContainer,
	Information,
	Right,
} from '../../style/Home/Home.Styled';
import Images from './display images/DisplayImages';

function Home() {
	const [displayImages, setDisplayImages] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		setTimeout(() => {
			setDisplayImages(true);
		}, 1000);
	}, []);

	const updateDimensions = () => {
		setWidth(window.innerWidth);
	};

	return (
		<HomeContainer name='Home'>
			<Navbar />
			<Content>
				<Right>
					<Information>
						{width > 1015 ? (
							<FloatingText width={width}>
								ALL YOU <br /> NEED IN
								<br /> ONE PLACE
							</FloatingText>
						) : (
							<FloatingText width={width}>
								ALL YOU NEED IN ONE PLACE
							</FloatingText>
						)}
					</Information>
				</Right>

				{displayImages && (
					<Images updateDimensions={updateDimensions} width={width} />
				)}
			</Content>
			<Arrow up={false} who={'Home'} />
		</HomeContainer>
	);
}

export default Home;
