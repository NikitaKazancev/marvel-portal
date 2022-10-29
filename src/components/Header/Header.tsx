import './header.scss';

export const Header: React.FC = () => {
	return (
		<header className='header'>
			<h1 className='header__title'>
				<span>Marvel</span> information portal
			</h1>
			<nav>
				<ul>
					<li>Characters</li>&nbsp;/&nbsp;<li> Comics</li>
				</ul>
			</nav>
		</header>
	);
};
