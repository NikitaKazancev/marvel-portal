import './randomTry.scss';
import imgDecoration from '../../../img/random-decoration.png';
import { useGetRandomCharQuery } from '../../../api/heroesApi';

export const RandomTry: React.FC = () => {
	const { refetch } = useGetRandomCharQuery(null);

	const handleClick = (): void => {
		refetch();
	};

	return (
		<div className='random__try'>
			<h2 className='random__try-title'>
				Random character for today! <br />
				Do you want to get to know him better?
			</h2>
			<div className='random__try-search'>
				<h3>Or choose another one</h3>
				<div className='btn btn_main' onClick={handleClick}>
					try it
				</div>
			</div>
			<img
				className='random__try-decoration'
				src={imgDecoration}
				alt='shield and mjolnir'
			/>
		</div>
	);
};
