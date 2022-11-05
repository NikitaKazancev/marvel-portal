import './randomChar.scss';

import { useGetRandomCharQuery } from '../../../api/heroesApi';
import { getCharacter } from '../../../api/MarvelService';
import Spinner from '../../Spinner/Spinner';
import { transformString } from '../../../general/functions';

export const RandomChar: React.FC = () => {
	const { data, isFetching, isLoading } = useGetRandomCharQuery(null);

	let content: JSX.Element;
	if (isFetching || isLoading) {
		content = <Spinner absolute={true}></Spinner>;
	} else {
		const { description, homepage, name, thumbnail, wiki } =
			getCharacter(data);
		const descr = transformString(description);

		content = (
			<>
				<img
					src={thumbnail}
					alt={name}
					className='random__char-thumbnail'
				/>
				<div className='random__char-info'>
					<h3 className='random__char-title small-title'>{name}</h3>
					<div className='random__char-descr descr'>{descr}</div>
					<div className='random__char-src'>
						<a className='btn btn_main' href={homepage}>
							homepage
						</a>
						<a className='btn btn_secondary' href={wiki}>
							WIKI
						</a>
					</div>
				</div>
			</>
		);
	}

	return <div className='random__char'>{content}</div>;
};
