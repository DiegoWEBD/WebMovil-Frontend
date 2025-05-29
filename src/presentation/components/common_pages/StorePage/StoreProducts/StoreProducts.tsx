import { useQuery } from '@tanstack/react-query'
import Product from '../../../../../domain/Product/Product'
import useAppState from '../../../../global_states/appState'
import ProductsViewer from '../../../ProductsViewer/ProductsViewer'

type StoreProductsProps = {
	storeId: string
}

const StoreProducts = ({ storeId }: StoreProductsProps) => {
	const { stockService } = useAppState()

	const { data } = useQuery<Product[]>({
		queryKey: ['storeProducts', storeId],
		queryFn: async () => {
			const response = await stockService.getProducts(storeId)
			return response.products
		},
	})

	return <ProductsViewer products={data} />
}

export default StoreProducts
