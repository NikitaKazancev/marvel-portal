import { configureStore } from '@reduxjs/toolkit';
import { reducer, reducerPath, middleware } from '../api/heroesApi';
import heroesSlice, { IHeroesState } from './heroesSlice';
import comicsSlice, { IComicsState } from './comicsSlice';

export interface IState {
	heroesState: IHeroesState;
	comicsState: IComicsState;
}

export const store = configureStore({
	reducer: {
		[reducerPath]: reducer,
		heroesState: heroesSlice,
		comicsState: comicsSlice,
	},
	devTools: process.env.NODE_ENV !== 'production',
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(middleware),
});

export default store;
