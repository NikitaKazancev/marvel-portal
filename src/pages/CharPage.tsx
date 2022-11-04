import { useParams } from 'react-router-dom';
import { useGetByIdQuery } from '../api/heroesApi';
import { getCharacter } from '../api/MarvelService';
import { Banner } from '../components/Banner/Banner';
import Spinner from '../components/Spinner/Spinner';
import { Page404 } from './404';

export const CharPage: React.FC = () => {
	const { id } = useParams();
	if (!id) return <Page404 />;

	const { isFetching, isLoading, data } = useGetByIdQuery({
		type: 'character',
		id,
	});

	let content;
	if (isLoading || isFetching) {
		content = <Spinner />;
	} else {
		const { description, name, thumbnail } = getCharacter(data);
		content = (
			<>
				<Banner />
			</>
		);
	}

	return content;
};
