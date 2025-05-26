import '../OwnerProductsCard.css'

import { FaRegTrashAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import Product from '../../../../../../../../domain/Product/Product'
import Skeleton from '../../../../../../Skeleton/Skeleton'

type OwnerProductsCardItemProps = {
	product: Product | undefined
}

const OwnerProductsCardItem = ({ product }: OwnerProductsCardItemProps) => {
	return (
		<div className='table-row'>
			<div className='store-product-code'>
				{product ? <p>{product.getCode()}</p> : <Skeleton />}
			</div>
			<div className='store-product-name'>
				{product ? <p>{product.getName()}</p> : <Skeleton />}
			</div>
			<div className='store-product-category'>
				{product ? <p>{product.getDescription()}</p> : <Skeleton />}
			</div>
			<div className='store-product-price'>
				{product ? <p>${product.getPrice()}</p> : <Skeleton />}
			</div>
			<div className='store-product-stock'>
				{product ? <p>{product.getStock()}</p> : <Skeleton />}
			</div>
			<div className='store-product-actions'>
				{!product && <Skeleton />}
				{!product && <Skeleton />}
				{product && (
					<button className='action-button'>
						{product ? <FiEdit className='action-button-icon' /> : <Skeleton />}
					</button>
				)}
				{product && (
					<button className='action-button'>
						<FaRegTrashAlt className='action-button-icon delete-product-button' />
					</button>
				)}
			</div>
		</div>
	)
}

export default OwnerProductsCardItem
