import { createSlice } from '@reduxjs/toolkit';

const factsInputSlice = createSlice({
	name: 'facts',
	initialState: {
		value: 0
	},
	reducers: {
		setCountFacts: (state, action) => {
			state.value = Number(action.payload)
		}
	}
})

export const { setCountFacts } = factsInputSlice.actions

export default factsInputSlice.reducer
