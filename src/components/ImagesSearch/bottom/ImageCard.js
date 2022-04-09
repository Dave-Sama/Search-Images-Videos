// React:
import React from 'react';

// Styles:
import {
	ImageContainer,
	Image,
	InformationSection,
	Name,
	Rating,
	TagsContainer,
	Tags,
} from '../../../style/ImagesSearchStyle/ImageCard.Styled';
import { AiFillStar } from 'react-icons/ai';

export default function ImageCard({ image }) {
	const tags = image.tags.split(',');

	const ratingStars = () => {
		let stars = 0;
		if (0 < image.likes && image.likes < 20) {
			stars = 2;
		} else if (20 <= image.likes && image.likes < 40) {
			stars = 3;
		} else if (40 <= image.likes && image.likes < 60) {
			stars = 4;
		} else if (60 <= image.likes) {
			stars = 5;
		}
		return Array(stars)
			.fill(0)
			.map((el, index) => (
				<AiFillStar className='text-amber-500 border-red-400' key={index} />
			));
	};

	return (
		<ImageContainer>
			<Image src={image.webformatURL} alt='connection error' />
			<InformationSection>
				<Name>Dave</Name>
				<ul>
					<li>
						<strong>Views:</strong> {image.views}
					</li>
					<li>
						<strong>Downloads:</strong> {image.downloads}
					</li>
					<li>
						<strong>Likes:</strong> {image.likes}
					</li>
				</ul>
			</InformationSection>
			<TagsContainer>
				{tags.map((tag, index) => (
					<Tags key={index}>#{tag}</Tags>
				))}
			</TagsContainer>
		</ImageContainer>
	);
}
