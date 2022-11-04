import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ICharacter {
	thumbnail: string;
	name: string;
	id: number;
}

export interface IHeroesState {
	list: ICharacter[];
	selectedChar: number;
}

const initialState: IHeroesState = {
	list: [],
	selectedChar: 1011095,
};

const heroesSlice = createSlice({
	name: 'heroes',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<ICharacter[]>) => {
			state.list = state.list.concat(action.payload);
		},

		changeSelectedChar: (state, action: PayloadAction<number>) => {
			state.selectedChar = action.payload;
		},
	},
});

export const { add, changeSelectedChar } = heroesSlice.actions;
export default heroesSlice.reducer;
