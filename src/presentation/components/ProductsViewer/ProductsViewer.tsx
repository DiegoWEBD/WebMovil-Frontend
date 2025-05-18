import './ProductsViewer.css'

import Product from '../../../domain/Product/Product'
import ProductCard from './ProductCard/ProductCard'
import ProductSkeletonCard from './ProductCard/ProductSkeletonCard/ProductSkeletonCard'
import LazyRender from '../LazyRender/LazyRender'

type ProductsViewerProps = {
	products: Product[] | undefined
}

const ProductsViewer = ({ products }: ProductsViewerProps) => {
	return (
		<div className='products-container'>
			{products
				? products.map((product, index) => (
						<LazyRender key={index} className='lazy-product-card'>
							<ProductCard product={product} />
						</LazyRender>
				  ))
				: Array.from({ length: 10 }).map((_, index) => (
						<LazyRender key={index} className='lazy-product-card'>
							<ProductSkeletonCard />
						</LazyRender>
				  ))}
		</div>
	)
}

export default ProductsViewer
