import './OwnerSalesSummary.css'

import { useMemo } from 'react'
import Sale from '../../../../../../../domain/Sale/Sale'
import Card from '../../../../../containers/Card/Card'
import { localePrice } from '../../../../../../../utils/locale_number'

type OwnerSalesSummaryProps = {
	sales: Sale[] | undefined
}

const OwnerSalesSummary = ({ sales }: OwnerSalesSummaryProps) => {
	const totalSales = useMemo(() => {
		if (!sales) return 0
		return sales.reduce((acc, sale) => acc + sale.getTotal(), 0)
	}, [sales])

	return (
		<div className='owner-sales-summary'>
			<Card>
				<p>Ventas</p>
				<h3>{sales?.length || 0}</h3>
			</Card>

			<Card>
				<p>Total</p>
				<h3 className='total-sales-summary'>{localePrice(totalSales)}</h3>
			</Card>
		</div>
	)
}

export default OwnerSalesSummary
