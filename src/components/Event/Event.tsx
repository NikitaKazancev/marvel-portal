import './event.scss';

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { IEventResDto } from '../../api/dto/event/IEventResDto';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../state/store';
import { setShown } from '../../state/eventsSlice';

export const Event: React.FC<IEventResDto> = ({ id, thumbnail, title }) => {
	const shown = useSelector(
		(state: IState) =>
			state.eventsState.list.filter(event => event.id == id)[0].shown
	);
	const dispatch = useDispatch();

	const event: { current: HTMLAnchorElement } = useRef(null) as unknown as {
		current: HTMLAnchorElement;
	};

	if (!shown) {
		setTimeout(() => {
			event.current.classList.add('fade-enter-active');
		}, 0);
		setTimeout(() => {
			dispatch(setShown(id));
		}, 1000);
	}

	return (
		<Link
			to={`/events/${id}`}
			className={`event ${shown ? '' : 'fade-enter'}`}
			ref={event}
		>
			<img src={thumbnail} alt={title} className='event__thumbnail block' />
			<h3 className='event__title title'>{title}</h3>
		</Link>
	);
};
