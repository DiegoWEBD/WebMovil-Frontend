import './OwnerSalesContainer.css'

import LazyRender from '../../../../../LazyRender/LazyRender'
import OwnerSalesCardItem from './OwnerSalesCardItem/OwnerSalesCardItem'
import Sale from '../../../../../../../domain/Sale/Sale'

type OwnerSalesContainerProps = {
	sales: Sale[] | undefined
	isLoading: boolean
}

const OwnerSalesContainer = ({
	sales,
	isLoading,
}: OwnerSalesContainerProps) => {
	return (
		<div className='sales-container'>
			{isLoading &&
				Array.from({ length: 10 }).map((_, index) => (
					<LazyRender key={index} className='lazy-store-sale'>
						<OwnerSalesCardItem sale={undefined} />
					</LazyRender>
				))}
			{sales?.map(sale => (
				<LazyRender key={sale.getCode()} className='lazy-store-sale'>
					<OwnerSalesCardItem sale={sale} />
				</LazyRender>
			))}
		</div>
	)
}

export default OwnerSalesContainer
