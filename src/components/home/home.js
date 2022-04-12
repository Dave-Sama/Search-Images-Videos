import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import Arrow from '../resusable/Arrow';

// Images:

import bg1 from '../../images/bg.jpg';
import bg2 from '../../images/bg2.jpg';
import bg3 from '../../images/bg3.jpg';
import {
	Content,
	FloatingText,
	HomeContainer,
	Image,
	Information,
	Right,
} from '../../style/Home/Home.Styled';

const Images = ({ updateDimensions, width }) => {
	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	return (
		<>
			<Image position={'left'} bool={'even'} myWidth={width} src={bg3} />
			<Image position={'middle'} bool={'odd'} myWidth={width} src={bg3} />
			<Image position={'right'} bool={'even'} myWidth={width} src={bg3} />
		</>
	);
};

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
