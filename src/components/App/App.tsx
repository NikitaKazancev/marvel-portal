import './app.scss';

import { Header } from '../Header/Header';
import { Random } from '../Random/Random';
import { Characters } from '../Characters/Characters';
import { CharInfo } from '../CharInfo/CharInfo';
import { CharSearch } from '../CharSearch/CharSearch';

export const App: React.FC = () => {
	return (
		<div className='app'>
			<Header></Header>
			<main>
				<Random></Random>
				<Characters></Characters>
				<div>
					<CharInfo></CharInfo>
					<CharSearch></CharSearch>
				</div>
			</main>
		</div>
	);
};
