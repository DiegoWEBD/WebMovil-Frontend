import { create } from 'zustand'
import { validateAccessToken } from '../auth/auth'
import IStoreService from '../../application/store_service/IStoreService.interface'
import StoreService from '../../application/store_service/StoreService'
import IStockService from '../../application/stock_service/IStockService.interface'
import StockService from '../../application/stock_service/StockService'

type AppState = {
	storeService: IStoreService
	stockService: IStockService
	userEmail: string | null
	setUserEmail: (email: string | null) => void
	validateAccessToken: () => Promise<void>
}

const useAppState = create<AppState>(set => ({
	// Servicios
	storeService: new StoreService(),
	stockService: new StockService(),

	// Estados globales
	userEmail: null,

	// Funciones globales
	setUserEmail: (email: string | null) => set({ userEmail: email }),
	validateAccessToken: async () => {
		const email = await validateAccessToken()
		set({ userEmail: email })
	},
}))

export default useAppState
