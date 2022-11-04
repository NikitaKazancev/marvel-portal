import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import md5 from 'blueimp-md5';
import { random } from '../general/functions';

type Type = 'comic' | 'character';

const _apiKey = '80d1823509a50e401b71216ea4fb0330';
const _privateKey = '6ea1748881fc935add6db60675ea226081091bcc';
const _charsAmount = 1561;

const getHash = (timeStamp: number): string => {
	return md5(timeStamp + _privateKey + _apiKey);
};

const params = `&ts=${0}&apikey=${_apiKey}&hash=${getHash(0)}`;

const urlForRandom = (type: Type, limit: number): string => {
	return `${type}s?limit=${limit}&offset=${random({
		end: _charsAmount,
	})}${params}`;
};

const heroesApi = createApi({
	reducerPath: 'heroes',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://gateway.marvel.com:443/v1/public/',
	}),
	endpoints: builder => ({
		getRandomChar: builder.query({
			query: () => ({
				url: urlForRandom('character', 1),
			}),
		}),
		getRandoms: builder.query({
			query: ({ type, amount }: { type: Type; amount: number }) => ({
				url: urlForRandom(type, amount),
			}),
		}),
		getById: builder.query({
			query: ({ type, id }: { type: Type; id: string }) => ({
				url: `${type}s/${id}?${params}`,
			}),
		}),
		getByName: builder.query({
			query: (name: string) => ({
				url: `characters?name=${name}${params}`,
			}),
		}),
	}),
});

export const {
	useGetRandomCharQuery,
	useGetRandomsQuery,
	useGetByIdQuery,
	useGetByNameQuery,
	reducerPath,
	reducer,
	middleware,
} = heroesApi;
