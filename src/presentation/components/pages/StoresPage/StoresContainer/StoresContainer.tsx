import './StoresContainer.css'

import StoreSummary from '../../../../../application/types/StoreSummary.interface'
import StoreCard from '../StoreCard/StoreCard'
import StoreSkeletonCard from '../StoreCard/StoreSkeletonCard/StoreSkeletonCard'

type StoresContainerProps = {
	stores: StoreSummary[] | undefined
}

const StoresContainer = ({ stores }: StoresContainerProps) => {
	return (
		<div className='store-list'>
			{stores
				? stores.map(store => <StoreCard key={store.id} store={store} />)
				: Array.from({ length: 8 }, (_, index) => (
						<StoreSkeletonCard key={index} />
				  ))}
		</div>
	)
}

export default StoresContainer
