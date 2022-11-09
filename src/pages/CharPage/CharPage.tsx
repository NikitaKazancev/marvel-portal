import './charPage.scss';

import { useParams } from 'react-router-dom';
import { useGetByIdQuery } from '../../api/heroesApi';
import { getCharacter } from '../../api/MarvelService';
import { Banner } from '../../components/Banner/Banner';
import Spinner from '../../components/Spinner/Spinner';
import { Page404 } from '../404/Page404';
import { Helmet } from 'react-helmet';
import { AnchorBtn } from '../../components/AnchorBtn/AnchorBtn';
import { ComicsList } from '../../components/ComicsList/ComicsList';

export const CharPage: React.FC<{ data: any }> = ({ data }) => {
	const { description, name, thumbnail, homepage, wiki, comics } =
		getCharacter(data);
	return (
		<>
			<Helmet>
				<title>{name}</title>
				<meta name='description' content={`Character ${name}`} />
			</Helmet>
			<div className='char-page single-page'>
				<img src={thumbnail} alt={name} className='block' />
				<div className='wrapper'>
					<h2 className='title'>{name}</h2>
					<div className='descr'>{description}</div>
					<div className='src'>
						<AnchorBtn type='main' href={homepage}>
							homepage
						</AnchorBtn>
						<AnchorBtn type='secondary' href={wiki}>
							wiki
						</AnchorBtn>
					</div>
				</div>

				<ComicsList comics={comics} classNames='comics' />
				{/* {comics && comics.length ? (
					<div className='event-page__comics'>
						<h4 className='event-page__comics-title title'>
							{comics.length ? 'Comics:' : 'No info about comics'}
						</h4>
						{comics.map(({ name, id }) => (
							<CharInfoComic id={id} name={name} key={id} />
						))}
					</div>
				) : null} */}
			</div>
		</>
	);
};
