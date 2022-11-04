import { Header } from '../Header/Header';
import { useLocation, useOutlet } from 'react-router-dom';
import './app.scss';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { routes } from '../../routes/routes';

export function App(): JSX.Element {
	const location = useLocation();
	const currentOutlet = useOutlet();

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const {
		nodeRef,
	}: {
		nodeRef: React.RefObject<unknown>;
	} = routes.find(route => route.path === location.pathname) ?? {};

	return (
		<div className='app'>
			<Header></Header>

			<SwitchTransition>
				<CSSTransition
					key={location.pathname}
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					//@ts-ignore
					nodeRef={nodeRef}
					timeout={300}
					classNames='page'
					unmountOnExit
				>
					{(): JSX.Element => (
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						//@ts-ignore
						<main ref={nodeRef} className='page'>
							{currentOutlet}
						</main>
					)}
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
}
