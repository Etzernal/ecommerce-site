import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
	// state, dispatch
	const [{ basket,user }] = useStateValue(); 
	 
	const login = () => {
		if (user) {
			auth.signOut();
		}
	}
	
	console.log(basket,user);

	return (
		<nav className='header'>

			{/* Icon */}
			<Link to="/" className='header_link'>
				<img
					className="header_logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>

			{/* Search Bar */}
			<div className='header_search'>
				<input type='text' className='header_searchInput'/>
				<SearchIcon className='header_searchIcon'/>
			</div>

			{/* 3 Links */}
			<div className='header_nav'>
				{/*1st Link*/}
				<Link to={!user && '/login'} className='header_link'>
					<div onClick={login} className='header_option'>
						<span className='header_optionLineOne'>Hello {user?.email}</span>
						<span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
					</div>
				</Link>

				{/*2nd Link*/}
				<Link to='/' className='header_link'>
					<div className='header_option'>
						<span className='header_optionLineOne'>Returns</span>
						<span className='header_optionLineTwo'>& Orders</span>
					</div>
				</Link>

				{/*3rd Link*/}
				<Link to='/' className='header_link'>
					<div className='header_option'>
						<span className='header_optionLineOne'>Your</span>
						<span className='header_optionLineTwo'>Prime</span>
					</div>
				</Link>

				{/*4th Link*/}
				<Link to='/checkout' className='header_link'>
					<div className='header_optionBasket'>
						<ShoppingBasketIcon/>
						<span className='header_optionLineTwo headerBasketCount'>{basket?.length}</span>
					</div>
				</Link>

			

			</div>

		</nav>
	);
}

export default Header