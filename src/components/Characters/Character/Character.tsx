import './character.scss';
import type { ICharacter } from '../../../state/heroesSlice';
import { LegacyRef } from 'react';

interface ICharFunctions {
	onSelectedChar: (id: number) => void;
	setRef: (elem: HTMLLIElement) => void;
}

export const Character: React.FC<ICharacter & ICharFunctions> = ({
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
			<img src={thumbnail} alt='thor' className='character__thumbnail' />
			<h3 className='character__title'>{name}</h3>
		</li>
	);
};
