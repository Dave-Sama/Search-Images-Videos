import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../redux/Images';
import screenSlice from './screen';

export const store = configureStore({
	reducer: {
		image: imageReducer,
		screen: screenSlice,
	},
});
