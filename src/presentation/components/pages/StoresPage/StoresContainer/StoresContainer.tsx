import './StoresContainer.css'

import Store from '../../../../../domain/Store/Store'
import StoreCard from '../StoreCard/StoreCard'

type StoresContainerProps = {
	stores: Store[] | undefined
}

const StoresContainer = ({ stores }: StoresContainerProps) => {
	return (
		<div className='store-list'>
			{stores?.map(store => (
				<StoreCard key={store.getId()} store={store} />
			))}
		</div>
	)
}

export default StoresContainer
