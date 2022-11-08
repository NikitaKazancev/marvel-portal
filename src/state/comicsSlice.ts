import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IComicResDto } from '../api/dto/comic/IComicResDto';

export interface IComicsState {
	list: IComicResDto[];
	loadByClick: boolean;
}

const initialState: IComicsState = {
	list: [],
	loadByClick: false,
};

const comicsSlice = createSlice({
	name: 'comics',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<IComicResDto[]>) => {
			state.list = state.list.concat(action.payload);
		},

		setLoadByClick: (state, action: PayloadAction<boolean>) => {
			state.loadByClick = action.payload;
		},
	},
});

export const { add, setLoadByClick } = comicsSlice.actions;
export default comicsSlice.reducer;
