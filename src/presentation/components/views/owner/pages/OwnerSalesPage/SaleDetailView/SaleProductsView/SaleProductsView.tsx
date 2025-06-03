import './SaleProductsView.css'

import SaleDetail from '../../../../../../../../domain/SaleDetail/SaleDetail'
import { localePrice } from '../../../../../../../../utils/locale_number'
import GridContainer from '../../../../../../containers/GridContainer/GridContainer'
import Skeleton from '../../../../../../Skeleton/Skeleton'

type SaleProductsViewProps = {
	details?: SaleDetail[]
}

const SaleProductsView = ({ details }: SaleProductsViewProps) => {
	return (
		<GridContainer>
			{!details ? (
				<Skeleton />
			) : (
				details.map(detail => (
					<div key={detail.getProductCode()} className='sale-detail-product'>
						<div className='sale-detail-product-left'>
							<p>{detail.getProductName()}</p>
							<p className='product-code'>Código: {detail.getProductCode()}</p>
							<p>
								{detail.getQuantity()} x {localePrice(detail.getUnitPrice())}
							</p>
						</div>
						<div className='sale-detail-product-right'>
							<p>Total</p>
							<p className='detail-price'>
								{localePrice(detail.getQuantity() * detail.getUnitPrice())}
							</p>
						</div>
					</div>
				))
			)}
		</GridContainer>
	)
}

export default SaleProductsView
