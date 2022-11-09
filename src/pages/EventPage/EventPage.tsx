import './eventPage.scss';

import { getEvent } from '../../api/MarvelService';
import { Helmet } from 'react-helmet';
import { AnchorBtn } from '../../components/AnchorBtn/AnchorBtn';
import { Link } from 'react-router-dom';
import { getIdByUrl, transformString } from '../../general/functions';
import { ComicsList } from '../../components/ComicsList/ComicsList';

export const EventPage: React.FC<{ data: any }> = ({ data }) => {
	const {
		description,
		thumbnail,
		title,
		homepage,
		end,
		start,
		previous,
		next,
		comics,
	} = getEvent(data);
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name='description' content={`Event ${title}`} />
			</Helmet>
			<div className='event-page single-page'>
				{previous || next ? (
					<div className='event-page__routes'>
						{previous ? (
							<Link
								to={`/events/${getIdByUrl(previous.id)}`}
								className='event-page__routes-prev btn btn_main'
							>
								{transformString(previous.name, 15)}
							</Link>
						) : null}
						{next ? (
							<Link
								to={`/events/${getIdByUrl(next.id)}`}
								className='event-page__routes-next btn btn_main'
							>
								{transformString(next.name, 15)}
							</Link>
						) : null}
					</div>
				) : null}
				<img src={thumbnail} alt={title} className='block' />
				<div className='wrapper'>
					<h2 className='title'>{title}</h2>
					<div className='descr'>{description}</div>
					{start || end ? (
						<div className='event-page__time small-title'>
							{start ? (
								<>
									Started in <span>{start}</span> <br />
								</>
							) : null}
							{end ? (
								<>
									Ended in <span>{end}</span>
								</>
							) : null}
						</div>
					) : null}
					{homepage ? (
						<AnchorBtn classNames='details' href={homepage} type='main'>
							homepage
						</AnchorBtn>
					) : null}
				</div>
				<ComicsList comics={comics} classNames='comics' />
				{/* {comics && comics.length ? (
					<div className='event-page__comics'>
						<h4 className='event-page__comics-title title'>
							{comics.length ? 'Comics:' : 'No info about comics'}
						</h4>
						{comics.map(({ name, id }) => (
							<CharInfoComic id={id} name={name} key={id} />
						))}
					</div>
				) : null} */}
			</div>
		</>
	);
};
