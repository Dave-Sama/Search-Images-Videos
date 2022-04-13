import { createSlice } from '@reduxjs/toolkit';

export const screenSlice = createSlice({
	name: 'screen',
	initialState: {
		width: 1020,
		height: 0,
	},
	reducers: {
		setWidth: (state, action) => {
			state.width = action.payload;
		},

		setHeight: (state, action) => {
			state.height = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setWidth, setHeight } = screenSlice.actions;

export default screenSlice.reducer;
