import './comic.scss';

import { IComic } from '../../state/comicsSlice';
import { Link } from 'react-router-dom';

export const Comic: React.FC<IComic> = ({ thumbnail, id, name, price }) => {
	return (
		<Link to={`/comics/${id}`} className='comic'>
			<img src={thumbnail} alt={name} className='comic__thumbnail block' />
			<h3 className='comic__title small-title'>{name}</h3>
			<span className='comic__price descr'>{price}</span>
		</Link>
	);
};
