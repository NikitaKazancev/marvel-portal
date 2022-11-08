import './comicPage.scss';

import { getComic } from '../../api/MarvelService';
import { Helmet } from 'react-helmet';

export const ComicPage: React.FC<{ data: any }> = ({ data }) => {
	const { description, name, thumbnail, language, pageCount, price } =
		getComic(data);
	return (
		<>
			<Helmet>
				<title>{name}</title>
				<meta name='description' content={`Comic ${name}`} />
			</Helmet>
			<div className='comic-page'>
				<img src={thumbnail} alt={name} className='block' />
				<div className='comic-page__wrapper'>
					<h2 className='comic-page__title title'>{name}</h2>
					<div className='comic-page__descr descr'>{description}</div>
					<div className='comic-page__pages small-title'>
						{pageCount} pages
					</div>
					<div className='comic-page__lang small-title'>
						Language: {language}
					</div>
					<div className='comic-page__price title'>{price}</div>
				</div>
			</div>
		</>
	);
};
