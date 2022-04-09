import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../redux/Images';

export const store = configureStore({
	reducer: {
		image: imageReducer,
	},
});
