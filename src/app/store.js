import { configureStore } from '@reduxjs/toolkit'
import factsReducer from '../features/facts/factsSlice';
import factsInputReducer from '../features/facts/factsInputSlice';

export default configureStore({
	reducer: {
		facts: factsReducer,
		factsInput: factsInputReducer
	}
})
