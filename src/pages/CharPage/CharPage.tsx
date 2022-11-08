import './charPage.scss';

import { useParams } from 'react-router-dom';
import { useGetByIdQuery } from '../../api/heroesApi';
import { getCharacter } from '../../api/MarvelService';
import { Banner } from '../../components/Banner/Banner';
import Spinner from '../../components/Spinner/Spinner';
import { Page404 } from '../404/Page404';
import { Helmet } from 'react-helmet';

export const CharPage: React.FC<{ data: any }> = ({ data }) => {
	const { description, name, thumbnail } = getCharacter(data);
	return (
		<>
			<Helmet>
				<title>{name}</title>
				<meta name='description' content={`Character ${name}`} />
			</Helmet>
			<div className='char-page'>
				<img src={thumbnail} alt={name} className='block' />
				<div className='char-page__wrapper'>
					<h2 className='char-page__title title'>{name}</h2>
					<div className='char-page__descr descr'>{description}</div>
				</div>
			</div>
		</>
	);
};
