import Product from '../../domain/Product/Product'

export interface GetProductsResponse {
	meta: {
		total_products: number
		current_page: number
		total_pages: number
		limit: number
	}
	products: Product[]
}

export default interface IStockService {
	getProducts(
		storeId?: string | undefined,
		nameFilter?: string | undefined,
		page?: number | undefined,
		limit?: number | undefined
	): Promise<GetProductsResponse>
	getProductsByStoreId(storeId: string): Promise<Product[]>
}
