import './charInfoComic.scss';

import { Link } from 'react-router-dom';

export interface ICharInfoComic {
	name: string;
	id: string;
}

export const CharInfoComic: React.FC<ICharInfoComic> = ({ name, id }) => {
	return (
		<Link to={`/comics/${id}`} className='char-info-comic descr'>
			{name}
		</Link>
	);
};
