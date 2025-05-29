import './ProductCard.css'

import Product from '../../../../domain/Product/Product'
import Card from '../../containers/Card/Card'
import NotFoundImage from '../../NotFoundImage/NotFoundImage'

type ProductCardProps = {
	product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<Card className='product-card'>
			<div className='product-img-container'>
				<NotFoundImage className='product-img' />
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
