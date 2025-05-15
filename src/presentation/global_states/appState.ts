import { create } from 'zustand'
import { validateAccessToken } from '../auth/auth'
import IStoreService from '../../application/store_service/IStoreService.interface'
import StoreService from '../../application/store_service/StoreService'
import IStockService from '../../application/stock_service/IStockService.interface'
import StockService from '../../application/stock_service/StockService'
import BasicUserInfo from '../user/BasicUserInfo'

type AppState = {
	storeService: IStoreService
	stockService: IStockService
	basicUserInfo: BasicUserInfo | null
	setBasicUserInfo: (userInfo: BasicUserInfo | null) => void
	validateAccessToken: () => Promise<void>
	isAppInstalled: () => boolean
}

const useAppState = create<AppState>((set, get) => ({
	// Servicios
	storeService: new StoreService(),
	stockService: new StockService(),

	// Estados globales
	basicUserInfo: null,

	// Funciones globales

	setBasicUserInfo: (userInfo: BasicUserInfo | null) =>
		set({ basicUserInfo: userInfo }),

	validateAccessToken: async () => {
		const basicUser = await validateAccessToken()
		if (get().basicUserInfo?.email === basicUser?.email) return

		set({ basicUserInfo: basicUser })
	},

	isAppInstalled: (): boolean => {
		return window.matchMedia('(display-mode: standalone)').matches
	},
}))

export default useAppState
