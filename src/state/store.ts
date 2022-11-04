import { configureStore } from '@reduxjs/toolkit';
import { reducer, reducerPath, middleware } from '../api/heroesApi';
import heroesSlice, { IHeroesState } from './heroesSlice';

export interface IState {
	heroesState: IHeroesState;
}

export const store = configureStore({
	reducer: {
		[reducerPath]: reducer,
		heroesState: heroesSlice,
	},
	devTools: process.env.NODE_ENV !== 'production',
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(middleware),
});

export default store;
