import './characters.scss';
import { useEffect } from 'react';
import { Character } from './Character/Character';
import { useGetCharsQuery } from '../../api/heroesApi';
import { getCharacters } from '../../api/MarvelService';
import Spinner from '../Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { add, changeSelectedChar } from '../../state/heroesSlice';
import { IState } from '../../state/store';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const Characters: React.FC = () => {
	const { data, isFetching, isLoading, refetch } = useGetCharsQuery(null);
	const charsList = useSelector((state: IState) => state.heroesState.list);
	const dispatch = useDispatch();

	useEffect(() => {
		if (data != undefined) {
			dispatch(add(getCharacters(data)));
		}
	}, [data]);

	const loadMore = (): void => {
		refetch();
	};

	const itemsRefs: HTMLLIElement[] = [];
	const setRef = (elem: HTMLLIElement): void => {
		itemsRefs.push(elem);
	};

	const onSelectedRef = (i: number): void => {
		itemsRefs.forEach(elem => elem.classList.remove('character_selected'));
		itemsRefs[i].classList.add('character_selected');
		itemsRefs[i].focus();
	};

	const onSelectedChar = (id: string): void => {
		dispatch(changeSelectedChar(id));
	};

	return (
		<div className='characters'>
			<TransitionGroup component={'ul'} className='characters__list'>
				{charsList.map(({ id, name, thumbnail }, i) => (
					<CSSTransition
						key={id}
						timeout={20000}
						classNames={'fade'}
						mountOnEnter
					>
						<Character
							thumbnail={thumbnail}
							name={name}
							id={id}
							onSelectedChar={(): void => {
								onSelectedChar(id);
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
