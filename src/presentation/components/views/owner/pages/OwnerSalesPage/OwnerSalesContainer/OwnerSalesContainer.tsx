import './OwnerSalesContainer.css'

import Sale from '../../../../../../../domain/Sale/Sale'
import OwnerSalesCardItem from './OwnerSalesCardItem/OwnerSalesCardItem'

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
					<OwnerSalesCardItem sale={undefined} key={index} />
				))}
			{sales?.map(sale => (
				<OwnerSalesCardItem sale={sale} key={sale.getCode()} />
			))}
		</div>
	)
}

export default OwnerSalesContainer
