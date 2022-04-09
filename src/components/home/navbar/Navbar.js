// React:
import React from 'react';

// Components:
import Logo from '../logo/Logo';

// Styles:
import {
	NavItem,
	NavItems,
	NavContainer,
	menuStyles,
} from '../../../style/Home/Navbar.Styled';

// Apis:
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';

// Assets:
import { deviceSize } from '../../../assets/ResponsiveSize';

function Navbar() {
	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

	const items = (
		<div>
			<NavItems>
				<NavItem>
					<Link to='Home' smooth={'easeInOutQuad'} duration={1000}>
						Home
					</Link>
				</NavItem>
				<NavItem>
					<Link to='ImageSearch' smooth={'easeInOutQuad'} duration={1000}>
						Images
					</Link>
				</NavItem>
				<NavItem>
					<Link to='ImageSearch' smooth={'easeInOutQuad'} duration={1000}>
						Videos
					</Link>
				</NavItem>
			</NavItems>
		</div>
	);

	return (
		<NavContainer>
			<Logo />

			{isMobile && (
				<Menu right styles={menuStyles}>
					{items}
				</Menu>
			)}
			{!isMobile && items}
		</NavContainer>
	);
}

export default Navbar;
