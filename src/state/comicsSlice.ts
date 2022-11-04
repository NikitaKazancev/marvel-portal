import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IComic {
	id: string;
	thumbnail: string;
	name: string;
	price: string;
}

export interface IComicsState {
	list: IComic[];
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
		add: (state, action: PayloadAction<IComic[]>) => {
			state.list = state.list.concat(action.payload);
		},

		setLoadByClick: (state, action: PayloadAction<boolean>) => {
			state.loadByClick = action.payload;
		},
	},
});

export const { add, setLoadByClick } = comicsSlice.actions;
export default comicsSlice.reducer;
