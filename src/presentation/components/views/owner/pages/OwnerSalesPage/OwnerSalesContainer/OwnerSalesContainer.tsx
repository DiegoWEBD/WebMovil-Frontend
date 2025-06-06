import './OwnerSalesContainer.css'

import { SaleSummary } from '../../../../../../../application/sale_service/types/SaleSummary'
import OwnerSaleCard from './OwnerSaleCard/OwnerSaleCard'
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
		<GridContainer>
			{isLoading &&
				Array.from({ length: 10 }).map((_, index) => (
					<OwnerSaleCard sale={undefined} key={index} />
				))}
			{sales?.map(sale => (
				<OwnerSaleCard sale={sale} key={sale.code} />
			))}
		</GridContainer>
	)
}

export default OwnerSalesContainer
