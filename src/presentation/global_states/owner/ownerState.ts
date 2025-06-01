import { create } from 'zustand'
import IOwnerService from '../../../application/owner_service/IOwnerService.interface'
import OwnerService from '../../../application/owner_service/OwnerService'
import OwnerStoreSummary from '../../../application/owner_service/types/OwnerStoreSummary'
import { io, Socket } from 'socket.io-client'

type OwnerState = {
	ownerService: IOwnerService
	selectedOwnerStoreSummary: OwnerStoreSummary | undefined
	saleServiceSocket: Socket

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

	const socket = io('http://infofarmacos.cl/sale_service')

	socket.on('connect', () => {
		console.log('Connected to sale-service socket.io')
	})

	return {
		// Servicios
		ownerService: new OwnerService(),
		saleServiceSocket: socket,

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
