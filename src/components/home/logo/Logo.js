import React from 'react';
import tw from 'twin.macro';
import { FaEnvira } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import styledComponents, { keyframes } from 'styled-components';
import { zoomInUp } from 'react-animations';
const zoomInDownAnimation = keyframes`${zoomInUp}`;

const LogoContainer = styledComponents.div`
	animation: 1s ${zoomInDownAnimation}	
	${tw`
		width[12%]
		flex
		flex-row
	`}

`;

const LogoText = styledComponents.span`
	${tw`
    font-family[Satisfy]
    text-4xl
	`}
`;

function Logo() {
	return (
		<IconContext.Provider value={{ size: '18px' }}>
			<LogoContainer>
				<LogoText> Dave</LogoText>
				<FaEnvira />
			</LogoContainer>
		</IconContext.Provider>
	);
}

export default Logo;
