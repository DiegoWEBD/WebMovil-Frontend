import Product from '../../domain/Product/Product'
import ProductJSON from '../../infrastructure/product/ProductJSON.interface'
import ProductJSONAdapter from '../../infrastructure/product/adapters/ProductJSONAdapter'
import apiClient from '../../utils/axios_client'
import IStockService, { GetProductsResponse } from './IStockService.interface'

export default class StockService implements IStockService {
	async getProducts(
		storeId: string | undefined = '',
		nameFilter: string | undefined = '',
		page: number | undefined = 1,
		limit: number | undefined = 10
	): Promise<GetProductsResponse> {
		const { data } = await apiClient.get(
			`/stock?store_id=${storeId}&product_name=${nameFilter}&page=${
				page || 1
			}&limit=${limit || 10}`
		)

		const products = data.products.map(
			(product: ProductJSON) => new ProductJSONAdapter(product)
		)

		return {
			meta: data.meta,
			products,
		}
	}
	async getProductsByStoreId(storeId: string): Promise<Product[]> {
		const response = await apiClient.get(`/stock?store_id=${storeId}`)

		return response.data.map(
			(product: ProductJSON) => new ProductJSONAdapter(product)
		)
	}
}
