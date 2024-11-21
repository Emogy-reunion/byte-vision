import React from 'react';
import Logo from '/src/assets/images/bytevision.png';
import '/src/assets/css/header.css'

const Header = () => {
	return (
		<header>
			<div className='logo'>
				<img src={Logo} alt='logo' />
			</div>
		</header>
	);
};

export default Header;
