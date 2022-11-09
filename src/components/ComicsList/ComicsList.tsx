import './comicsList.scss';

import { SingleComic } from './SingleComic/SingleComic';

interface IComicsList {
	comics?: {
		name: string;
		id: string;
	}[];
	className?: string;
	postfix?: string;
	classNames?: string;
}

export const ComicsList: React.FC<IComicsList> = ({
	comics,
	className = '',
	postfix = '__comics',
	classNames = '',
}) => {
	return (
		<div
			className={`${classNames} comics-list ${
				className ? className + postfix : ''
			}`}
		>
			<h4
				className={`comics-list__title ${
					className ? className + postfix + '-title' : ''
				} title`}
			>
				{comics && comics.length ? 'Comics:' : 'No info about comics'}
			</h4>
			{comics
				? comics.map(({ name, id }) => (
						<SingleComic
							id={id}
							name={name}
							key={id}
							className={className ? className + postfix : ''}
						/>
				  ))
				: null}
		</div>
	);
};
