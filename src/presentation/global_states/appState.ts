import { create } from 'zustand'
import { validateAccessToken } from '../auth/auth'
import IStoreService from '../../application/store_service/IStoreService.interface'
import StoreService from '../../application/store_service/StoreService'

type AppState = {
	storeService: IStoreService
	userEmail: string | null
	setUserEmail: (email: string | null) => void
	validateAccessToken: () => Promise<void>
}

const useAppState = create<AppState>(set => ({
	// Servicios
	storeService: new StoreService(),

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
