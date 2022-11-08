import './header.scss';

import { useMemo } from 'react';
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
		];
	}, []);

	return (
		<header className='header'>
			<Link to={'/'} className='header__title'>
				<span>Marvel</span> random portal
			</Link>
			<nav>
				<ul>
					{links.map(({ name, to }, i) => (
						<Link
							to={to}
							key={i}
							className={i != links.length - 1 ? 'with-slash' : ''}
						>
							{name}
						</Link>
					))}
				</ul>
			</nav>
		</header>
	);
};
