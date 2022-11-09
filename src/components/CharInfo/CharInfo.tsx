import './charInfo.scss';

import { useEffect } from 'react';
import { useGetByIdQuery } from '../../api/heroesApi';
import Spinner from '../Spinner/Spinner';
import { getCharacter } from '../../api/MarvelService';
import { useSelector } from 'react-redux';
import { IState } from '../../state/store';
import { transformString } from '../../general/functions';
import { AnchorBtn } from '../AnchorBtn/AnchorBtn';
import { SingleComic } from '../ComicsList/SingleComic/SingleComic';
import { ComicsList } from '../ComicsList/ComicsList';

export const CharInfo: React.FC = () => {
	const selectedChar = useSelector(
		(state: IState) => state.heroesState.selectedChar
	);
	const { isFetching, isLoading, data, refetch } = useGetByIdQuery({
		id: selectedChar,
		type: 'character',
	});

	useEffect(() => {
		refetch();
	}, [selectedChar]);

	let content;
	if (isFetching || isLoading) content = <Spinner></Spinner>;
	else {
		const { comics, description, homepage, name, thumbnail, wiki } =
			getCharacter(data);
		const descr = transformString(description);

		content = (
			<>
				<div className='flex'>
					<img
						className='char-info__thumbnail'
						src={thumbnail}
						alt={name}
					/>
					<div className='flex'>
						<h3 className='char-info__title title'>{name}</h3>
						<div className='char-info__src'>
							<AnchorBtn type='main' href={homepage}>
								homepage
							</AnchorBtn>
							<AnchorBtn type='secondary' href={wiki}>
								wiki
							</AnchorBtn>
						</div>
					</div>
				</div>
				<div className='char-info__descr descr'>{descr}</div>
				<ComicsList comics={comics} classNames='mt-1' />
				{/* <div className='char-info__comics'>
					<h4 className='char-info__comics-title title'>
						{comics.length ? 'Comics:' : 'No info about comics'}
					</h4>
					{comics.map(({ name, id }) => (
						<SingleComic id={id} name={name} key={id} />
					))}
				</div> */}
			</>
		);
	}

	return <div className='char-info block'>{content}</div>;
};
