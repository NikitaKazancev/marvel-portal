import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IHeroResDto } from '../api/dto/hero/IHeroResDto';

export interface IHeroesState {
	list: IHeroResDto[];
	selectedChar: string;
	searchName: string;
	loadByClick: boolean;
}

const initialState: IHeroesState = {
	list: [],
	selectedChar: '1011095',
	searchName: '',
	loadByClick: false,
};

const heroesSlice = createSlice({
	name: 'heroes',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<IHeroResDto[]>) => {
			state.list = state.list.concat(action.payload);
		},

		changeSelectedChar: (state, action: PayloadAction<string>) => {
			state.selectedChar = action.payload;
		},

		setSearchName: (state, action: PayloadAction<string>) => {
			state.searchName = action.payload;
		},

		setLoadByClick: (state, action: PayloadAction<boolean>) => {
			state.loadByClick = action.payload;
		},
	},
});

export const { add, changeSelectedChar, setSearchName, setLoadByClick } =
	heroesSlice.actions;
export default heroesSlice.reducer;
