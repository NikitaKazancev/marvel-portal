import { IHeroDto } from './dto/hero/IHeroDto';
import { IHeroResDto } from './dto/hero/IHeroResDto';
import { IHeroQueryDto } from './dto/hero/IHeroQueryDto';
import type { IComicDto } from './dto/comic/IComicDto';
import type { IComicResDto } from './dto/comic/IComicResDto';
import { IComicQueryDto } from './dto/comic/IComicQueryDto';

//eslint-disable-next-line
const MarvelService = () => {
	const getCharacter = (data: IHeroQueryDto): IHeroResDto =>
		_transformCharacterData(data.data.results[0]);

	const getCharacters = (data: IHeroQueryDto): IHeroResDto[] => {
		const chars = data.data.results;
		return chars.map(_transformCharacterData);
	};

	const getComic = (data: IComicQueryDto): IComicResDto =>
		_transformComicData(data.data.results[0]);

	const getComics = (data: IComicQueryDto): IComicResDto[] => {
		const comics = data.data.results;
		return comics.map(_transformComicData);
	};

	const _transformCharacterData = ({
		id,
		name,
		description,
		thumbnail: { path, extension },
		urls,
		comics,
	}: IHeroDto): IHeroResDto => {
		description = description.includes('</p>')
			? description.slice(16, -4)
			: description || `At the moment there's no description about ${name}`;

		let comicsRes = comics.items;
		if (comicsRes.length > 10) {
			comicsRes = comicsRes.slice(0, 9);
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

	const _transformComicData = ({
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
		}
		description = description.includes('</p>')
			? description.slice(16, -4)
			: description || `At the moment there's no description about ${title}`;

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

	return { getCharacter, getCharacters, getComic, getComics };
};

export const { getCharacter, getCharacters, getComic, getComics } =
	MarvelService();
