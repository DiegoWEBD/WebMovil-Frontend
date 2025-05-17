import './ProductCard.css'

import Product from '../../../../domain/Product/Product'
import { CONSTANTS } from '../../../../utils/constants'
import Card from '../../containers/Card/Card'

type ProductCardProps = {
	product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<Card className='product-card'>
			<div className='product-img-container'>
				<img
					src={`${CONSTANTS.API_URL}/stores_portraits/generic_store_portrait.png`}
					className='product-img'
				/>
			</div>
			<div className='product-info-container'>
				<p className='product-info title'>{product.getName()}</p>

				<p className='product-info description'>{product.getDescription()}</p>
				<p className='product-info price text-highlight'>
					${product.getPrice()}
				</p>
			</div>
		</Card>
	)
}

export default ProductCard
