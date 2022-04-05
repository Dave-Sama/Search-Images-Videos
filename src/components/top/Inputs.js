import React, { useEffect, useState } from 'react';
import styledComponents from 'styled-components';
import tw from 'twin.macro';

const TitleContainer = styledComponents.div`
  ${tw`
    font-size[20px]
    m-auto
	max-h-full
	lg:h-1/6
	bg-purple-200
	flex
	flex-row
	lg:flex-col
	w-full
	lg:m-0
  `}
`;

const Input = styledComponents.input`
	${tw`
		placeholder:text-center
		w-5/12
		h-10
		rounded-xl
		shadow-md
		lg:w-11/12
		bg-green-200
		focus:bg-red-400
		m-auto
		focus:transition-all
		text-center

	`}
`;

function Inputs() {
	const [animalSearch, setAnimalSearch] = useState('');
	const [animals, setAnimals] = useState([]);
	const [isAnimalLoading, setIsAnimalLoading] = useState(true);

	useEffect(() => {
		animalSearch.length > 0 &&
			fetch(
				`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${animalSearch}&image_type=photo&pretty=true
      `
			)
				.then((res) => res.json())
				.then((data) => {
					setAnimals(data.hits);
					setIsAnimalLoading(false);
					console.log(animals);
				})
				.catch((err) => console.log(err));
	}, [animalSearch]);

	const onChangeAnimalSearch = (value) => {
		setAnimalSearch(value);
		animalSearch.length > 0
			? setIsAnimalLoading(false)
			: setIsAnimalLoading(true);
	};

	return (
		<TitleContainer>
			<Input
				placeholder='Search Animals'
				onChange={(e) => {
					e.preventDefault();
					onChangeAnimalSearch(e.target.value);
				}}
			/>
			<Input placeholder='Type here2' />
		</TitleContainer>
	);
}

export default Inputs;
