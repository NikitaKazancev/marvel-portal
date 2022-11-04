import './comicPage.scss';
import { useParams } from 'react-router-dom';
import { Banner } from '../../components/Banner/Banner';
import Spinner from '../../components/Spinner/Spinner';
import { Page404 } from '../404/Page404';
import { useGetByIdQuery } from '../../api/heroesApi';
import { getComic } from '../../api/MarvelService';
import { Helmet } from 'react-helmet';

export const ComicPage: React.FC = () => {
	const { id } = useParams();

	if (!id) return <Page404 />;

	const { isFetching, isLoading, data, isError } = useGetByIdQuery({
		type: 'comic',
		id,
	});

	let content;
	if (isLoading || isFetching) {
		content = <Spinner />;
	} else {
		const { description, name, thumbnail, language, pageCount, price } =
			getComic(data);
		content = (
			<>
				<Helmet>
					<title>{name}</title>
					<meta name='description' content={`Comic ${name}`} />
				</Helmet>
				<div className='comic-page'>
					<img src={thumbnail} alt={name} className='block' />
					<div className='comic-page__wrapper'>
						<h2 className='comic-page__title'>{name}</h2>
						<div className='comic-page__descr'>{description}</div>
						<div className='comic-page__pages'>{pageCount} pages</div>
						<div className='comic-page__lang'>Language: {language}</div>
						<div className='comic-page__price'>{price}</div>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<Banner />
			{content}
		</>
	);
};
