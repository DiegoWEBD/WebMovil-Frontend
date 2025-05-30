import { ReactNode } from 'react'
import { IoMdClose } from 'react-icons/io'
import Card from '../containers/Card/Card'
import './Modal.css'

type ModalProps = {
	show: boolean
	onClose: () => void
	children: ReactNode
}

const Modal = ({ show, onClose, children }: ModalProps) => {
	return (
		<div className={`modal-overlay ${show ? 'show' : ''}`} onClick={onClose}>
			<Card
				className='modal-content scrollbar'
				onClick={e => e.stopPropagation()}
			>
				<div className='modal-close'>
					<IoMdClose className='modal-close-icon' onClick={onClose} />
				</div>
				{children}
			</Card>
		</div>
	)
}

export default Modal
