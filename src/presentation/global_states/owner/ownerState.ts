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

const loadInitialSelectedOwnerStoreSummary = ():
	| OwnerStoreSummary
	| undefined => {
	return !localStorage.getItem('owner_selected_store_id')
		? undefined
		: {
				id: localStorage.getItem('owner_selected_store_id') as string,
				name: localStorage.getItem('owner_selected_store_name') as string,
				isActive:
					localStorage.getItem('owner_selected_store_is_active') === 'true',
		  }
}

const useOwnerState = create<OwnerState>(set => {
	const initialSelectedOwnerStoreSummary =
		loadInitialSelectedOwnerStoreSummary()

	return {
		// Servicios
		ownerService: new OwnerService(),

		selectedOwnerStoreSummary: initialSelectedOwnerStoreSummary,

		// Setters
		setSelectedStoreSummary: (
			ownerStoreSummary: OwnerStoreSummary | undefined
		) => {
			set(() => ({ selectedOwnerStoreSummary: ownerStoreSummary }))
		},
	}
})

export default useOwnerState
