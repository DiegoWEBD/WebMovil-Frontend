import { create } from 'zustand'
import IOwnerService from '../../../application/owner_service/IOwnerService.interface'
import OwnerService from '../../../application/owner_service/OwnerService'

type OwnerState = {
	ownerService: IOwnerService
	selectedStoreName: string | undefined

	setSelectedStoreName: (storeName: string | undefined) => void
}

const useOwnerState = create<OwnerState>(set => ({
	// Servicios
	ownerService: new OwnerService(),

	selectedStoreName: undefined,

	// Setters
	setSelectedStoreName: (storeName: string | undefined) => {
		set(() => ({ selectedStoreName: storeName }))
	},
}))

export default useOwnerState
