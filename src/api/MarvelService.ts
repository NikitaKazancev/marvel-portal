import { IHeroDto } from './dto/hero/IHeroDto';
import { IHeroResDto } from './dto/hero/IHeroResDto';
import { IHeroQueryDto } from './dto/hero/IHeroQueryDto';
import type { IComicDto } from './dto/comic/IComicDto';
import type { IComicResDto } from './dto/comic/IComicResDto';
import { IComicQueryDto } from './dto/comic/IComicQueryDto';
import { getArrWithIdByUrl, getIdByUrl } from '../general/functions';
import { IEventDto } from './dto/event/IEventDto';
import { IEventResDto } from './dto/event/IEventResDto';
import { IEventQueryDto } from './dto/event/IEventQueryDto';

//eslint-disable-next-line
const MarvelService = () => {
	const getEvent = (data: IEventQueryDto): IEventResDto => {
		return transformEventData(data.data.results[0]);
	};

	const getCharacter = (data: IHeroQueryDto): IHeroResDto =>
		transformCharacterData(data.data.results[0]);

	const getCharacters = (data: IHeroQueryDto): IHeroResDto[] => {
		const chars = data.data.results;
		return chars.map(transformCharacterData);
	};

	const getComic = (data: IComicQueryDto): IComicResDto =>
		transformComicData(data.data.results[0]);

	const getComics = (data: IComicQueryDto): IComicResDto[] => {
		const comics = data.data.results;
		return comics.map(transformComicData);
	};

	const getEvents = (data: IEventQueryDto): IEventResDto[] => {
		const events = data.data.results;
		return events.map(transformEventData);
	};

	const changeDescr = (descr: string, name: string): string =>
		descr.includes('</p>')
			? descr.slice(16, -4)
			: descr || `At the moment there's no description about ${name}`;

	const transformCharacterData = ({
		id,
		name,
		description,
		thumbnail: { path, extension },
		urls,
		comics,
	}: IHeroDto): IHeroResDto => {
		description = changeDescr(description, name);

		let comicsRes: {
			id: string;
			name: string;
		}[] = getArrWithIdByUrl(comics.items, 'resourceURI') as unknown as {
			id: string;
			name: string;
		}[];
		if (comicsRes.length > 10) {
			comicsRes = comicsRes.slice(0, 10);
		}

		return {
			id,
			name,
			description,
			thumbnail: `${path}.${extension}`,
			homepage: urls[0].url,
			wiki: urls[1].url,
			comics: comicsRes,
		};
	};

	const transformComicData = ({
		description,
		id,
		pageCount,
		prices: [{ price }],
		textObjects,
		thumbnail: { path, extension },
		title,
	}: IComicDto): IComicResDto => {
		if (!description) {
			description = '';
		} else {
			description = changeDescr(description, title);
		}

		let language: string;
		if (!textObjects.length || !textObjects[0].language) {
			language = 'en';
		} else {
			language = textObjects[0].language;
		}

		if (price == '0') {
			price = 'Price is not available';
		} else {
			price = `$ ${price}`;
		}

		if (pageCount == '0') {
			pageCount = 'Pages are not available';
		} else {
			pageCount += ' pages';
		}

		return {
			id,
			name: title,
			description,
			thumbnail: `${path}.${extension}`,
			pageCount,
			price,
			language,
		};
	};

	const transformEventData = ({
		description,
		end,
		id,
		start,
		thumbnail: { extension, path },
		title,
		urls,
		previous,
		next,
		comics,
	}: IEventDto): IEventResDto => {
		description = changeDescr(description, title);

		if (previous) {
			if (!previous.name) {
				previous.name = 'Previous';
			}

			if (!previous.resourceURI) {
				previous = undefined;
			}
		}

		if (next) {
			if (!next.name) {
				next.name = 'Next';
			}

			if (!next.resourceURI) {
				next = undefined;
			}
		}

		let comicsRes:
			| {
					id: string;
					name: string;
			  }[]
			| undefined = undefined;
		if (comics) {
			comicsRes = getArrWithIdByUrl(
				comics.items,
				'resourceURI'
			) as unknown as {
				id: string;
				name: string;
			}[];
			if (comicsRes.length > 10) {
				comicsRes = comicsRes.slice(0, 10);
			}
		}

		return {
			description,
			end: end?.slice(0, 10),
			id,
			start: start?.slice(0, 10),
			thumbnail: `${path}.${extension}`,
			title,
			homepage: urls[0]?.url,
			previous: previous
				? {
						id: getIdByUrl(previous?.resourceURI),
						name: previous?.name,
				  }
				: undefined,
			next: next
				? {
						id: getIdByUrl(next?.resourceURI),
						name: next?.name,
				  }
				: undefined,
			comics: comics ? comicsRes : undefined,
		};
	};

	return {
		getCharacter,
		getCharacters,
		getComic,
		getComics,
		getEvents,
		getEvent,
	};
};

export const {
	getCharacter,
	getCharacters,
	getComic,
	getComics,
	getEvents,
	getEvent,
} = MarvelService();
