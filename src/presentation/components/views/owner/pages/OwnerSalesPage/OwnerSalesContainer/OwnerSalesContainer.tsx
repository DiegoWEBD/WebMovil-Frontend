import './OwnerSalesContainer.css'

import { SaleSummary } from '../../../../../../../application/sale_service/types/SaleSummary'
import SaleCard from './SaleCard/SaleCard'
import GridContainer from '../../../../../containers/GridContainer/GridContainer'

type OwnerSalesContainerProps = {
	sales: SaleSummary[] | undefined
	isLoading: boolean
}

const OwnerSalesContainer = ({
	sales,
	isLoading,
}: OwnerSalesContainerProps) => {
	return (
		<GridContainer className='fr'>
			{sales?.map(sale => (
				<SaleCard sale={sale} key={sale.code} />
			))}
			{isLoading &&
				Array.from({ length: 5 }).map((_, index) => <SaleCard key={index} />)}
		</GridContainer>
	)
}

export default OwnerSalesContainer
