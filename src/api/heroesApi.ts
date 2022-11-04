import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import md5 from 'blueimp-md5';
import { random } from '../general/functions';

const _apiKey = '80d1823509a50e401b71216ea4fb0330';
const _privateKey = '6ea1748881fc935add6db60675ea226081091bcc';
const _charsAmount = 1561;

const getHash = (timeStamp: number): string => {
	return md5(timeStamp + _privateKey + _apiKey);
};

const params = `&ts=${0}&apikey=${_apiKey}&hash=${getHash(0)}`;

const urlForRandom = (limit: number): string => {
	return `characters?limit=${limit}&offset=${random({
		end: _charsAmount,
	})}${params}`;
};

console.log(urlForRandom(1));

const heroesApi = createApi({
	reducerPath: 'heroes',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://gateway.marvel.com:443/v1/public/',
	}),
	endpoints: builder => ({
		getRandomChar: builder.query({
			query: () => ({
				url: urlForRandom(1),
			}),
		}),
		getChars: builder.query({
			query: () => ({
				url: urlForRandom(9),
			}),
		}),
		getById: builder.query({
			query: (id: number) => ({
				url: `characters/${id}?${params}`,
			}),
		}),
	}),
});

export const {
	useGetRandomCharQuery,
	useGetCharsQuery,
	reducerPath,
	useGetByIdQuery,
	reducer,
	middleware,
} = heroesApi;
