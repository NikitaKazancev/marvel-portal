import { IHeroResDto } from '../../../api/dto/hero/IHeroResDto';
import './character.scss';

interface ICharFunctions {
	onSelectedChar: (id: string) => void;
	setRef: (elem: HTMLLIElement) => void;
}

export const Character: React.FC<IHeroResDto & ICharFunctions> = ({
	thumbnail,
	name,
	id,
	onSelectedChar,
	setRef,
}) => {
	return (
		<li
			ref={setRef}
			className='character block'
			onClick={(): void => onSelectedChar(id)}
		>
			{/* <a href='#charInfo'> */}
			<img src={thumbnail} alt='thor' className='character__thumbnail' />
			<h3 className='character__title'>{name}</h3>
			{/* </a> */}
		</li>
	);
};
