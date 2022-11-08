import './characters.scss';

import { MouseEventHandler, useEffect } from 'react';
import { Character } from './Character/Character';
import { useGetRandomsQuery } from '../../api/heroesApi';
import { getCharacters } from '../../api/MarvelService';
import Spinner from '../Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
	add,
	changeSelectedChar,
	setLoadByClick,
} from '../../state/heroesSlice';
import { IState } from '../../state/store';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const Characters: React.FC = () => {
	const { data, isFetching, isLoading, refetch } = useGetRandomsQuery({
		amount: 9,
		type: 'character',
	});

	const charsList = useSelector((state: IState) => state.heroesState.list);
	const loadByClick = useSelector(
		(state: IState) => state.heroesState.loadByClick
	);
	const dispatch = useDispatch();

	const itemsRefs: HTMLLIElement[] = [];
	const setRef = (elem: HTMLLIElement): void => {
		itemsRefs.push(elem);
	};

	useEffect(() => {
		if (data && (!charsList.length || loadByClick)) {
			dispatch(add(getCharacters(data)));
		}

		return () => {
			dispatch(setLoadByClick(false));
		};
	}, [data]);

	const loadMore = (): void => {
		dispatch(setLoadByClick(true));
		refetch();
	};

	const onSelectedRef = (i: number): void => {
		itemsRefs.forEach(elem => elem.classList.remove('character_selected'));
		itemsRefs[i].classList.add('character_selected');
		itemsRefs[i].focus();
	};

	const onSelectedChar = (id: string): void => {
		dispatch(changeSelectedChar(id));
	};

	const scrollToCharInfo = (e: any): void => {
		const target = e.target as HTMLElement;

		if (!target.matches('characters__list')) {
			const charInfo = document.querySelector('.char-info');
			if (charInfo) {
				charInfo.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};

	return (
		<div className='characters'>
			<TransitionGroup
				component={'ul'}
				className='characters__list'
				onClick={scrollToCharInfo}
			>
				{charsList.map((hero, i) => (
					<CSSTransition key={hero.id} timeout={1000} classNames={'fade'}>
						<Character
							{...hero}
							onSelectedChar={(): void => {
								onSelectedChar(hero.id);
								onSelectedRef(i);
							}}
							setRef={setRef}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
			<div className='characters__more'>
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
	);
};
