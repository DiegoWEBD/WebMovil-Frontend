import { ReactNode } from 'react'
import { create } from 'zustand'

type ModalState = {
	modals: ReactNode[]
	openModal: (modal: ReactNode) => void
	closeModal: () => void
}

const useModalState = create<ModalState>(set => ({
	modals: [],

	openModal: (modal: ReactNode) => {
		set(state => ({
			modals: [...state.modals, modal],
		}))
	},

	closeModal: () =>
		set(state => ({
			modals: state.modals.slice(0, -1),
		})),
}))

export default useModalState
