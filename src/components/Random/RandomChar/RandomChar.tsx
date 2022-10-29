import './randomChar.scss';
import thumbnail from '../../../img/thumbnail.png';

export const RandomChar: React.FC = () => {
	return (
		<div className='random__char'>
			<img src={thumbnail} alt='thumbnail' />
			<div className='random__char-info'>
				<h3 className='random__char-title'>THOR</h3>
				<div className='random__char-descr'>
					As the Norse God of thunder and lightning, Thor wields one of the
					greatest weapons ever made, the enchanted hammer Mjolnir. While
					others have described Thor as an over-muscled, oafish imbecile,
					he's quite smart and compassionate...
				</div>
				<div className='random__char-src'>
					<button className='btn btn_main'>homepage</button>
					<button className='btn btn_secondary'>WIKI</button>
				</div>
			</div>
		</div>
	);
};
