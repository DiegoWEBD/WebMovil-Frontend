import Product from '../../domain/Product/Product'

export default interface IStockService {
	getProductsByStoreId(storeId: string): Promise<Product[]>
}
