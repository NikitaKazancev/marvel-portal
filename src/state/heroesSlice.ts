import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ICharacter {
	thumbnail: string;
	name: string;
	id: string;
}

export interface IHeroesState {
	list: ICharacter[];
	selectedChar: string;
	searchName: string;
}

const initialState: IHeroesState = {
	list: [],
	selectedChar: '1011095',
	searchName: '',
};

const heroesSlice = createSlice({
	name: 'heroes',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<ICharacter[]>) => {
			state.list = state.list.concat(action.payload);
		},

		changeSelectedChar: (state, action: PayloadAction<string>) => {
			state.selectedChar = action.payload;
		},

		setSearchName: (state, action: PayloadAction<string>) => {
			console.log(2);
			state.searchName = action.payload;
		},
	},
});

export const { add, changeSelectedChar, setSearchName } = heroesSlice.actions;
export default heroesSlice.reducer;
