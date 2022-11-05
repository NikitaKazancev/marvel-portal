import './mainPage.scss';

import { Characters } from '../../components/Characters/Characters';
import { CharInfo } from '../../components/CharInfo/CharInfo';
import { CharSearch } from '../../components/CharSearch/CharSearch';
import { Random } from '../../components/Random/Random';
import { Helmet } from 'react-helmet';

export const MainPage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Marvel Informational Portal</title>
				<meta name='description' content='Main page' />
			</Helmet>
			<div className='page_main'>
				<Random></Random>
				<Characters></Characters>
				<div>
					<CharInfo></CharInfo>
					<CharSearch></CharSearch>
				</div>
			</div>
		</>
	);
};
