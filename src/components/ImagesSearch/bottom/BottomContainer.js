// React:
import React from 'react';

// Redux:
import { useSelector } from 'react-redux';

// Apis:
import LoadingIcons from 'react-loading-icons';

// Components:
import ImageCard from './ImageCard';

// Styles:
import {
	BottomContainer,
	Cards,
	CardsOn,
	InnerPanel,
} from '../../../style/ImagesSearchStyle/Bottom.Styled';
import Arrow from '../../resusable/Arrow';

function Bottom() {
	const { width } = useSelector((state) => state.screen);
	const { image, isAnimalLoading } = useSelector((state) => state.image);
	const displayCards = () => {
		return image
			.slice(0, image.length % 2 === 0 ? image.length : image.length - 1)
			.map((image, index) => <ImageCard key={index} image={image} />);
	};

	const styledComponents = () => {
		return width > 1020 ? 1 : 2;
	};

	return (
		<BottomContainer>
			<InnerPanel>
				{!isAnimalLoading ? (
					<CardsOn gcols={styledComponents}>{displayCards()}</CardsOn>
				) : (
					<Cards>
						<LoadingIcons.Circles speed={0.5} className='m-auto' />
					</Cards>
				)}
			</InnerPanel>
		</BottomContainer>
	);
}

export default Bottom;
