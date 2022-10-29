export interface ICharInfoComic {
	children: string;
}

export const CharInfoComic: React.FC<ICharInfoComic> = ({ children }) => {
	return <div className='char-info-comic'>{children}</div>;
};
