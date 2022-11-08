import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { params, Type, urlForRandom } from './ApiService';
import { IHeroQueryDto } from './dto/hero/IHeroQueryDto';

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
		getByName: builder.query<IHeroQueryDto, string>({
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
