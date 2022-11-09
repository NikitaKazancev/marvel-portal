import { Link } from 'react-router-dom';
import './footer.scss';

export const Footer: React.FC = () => {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<Link to={'/'} className='footer__logo'>
					<svg viewBox='0 0 36 52' xmlns='http://www.w3.org/2000/svg'>
						<rect fill='#EC1D24' width='100%' height='100%'></rect>
						<path
							fill='#FEFEFE'
							d='M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z'
						></path>
					</svg>
				</Link>
				<div className='footer__links'>
					<Link to={'/about'} className='footer__title small-title'>
						about
					</Link>
				</div>
				<div className='footer__socials'>
					<div className='footer__title small-title'>follow us</div>
					<div className='footer__socials-wrapper'>
						<a
							href='https://telegram.me/niltronnk'
							className='footer__social'
						>
							<i className='fab fa-telegram'></i>
						</a>
						<a href='https://instagram/_nk_sm' className='footer__social'>
							<i className='fab fa-instagram'></i>
						</a>
						<a
							href='https://github.com/NikitaKazancev'
							className='footer__social'
						>
							<i className='fab fa-github'></i>
						</a>
						<a
							href='https://wa.me/89854729280'
							className='footer__social'
						>
							<i className='fab fa-whatsapp'></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
