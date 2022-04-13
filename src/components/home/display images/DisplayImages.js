// React
import React, { useEffect } from 'react';
import { Image } from '../../../style/Home/DisplayImages.Styled';

// Image:
import bg from '../../../images/bg3.jpg';

const Images = ({ updateDimensions, width }) => {
	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	return (
		<>
			<Image position={'left'} bool={'even'} myWidth={width} src={bg} />
			<Image position={'middle'} bool={'odd'} myWidth={width} src={bg} />
			<Image position={'right'} bool={'even'} myWidth={width} src={bg} />
		</>
	);
};

export default Images;
