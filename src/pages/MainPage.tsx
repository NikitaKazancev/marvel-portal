import { Characters } from '../components/Characters/Characters';
import { CharInfo } from '../components/CharInfo/CharInfo';
import { CharSearch } from '../components/CharSearch/CharSearch';
import { Header } from '../components/Header/Header';
import { Random } from '../components/Random/Random';

export const MainPage: React.FC = () => {
	return (
		<>
			<Random></Random>
			<Characters></Characters>
			<div>
				<CharInfo></CharInfo>
				<CharSearch></CharSearch>
			</div>
		</>
	);
};
