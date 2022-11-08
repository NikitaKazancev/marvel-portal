import './eventsPage.scss';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetRandomsQuery } from '../../api/heroesApi';
import { getEvents } from '../../api/MarvelService';
import Spinner from '../../components/Spinner/Spinner';
import { add, setLoadByClick } from '../../state/eventsSlice';
import { IState } from '../../state/store';
import { Banner } from '../../components/Banner/Banner';
import { Helmet } from 'react-helmet';
import { Event } from '../../components/Event/Event';

export const EventsPage: React.FC = () => {
	const { isFetching, isLoading, data, refetch } = useGetRandomsQuery({
		type: 'event',
		amount: 9,
	});

	const eventsList = useSelector((state: IState) => state.eventsState.list);
	const loadByClick = useSelector(
		(state: IState) => state.eventsState.loadByClick
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (data && (!eventsList.length || loadByClick)) {
			dispatch(add(getEvents(data)));
		}

		return () => {
			dispatch(setLoadByClick(false));
		};
	}, [data]);

	const loadMore = (): void => {
		dispatch(setLoadByClick(true));
		refetch();
	};

	return (
		<>
			<Helmet>
				<title>Events</title>
				<meta name='description' content='Events page' />
			</Helmet>
			<Banner />
			<div className='events'>
				<ul className='events__list'>
					{eventsList.map((event, i) => {
						return <Event {...event} key={event.id} />;
					})}
				</ul>
				<div className='events__more'>
					{isFetching || isLoading ? (
						<Spinner />
					) : (
						<button
							className='btn btn_main'
							onClick={loadMore}
							disabled={isFetching || isLoading}
						>
							load more
						</button>
					)}
				</div>
			</div>
		</>
	);
};
