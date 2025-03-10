import React from 'react';
import './navbar.scss';
import { motion } from 'framer-motion';
const Navbar = () => {
	return (
		<div className='navbar'>
			{/* side bar */}
			<div className='wrapper'>
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}>
					SEGUN
				</motion.span>
				<div className='social'>
					<a href=''>
						<img
							src='/facebook.png'
							alt='facebook logo'
						/>
					</a>
					<a href=''>
						<img
							src='/instagram.png'
							alt='instagram logo'
						/>
					</a>
					<a href=''>
						<img
							src='/youtube.png'
							alt='youtube logo'
						/>
					</a>
					<a href=''>
						<img
							src='/dribbble.png'
							alt='dribbble logo'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
