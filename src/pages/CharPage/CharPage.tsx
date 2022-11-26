import './charPage.scss';

import { getCharacter } from '../../api/MarvelService';
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
			</div>
		</>
	);
};
