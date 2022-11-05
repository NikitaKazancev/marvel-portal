export interface ICharInfoComic {
	name: string;
}

export const CharInfoComic: React.FC<ICharInfoComic> = ({ name }) => {
	return <div className='char-info-comic descr'>{name}</div>;
};
