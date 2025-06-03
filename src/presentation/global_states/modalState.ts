import { ReactNode } from 'react'
import { create } from 'zustand'

type Modal = {
	modal: ReactNode
	headerVisible: boolean
}

type ModalState = {
	modals: Modal[]
	openModal: (modal: ReactNode, headerVisible?: boolean) => void
	closeModal: () => void
}

const useModalState = create<ModalState>(set => ({
	modals: [],

	openModal: (modal: ReactNode, headerVisible: boolean = false) => {
		set(state => ({
			modals: [...state.modals, { modal, headerVisible }],
		}))
	},

	closeModal: () =>
		set(state => ({
			modals: state.modals.slice(0, -1),
		})),
}))

export default useModalState
