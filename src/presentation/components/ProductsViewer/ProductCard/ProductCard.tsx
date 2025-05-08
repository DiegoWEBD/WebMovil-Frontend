import './ProductCard.css'

import Product from '../../../../domain/Product/Product'
import Card from '../../containers/Card/Card'
import { CONSTANTS } from '../../../../utils/constants'
import Button from '../../buttons/Button/Button'
import { LuShoppingCart } from 'react-icons/lu'

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
				<p className='product-info code'>{product.getCode()}</p>
				<p className='product-info description'>{product.getDescription()}</p>
				<p className='product-info price'>${product.getPrice()}</p>

				<Button className='primary'>
					<LuShoppingCart className='cart-icon' />
					<p className='button-text'>Agregar</p>
				</Button>
			</div>
		</Card>
	)
}

export default ProductCard
