import { SaleSummary } from '../application/sale_service/types/SaleSummary'
import { SaleStatus } from '../presentation/components/views/shared/SalesFilter/SalesFilter'

export const filterSalesByStatus = (
	sales: SaleSummary[] | undefined,
	selectedStatus: SaleStatus | 'Todas'
): SaleSummary[] | undefined => {
	if (!sales) return undefined

	if (selectedStatus === 'Todas') {
		return sales
	}

	return sales.filter(sale => sale.status === selectedStatus)
}
