import './page404.scss';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const Page404: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Not found</title>
				<meta name='description' content='404' />
			</Helmet>
			<div className='page404'>
				<div className='page404__number'>
					<div className='page404__err'>4</div>
					<i className='page404__icon far fa-question-circle fa-spin'></i>
					<div className='page404__err'>4</div>
				</div>
				<div className='page404__msg'>
					Maybe this page moved? Got deleted? <br />
					Never existed in the first place?
					<p>
						Let's go{' '}
						<Link className='page404__link' to={'/'}>
							home
						</Link>{' '}
						and try from there.
					</p>
				</div>
			</div>
		</>
	);
};
