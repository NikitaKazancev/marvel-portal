import './header.scss';

import { useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
	const links = useMemo(() => {
		return [
			{
				name: 'Characters',
				to: '/',
			},
			{
				name: 'Comics',
				to: '/comics',
			},
			{
				name: 'Events',
				to: '/events',
			},
			{
				name: 'About',
				to: '/about',
			},
		];
	}, []);

	const navRef = useRef(null);
	const hamburgerRef = useRef(null);

	const hamburgerClickHandle = (): void => {
		const nav = navRef.current as unknown as HTMLElement;
		const hamburger = hamburgerRef.current as unknown as HTMLElement;

		if (nav) {
			if (nav.classList.contains('header__nav_show')) {
				hamburger.classList.remove('header__hamburger_active');
				nav.classList.remove('header__nav_show');
				document.documentElement.classList.remove('no-scroll');
			} else {
				hamburger.classList.add('header__hamburger_active');
				nav.classList.add('header__nav_show');
				document.documentElement.classList.add('no-scroll');
			}
		}
	};

	const linkClickHandle = (): void => {
		if (document.documentElement.clientWidth <= 750) {
			hamburgerClickHandle();
		}
	};

	return (
		<header className='header'>
			<Link to={'/'} className='header__title'>
				<span>Marvel</span> random portal
			</Link>
			<nav ref={navRef} className='header__nav'>
				<ul>
					{links.map(({ name, to }, i) => (
						<Link
							to={to}
							key={i}
							className={i != links.length - 1 ? 'with-slash' : ''}
							onClick={linkClickHandle}
						>
							{name}
						</Link>
					))}
				</ul>
			</nav>

			<div
				ref={hamburgerRef}
				className='header__hamburger'
				onClick={hamburgerClickHandle}
			>
				<div className='top'></div>
				<div className='mid'></div>
				<div className='bot'></div>
			</div>
		</header>
	);
};
