import './random.scss';

import { RandomChar } from './RandomChar/RandomChar';
import { RandomTry } from './RandomTry/RandomTry';

export const Random: React.FC = () => {
	return (
		<div className='random block'>
			<RandomChar></RandomChar>
			<RandomTry></RandomTry>
		</div>
	);
};
