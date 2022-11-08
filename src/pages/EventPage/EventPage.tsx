import './eventPage.scss';

import { getEvent } from '../../api/MarvelService';
import { Helmet } from 'react-helmet';
import { AnchorBtn } from '../../components/AnchorBtn/AnchorBtn';
import { Link } from 'react-router-dom';
import { getIdByUrl } from '../../general/functions';
import { CharInfoComic } from '../../components/CharInfo/CharInfoComic/CharInfoComic';

export const EventPage: React.FC<{ data: any }> = ({ data }) => {
	const {
		description,
		thumbnail,
		title,
		detailUrl,
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
			<div className='event-page'>
				<img src={thumbnail} alt={title} className='block' />
				<div className='event-page__wrapper'>
					<h2 className='event-page__title title'>{title}</h2>
					<div className='event-page__descr descr'>{description}</div>
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
					{detailUrl ? (
						<AnchorBtn
							classNames='event-page__details'
							href={detailUrl}
							type='main'
						>
							details
						</AnchorBtn>
					) : null}
				</div>
				{comics ? (
					<div className='event-page__comics'>
						<h4 className='event-page__comics-title title'>
							{comics.length ? 'Comics:' : 'No info about comics'}
						</h4>
						{comics.map(({ name, id }) => (
							<CharInfoComic id={id} name={name} key={id} />
						))}
					</div>
				) : null}
				{previous || next ? (
					<div className='event-page__routes'>
						{previous ? (
							<Link
								to={`/events/${getIdByUrl(previous.id)}`}
								className='event-page__routes-prev btn btn_main'
							>
								{previous.name}
							</Link>
						) : null}
						{next ? (
							<Link
								to={`/events/${getIdByUrl(next.id)}`}
								className='event-page__routes-next btn btn_main'
							>
								{next.name}
							</Link>
						) : null}
					</div>
				) : null}
			</div>
		</>
	);
};
