import './app.scss';

import { Header } from '../Header/Header';
import { useLocation, useOutlet } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Footer } from '../Footer/Footer';

export function App(): JSX.Element {
	const location = useLocation();
	const currentOutlet = useOutlet();

	return (
		<div className='app'>
			<Header />

			<SwitchTransition>
				<CSSTransition
					key={location.pathname}
					timeout={300}
					classNames='page'
					unmountOnExit
				>
					{(): JSX.Element => (
						<main className='page'>{currentOutlet}</main>
					)}
				</CSSTransition>
			</SwitchTransition>

			<Footer />
		</div>
	);
}
