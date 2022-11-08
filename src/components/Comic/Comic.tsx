import './comic.scss';

import { Link } from 'react-router-dom';
import { IComicResDto } from '../../api/dto/comic/IComicResDto';

export const Comic: React.FC<IComicResDto> = ({
	thumbnail,
	id,
	name,
	price,
}) => {
	return (
		<Link to={`/comics/${id}`} className='comic'>
			<img src={thumbnail} alt={name} className='comic__thumbnail block' />
			<h3 className='comic__title small-title'>{name}</h3>
			<span className='comic__price descr'>{price}</span>
		</Link>
	);
};
