import md5 from 'blueimp-md5';
import { random } from '../general/functions';

export type Type = 'comic' | 'character' | 'event';

//eslint-disable-next-line
const ApiService = () => {
	const _apiKey = '80d1823509a50e401b71216ea4fb0330';
	const _privateKey = '6ea1748881fc935add6db60675ea226081091bcc';
	const amounts: Record<string, number> = {
		character: 1561,
		event: 74,
		comic: 53393,
	};

	const getHash = (timeStamp: number): string => {
		return md5(timeStamp + _privateKey + _apiKey);
	};

	const params = `&ts=${0}&apikey=${_apiKey}&hash=${getHash(0)}`;

	const urlForRandom = (type: Type, limit: number): string => {
		const randomNum = random({
			end: amounts[type] - limit,
		});
		return `${type}s?limit=${limit}&offset=${randomNum}${params}`;
	};

	return { params, urlForRandom };
};

export const { params, urlForRandom } = ApiService();
