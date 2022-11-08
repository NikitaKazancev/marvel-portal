import { Type } from '../api/ApiService';
import { CharPage } from './CharPage/CharPage';
import { ComicPage } from './ComicPage/ComicPage';
import { EventPage } from './EventPage/EventPage';

export const singlePages = (data: any): Record<Type, JSX.Element> => ({
	comic: <ComicPage data={data} />,
	character: <CharPage data={data} />,
	event: <EventPage data={data} />,
});
