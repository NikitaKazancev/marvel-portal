import './comicsPage.scss';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';
import { useGetRandomsQuery } from '../../api/heroesApi';
import { getComics } from '../../api/MarvelService';
import Spinner from '../../components/Spinner/Spinner';
import { add, setLoadByClick } from '../../state/comicsSlice';
import { IState } from '../../state/store';
import { CSSTransition } from 'react-transition-group';
import { Comic } from '../../components/Comic/Comic';
import { Banner } from '../../components/Banner/Banner';
import { Helmet } from 'react-helmet';

export const ComicsPage: React.FC = () => {
	const { data, isFetching, isLoading, refetch } = useGetRandomsQuery({
		amount: 8,
		type: 'comic',
	});
	const comicsList = useSelector((state: IState) => state.comicsState.list);
	const loadByClick = useSelector(
		(state: IState) => state.comicsState.loadByClick
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (data && (!comicsList.length || loadByClick)) {
			dispatch(add(getComics(data)));
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
				<title>Comics</title>
				<meta name='description' content='Comics page' />
			</Helmet>
			<Banner />
			<div className='comics'>
				<TransitionGroup component={'ul'} className='comics__list'>
					{comicsList.map(({ id, name, thumbnail, price }) => (
						<CSSTransition
							key={id}
							timeout={20000}
							classNames={'fade'}
							mountOnEnter
						>
							<Comic
								thumbnail={thumbnail}
								name={name}
								id={id}
								price={price}
							/>
						</CSSTransition>
					))}
				</TransitionGroup>
				<div className='comics__more'>
					{isFetching ? (
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
