import { ReactNode } from 'react'
import './Modal.css'
import Card from '../containers/Card/Card'

type ModalProps = {
	show: boolean
	onClose: () => void
	children: ReactNode
}

const Modal = ({ show, onClose, children }: ModalProps) => {
	return (
		<div className={`modal-overlay ${show ? 'show' : ''}`} onClick={onClose}>
			<Card
				className='modal-content'
				onClick={e => e.stopPropagation()} // prevent closing when clicking inside modal
			>
				<button className='modal-close' onClick={onClose}>
					&times;
				</button>
				{children}
			</Card>
		</div>
	)
}

export default Modal
