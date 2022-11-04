import './banner.scss';
import banner from '../../img/banner.png';

export const Banner: React.FC = () => {
	return <img src={banner} className='banner' alt='banner' />;
};
