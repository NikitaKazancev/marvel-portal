import { Link } from 'react-router-dom';

export interface ISingleComic {
	name: string;
	id: string;
	className?: string;
}

export const SingleComic: React.FC<ISingleComic> = ({
	name,
	id,
	className = '',
}) => {
	return (
		<Link
			to={`/comics/${id}`}
			className={`comics-list__comic ${
				className ? className + '-comic' : ''
			} descr`}
		>
			{name}
		</Link>
	);
};
