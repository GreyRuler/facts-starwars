import { useDispatch, useSelector } from 'react-redux';
import { setCountFacts } from '../features/facts/factsInputSlice';

export const FactInput = () => {
	const facts = useSelector(state => state.facts.value)
	const factsCount = useSelector(state => state.factsInput.value)
	const dispatch = useDispatch()

	const onChange = (e) => dispatch(setCountFacts(e.target.value))

	return (
		<input type="number" min={0} max={facts.length} value={factsCount}
			   onChange={onChange}/>
	)
}
