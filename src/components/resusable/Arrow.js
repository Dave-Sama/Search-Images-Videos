import React from 'react';
import { Link } from 'react-scroll';
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs';
import styledComponents from 'styled-components';
import tw from 'twin.macro';

const ViewMoreButtonDown = styledComponents.button`
	${tw`

        -translate-x-1/2
        text-white
        transition-colors
        duration-200
        text-4xl
        self-center
        m-4
        hover:text-green-400
    `};
`;
const ViewMoreButtonUp = styledComponents.button`
	${tw`

        -translate-x-1/2
        text-white
        transition-colors
        duration-200
        text-4xl
        m-2
        hover:text-green-400
    `};
`;

function Arrow({ up, who }) {
	const upArrow = () => {
		return (
			<ViewMoreButtonUp>
				<Link
					to={who === 'Videos' ? 'ImageSearch' : 'Home'}
					smooth={'easeInOutQuad'}
					duration={1500}
				>
					<BsArrowUpCircle />
				</Link>
			</ViewMoreButtonUp>
		);
	};
	const downArrow = () => {
		return (
			<ViewMoreButtonDown>
				<Link
					to={who === 'ImageSearch' ? 'Videos' : 'ImageSearch'}
					smooth={'easeInOutQuad'}
					duration={1500}
				>
					<BsArrowDownCircle />
				</Link>
			</ViewMoreButtonDown>
		);
	};
	return <>{up ? upArrow() : downArrow()}</>;
}

export default Arrow;
