import { create } from 'zustand'
import IOwnerService from '../../../application/owner_service/IOwnerService.interface'
import OwnerService from '../../../application/owner_service/OwnerService'
import OwnerStoreSummary from '../../../application/owner_service/types/OwnerStoreSummary'

type OwnerState = {
	ownerService: IOwnerService
	selectedOwnerStoreSummary: OwnerStoreSummary | undefined

	setSelectedStoreSummary: (
		ownerStoreSummary: OwnerStoreSummary | undefined
	) => void
}

const useOwnerState = create<OwnerState>(set => ({
	// Servicios
	ownerService: new OwnerService(),

	selectedOwnerStoreSummary: undefined,

	// Setters
	setSelectedStoreSummary: (
		ownerStoreSummary: OwnerStoreSummary | undefined
	) => {
		set(() => ({ selectedOwnerStoreSummary: ownerStoreSummary }))
	},
}))

export default useOwnerState
