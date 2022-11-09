import './aboutPage.scss';
import aboutBanner from '../../img/about_bg.jpg';

export const AboutPage: React.FC = () => {
	return (
		<div className='about'>
			<div className='about__banner'>
				<img src={aboutBanner} alt={'info'} />
				<h2 className='about__banner-title'>marvel random information</h2>
			</div>
			<div className='about__wrapper'>
				<h3 className='about__title title'>Company Info and Contact</h3>
				<div className='descr'>
					Marvel Random Entertainment, based on a proven library of over
					1500 characters featured on the official Marvel website. <br />
					The service was created for a deep and interesting immersion in
					the great fantasy universe.
				</div>
				<div className='about__elem'>
					<h4 className='small-title'>Corporate Headquarters</h4>
					<div className='descr'>
						<strong>Marvel Random Entertainment</strong>
						<br />
						Russia, Moscow
						<br />
						Moscow Region, MR 141014
					</div>
				</div>
				<div className='about__elem'>
					<h4 className='small-title'>Business Inquiries</h4>
					<div className='descr'>
						General phone number, Marvel Random Entertainment:
						<br />
						<a href='tel:985-472-9280'>985-472-9280</a>
						<div className='mt-1'>
							Executive President
							<br />
							<a href='mailto:nkaz2003@gmail.com'>nkaz2003@gmail.com</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
