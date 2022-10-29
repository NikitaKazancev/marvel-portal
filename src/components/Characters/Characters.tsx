import './characters.scss';
import thumbnail from '../../img/thumbnail.png';
import { Character } from './Character/Character';

export const Characters: React.FC = () => {
	let i = 0;
	const characters: JSX.Element[] = Array.from({ length: 9 }, () => (
		<Character thumbnail={thumbnail} name='Thor' key={i++} />
	));

	return (
		<div className='characters'>
			{characters}
			<div className='characters__more'>
				<button className='btn btn_main'>load more</button>
			</div>
		</div>
	);
};
