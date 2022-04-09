import { createSlice } from '@reduxjs/toolkit';

export const imageSlice = createSlice({
	name: 'image',
	initialState: {
		image: [],
		isAnimalLoading: true,
	},
	reducers: {
		setImage: (state, action) => {
			state.image = action.payload;
		},

		setIsAnimalLoading: (state, action) => {
			state.isAnimalLoading = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setImage, setIsAnimalLoading } = imageSlice.actions;

export default imageSlice.reducer;
