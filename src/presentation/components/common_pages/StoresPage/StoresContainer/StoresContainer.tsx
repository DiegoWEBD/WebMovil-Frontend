import './StoresContainer.css'

import StoreSummary from '../../../../../application/store_service/types/StoreSummary.interface'
import StoreCard from '../StoreCard/StoreCard'
import StoreSkeletonCard from '../StoreCard/StoreSkeletonCard/StoreSkeletonCard'
import LazyRender from '../../../LazyRender/LazyRender'

type StoresContainerProps = {
	stores: StoreSummary[] | undefined
}

const StoresContainer = ({ stores }: StoresContainerProps) => {
	return (
		<div className='store-list'>
			{!stores &&
				Array.from({ length: 30 }).map((_, index) => (
					<LazyRender key={index}>
						{() => <StoreSkeletonCard key={index} />}
					</LazyRender>
				))}
			{stores &&
				stores.map(store => (
					<LazyRender key={store.id}>
						{() => <StoreCard store={store} />}
					</LazyRender>
				))}
		</div>
	)
}

export default StoresContainer
