import { transformString } from '../general/functions';
import { IHeroDto } from './dto/IHeroDto';
import { IHeroResDto } from './dto/IHeroResDto';
import { IResDto } from './dto/IResDto';

//eslint-disable-next-line
const MarvelService = () => {
	const getCharacter = (data: IResDto): IHeroResDto =>
		_transformCharacterData(data.data.results[0]);

	const getCharacters = (data: IResDto): IHeroResDto[] => {
		const chars = data.data.results;
		return chars.map(_transformCharacterData);
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
			description: transformString(description),
			thumbnail: `${path}.${extension}`,
			homepage: urls[0].url,
			wiki: urls[1].url,
			comics: comicsRes,
		};
	};

	return { getCharacter, getCharacters };
};

export const { getCharacter, getCharacters } = MarvelService();
