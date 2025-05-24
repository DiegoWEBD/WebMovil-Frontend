import './StoresContainer.css'

import StoreSummary from '../../../../../application/store_service/types/StoreSummary.interface'
import StoreCard from '../StoreCard/StoreCard'

type StoresContainerProps = {
	stores: StoreSummary[] | undefined
}

const StoresContainer = ({ stores }: StoresContainerProps) => {
	return (
		<div className='store-list'>
			{stores?.map(store => (
				<StoreCard key={store.id} store={store} />
			))}
		</div>
	)
}

export default StoresContainer
