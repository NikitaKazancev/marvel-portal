import './charInfo.scss';
import { useEffect, useMemo } from 'react';
import { CharInfoComic } from './CharInfoComic/CharInfoComic';
import { useGetByIdQuery } from '../../api/heroesApi';
import Spinner from '../Spinner/Spinner';
import { getCharacter } from '../../api/MarvelService';
import { useSelector } from 'react-redux';
import { IState } from '../../state/store';
import { transformString } from '../../general/functions';

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
		const { comics, description, homepage, id, name, thumbnail, wiki } =
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
						<h3 className='char-info__title'>{name}</h3>
						<div className='char-info__src'>
							<a className='btn btn_main' href={homepage}>
								homepage
							</a>
							<a className='btn btn_secondary' href={wiki}>
								wiki
							</a>
						</div>
					</div>
				</div>
				<div className='char-info__descr'>{descr}</div>
				<div className='char-info__comics'>
					<h4 className='char-info__comics-title'>
						{comics.length ? 'Comics:' : 'No info about comics'}
					</h4>
					{comics.map(({ name }, i) => (
						<CharInfoComic name={name} key={i} />
					))}
				</div>
			</>
		);
	}

	return <div className='char-info block'>{content}</div>;
};
