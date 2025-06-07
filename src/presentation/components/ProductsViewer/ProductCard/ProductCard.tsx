import './ProductCard.css'

import Product from '../../../../domain/Product/Product'
import useModalState from '../../../global_states/modalState'
import Card from '../../containers/Card/Card'
import NotFoundImage from '../../NotFoundImage/NotFoundImage'
import Shimmer from '../../Skeleton/Shimmer/Shimmer'
import Skeleton from '../../Skeleton/Skeleton'
import DetailedProduct from '../../views/shared/DetailedProduct/DetailedProduct'

type ProductCardProps = {
	product?: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
	const { openModal } = useModalState()

	return (
		<Card
			className={`product-card skeleton-wrapper ${product ? 'loaded' : ''}`}
			onClick={
				product
					? () => openModal(<DetailedProduct product={product} />)
					: undefined
			}
		>
			<div className='product-img-container'>
				{product ? (
					<NotFoundImage className='product-img' />
				) : (
					<Skeleton height='100%' width='100%' />
				)}
			</div>
			<div className='product-info-container'>
				{product ? (
					<p className='product-info title'>{product.getName()}</p>
				) : (
					<Skeleton />
				)}

				{product ? (
					<p className='product-info description'>{product.getStoreName()}</p>
				) : (
					<Skeleton />
				)}

				{product ? (
					<p className='product-info description'>{product.getDescription()}</p>
				) : (
					<Skeleton />
				)}

				{product ? (
					<p className='product-info price text-highlight'>
						${product.getPrice()}
					</p>
				) : (
					<Skeleton />
				)}
			</div>
			{!product && <Shimmer />}
		</Card>
	)
}

export default ProductCard
