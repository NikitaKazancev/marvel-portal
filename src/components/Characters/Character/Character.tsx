import { IHeroResDto } from '../../../api/dto/hero/IHeroResDto';
import './character.scss';

interface ICharFunctions {
	setRef: (elem: HTMLLIElement) => void;
}

export const Character: React.FC<IHeroResDto & ICharFunctions> = ({
	thumbnail,
	name,
	id,
	setRef,
}) => {
	return (
		<li ref={setRef} className='character block' data-id={id}>
			<img src={thumbnail} alt='thor' className='character__thumbnail' />
			<h3 className='character__title'>{name}</h3>
		</li>
	);
};
