import './ProductQuantityToOrder.css'

import { FaMinus, FaPlus } from 'react-icons/fa'
import { PiTrashSimpleBold } from 'react-icons/pi'
import Button from '../../../buttons/Button/Button'

type ProductQuantityToOrderProps = {
	quantityToOrder: number
	setQuantityToOrder: (quantity: number) => void
	stock: number
	onShoppingCart?: boolean
}

const ProductQuantityToOrder = ({
	quantityToOrder,
	setQuantityToOrder,
	stock,
	onShoppingCart = false,
}: ProductQuantityToOrderProps) => {
	return (
		<div className='quantity-to-order'>
			<Button
				className={`quantity-to-order-button ${
					quantityToOrder <= 1 && !onShoppingCart ? 'disabled' : ''
				}`}
				onClick={() =>
					setQuantityToOrder(quantityToOrder - 1 > 0 ? quantityToOrder - 1 : 1)
				}
			>
				{onShoppingCart && quantityToOrder === 1 ? (
					<PiTrashSimpleBold />
				) : (
					<FaMinus />
				)}
			</Button>

			<p className='detailed-product-data'>{quantityToOrder}</p>
			<Button
				className={`quantity-to-order-button ${
					quantityToOrder >= stock ? 'disabled' : ''
				}`}
				onClick={() =>
					setQuantityToOrder(
						quantityToOrder < stock ? quantityToOrder + 1 : quantityToOrder
					)
				}
			>
				<FaPlus />
			</Button>
		</div>
	)
}
export default ProductQuantityToOrder
