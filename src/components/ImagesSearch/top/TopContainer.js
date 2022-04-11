// React:
import React, { useEffect, useState } from 'react';

// Redux:
import { useDispatch, useSelector } from 'react-redux';
import { setImage, setIsAnimalLoading } from '../../../redux/Images';

// Components:
import ResponsiveCarousel from './ResponsiveCarousel';
import Inputs from './Inputs';

// Apis:
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../../../assets/ResponsiveSize';
import LoadingIcons from 'react-loading-icons';

// Styles:
import { TopCon } from '../../../style/ImagesSearchStyle/Top.Styled';
import Arrow from '../../resusable/Arrow';

function TopContainer() {
	const isMobile = useMediaQuery({ maxWidth: deviceSize.laptop });
	const [animalSearch, setAnimalSearch] = useState('');

	const { image, isAnimalLoading } = useSelector((state) => state.image);
	const dispatch = useDispatch();

	useEffect(() => {
		animalSearch.length > 0 &&
			fetch(
				`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${animalSearch}&image_type=photo&pretty=true
      `
			)
				.then((res) => res.json())
				.then((data) => {
					const filteredData = data.hits.filter((value, index, arr) => {
						return 450 >= value.webformatHeight;
					});

					// setting the data with redux
					dispatch(setImage(filteredData));
					dispatch(setIsAnimalLoading(false));
				})
				.catch((err) => console.log(err));
	}, [animalSearch]);

	const onChangeAnimalSearch = (value) => {
		setAnimalSearch(value);
		animalSearch.length > 0
			? dispatch(setIsAnimalLoading(false))
			: dispatch(setIsAnimalLoading(true));
	};

	const display = () => {
		if (!isMobile) {
			if (isAnimalLoading) return <LoadingIcons.Circles className='m-auto' />;
			else return <ResponsiveCarousel animals={image} />;
		}
	};

	return (
		<>
			<TopCon>
				<Inputs onChangeAnimalSearch={onChangeAnimalSearch} />
				{display()}
				<Arrow up={false} who={'ImageSearch'} />
			</TopCon>
		</>
	);
}

export default TopContainer;
