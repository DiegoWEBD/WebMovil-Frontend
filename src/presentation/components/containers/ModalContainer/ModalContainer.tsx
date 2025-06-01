import './ModalContainer.css'

// src/components/ModalContainer.tsx
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import useModalState from '../../../global_states/modalState'
import { IoMdClose } from 'react-icons/io'

const ModalContainer = () => {
	const { modals, closeModal } = useModalState()

	useEffect(() => {
		document.body.style.overflow = modals.length > 0 ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [modals])

	if (modals.length === 0) return null

	return createPortal(
		<div className='modal-container'>
			{modals.map((ModalComponent, index) => {
				const isTopModal = index === modals.length - 1
				return (
					<div key={index} className='modal-wrapper scrollbar'>
						<div
							style={{
								position: 'relative',
								width: '100%',
								margin: 'auto',
								height: '100dvh',
							}}
						>
							{/* Botón de cierre solo visible en el último modal */}
							{isTopModal && (
								<div className='modal-close'>
									<IoMdClose
										className='modal-close-icon'
										onClick={closeModal}
									/>
								</div>
							)}
							{ModalComponent}
						</div>
					</div>
				)
			})}
		</div>,
		document.body
	)
}

export default ModalContainer
