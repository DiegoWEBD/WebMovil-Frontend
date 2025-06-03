import './OwnerSalesContainer.css'

import Sale from '../../../../../../../domain/Sale/Sale'
import OwnerSaleCard from './OwnerSaleCard/OwnerSaleCard'

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
					<OwnerSaleCard sale={undefined} key={index} />
				))}
			{sales?.map(sale => (
				<OwnerSaleCard sale={sale} key={sale.getCode()} />
			))}
		</div>
	)
}

export default OwnerSalesContainer
