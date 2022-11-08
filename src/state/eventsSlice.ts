import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IEventResDto } from '../api/dto/event/IEventResDto';

export interface IEventsState {
	list: (IEventResDto & { shown: boolean })[];
	loadByClick: boolean;
}

const initialState: IEventsState = {
	list: [],
	loadByClick: false,
};

const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<IEventResDto[]>) => {
			action.payload.forEach(event => {
				state.list.push({ ...event, shown: false });
			});
		},

		setLoadByClick: (state, action: PayloadAction<boolean>) => {
			state.loadByClick = action.payload;
		},

		setShown: (state, action: PayloadAction<string>) => {
			state.list.filter(event => event.id == action.payload)[0].shown = true;
		},
	},
});

export const { add, setLoadByClick, setShown } = eventsSlice.actions;
export default eventsSlice.reducer;
