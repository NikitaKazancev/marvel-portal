import './character.scss';

export interface ICharacter {
	thumbnail: string;
	name: string;
}

export const Character: React.FC<ICharacter> = ({ thumbnail, name }) => {
	return (
		<div className='character block'>
			<img src={thumbnail} alt='thor' className='character__thumbnail' />
			<h3 className='character__title'>{name}</h3>
		</div>
	);
};
