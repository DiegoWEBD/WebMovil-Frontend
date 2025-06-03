import { create } from 'zustand'
import IStockService from '../../application/stock_service/IStockService.interface'
import StockService from '../../application/stock_service/StockService'
import IStoreService from '../../application/store_service/IStoreService.interface'
import StoreService from '../../application/store_service/StoreService'
import { validateAccessToken } from '../auth/auth'
import BasicUserInfo from '../user/BasicUserInfo'
import ISaleService from '../../application/sale_service/SaleService.interface'
import SaleService from '../../application/sale_service/SaleService'

type AppState = {
	storeService: IStoreService
	stockService: IStockService
	saleService: ISaleService
	basicUserInfo: BasicUserInfo | null
	setBasicUserInfo: (userInfo: BasicUserInfo | null) => void
	dashboardOpen: boolean
	setDashboardOpen: (open: boolean) => void
	validateAccessToken: () => Promise<void>
	isAppInstalled: () => boolean
}

const loadInitialBasicUserInfo = (): BasicUserInfo | null => {
	return !localStorage.getItem('user_email')
		? null
		: {
				email: localStorage.getItem('user_email') as string,
				userType: localStorage.getItem('type') as string,
		  }
}

const useAppState = create<AppState>((set, get) => {
	const initialBasicUserInfo = loadInitialBasicUserInfo()

	return {
		// Servicios
		storeService: new StoreService(),
		stockService: new StockService(),
		saleService: new SaleService(),

		// Estados globales
		basicUserInfo: initialBasicUserInfo,

		// Funciones globales

		setBasicUserInfo: (userInfo: BasicUserInfo | null) =>
			set({ basicUserInfo: userInfo }),

		dashboardOpen: window.innerWidth > 850,
		setDashboardOpen: (open: boolean) => set({ dashboardOpen: open }),

		validateAccessToken: async () => {
			const basicUser = await validateAccessToken()
			if (get().basicUserInfo?.email === basicUser?.email) return

			set({ basicUserInfo: basicUser })
		},

		isAppInstalled: (): boolean => {
			return window.matchMedia('(display-mode: standalone)').matches
		},
	}
})

export default useAppState
