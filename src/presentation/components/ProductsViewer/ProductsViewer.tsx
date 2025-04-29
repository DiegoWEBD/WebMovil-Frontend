import './ProductsViewer.css'

import Product from '../../../domain/Product/Product'
import ProductCard from './ProductCard/ProductCard'
import ProductSkeletonCard from './ProductCard/ProductSkeletonCard/ProductSkeletonCard'

type ProductsViewerProps = {
	products: Product[] | undefined
}

const ProductsViewer = ({ products }: ProductsViewerProps) => {
	return (
		<div className='products-container'>
			{products?.map((product, index) => (
				<ProductCard key={index} product={product} />
			)) ||
				Array.from({ length: 10 }).map((_, index) => (
					<ProductSkeletonCard key={index} />
				))}
		</div>
	)
}

export default ProductsViewer
