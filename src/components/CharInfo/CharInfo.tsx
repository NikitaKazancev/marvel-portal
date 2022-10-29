import './charInfo.scss';
import thumbnail from '../../img/thumbnail.png';
import { CharInfoComic } from './CharInfoComic/CharInfoComic';

export const CharInfo: React.FC = () => {
	return (
		<div className='char-info block'>
			<div className='flex'>
				<img className='char-info__thumbnail' src={thumbnail} alt='Thor' />
				<div className='flex'>
					<h3 className='char-info__title'>Thor</h3>
					<div className='char-info__src'>
						<button className='btn btn_main'>homepage</button>
						<button className='btn btn_secondary'>wiki</button>
					</div>
				</div>
			</div>
			<div className='char-info__descr'>
				As the Norse God of thunder and lightning, Thor wields one of the
				greatest weapons ever made, the enchanted hammer Mjolnir. While
				others have described Thor as an over-muscled, oafish imbecile, he's
				quite smart and compassionate...
			</div>
			<div className='char-info__comics'>
				<h4 className='char-info__comics-title'>Comics:</h4>
				<CharInfoComic>Comic 1</CharInfoComic>
				<CharInfoComic>Comic 2</CharInfoComic>
				<CharInfoComic>Comic 3</CharInfoComic>
			</div>
		</div>
	);
};
