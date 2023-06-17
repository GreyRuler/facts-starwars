import { useSelector } from 'react-redux';
import { FactItem } from './FactItem';

export const FactList = () => {
	const facts = useSelector(state => state.facts.value)
	const factsCount = useSelector(state => state.factsInput.value)
	const factsSlice = facts.slice(0, factsCount)

	return (
		<ul>
			{factsSlice.map((o, index) => <FactItem key={index} text={o}/>)}
		</ul>
	)
}
